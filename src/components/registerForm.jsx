import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => navigate(`/signup/${data.email}`);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <h3 className="md:text-2xl px-[36px]">
        ¿Quieres ver Netflix ya? Da click en el siguiente boton para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </h3>
      <a className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white hover:text-white" href="https://netflix-auth.auth.us-east-1.amazoncognito.com/signup?client_id=60vc4rb01ggqs6jqg6dch2brt7&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https%3A%2F%2Fd3mymhkbgy5lvd.cloudfront.net%2F">
        <span className="text-[1rem]">Registrarse</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </a>
    </form>
  );
}
