import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-lg px-[36px] max-w-[450px]">
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </h3>
      <input
        {...register("email", { required: true })}
        className="w-full p-[10px]"
      />
    </form>
  );
}