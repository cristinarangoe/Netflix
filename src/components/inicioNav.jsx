import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";

export default function InicioNav() {
  return (
    <nav className=" ">
      <div className="flex flex-row w-full justify-between items-center">
        <Link to="/home">
          <NavBarLogo />
        </Link>
        <div className="">
            <a className="text-white bg-red-600 py-[0.25rem] px-[0.5rem] text-[0.9rem] rounded-[3px] mr-5 text-white hover:text-white" href = "https://netflix-auth.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=60vc4rb01ggqs6jqg6dch2brt7&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https%3A%2F%2Fd3mymhkbgy5lvd.cloudfront.net%2F">
              Iniciar sesion
            </a>
        </div>
      </div>
    </nav>
  );
}
