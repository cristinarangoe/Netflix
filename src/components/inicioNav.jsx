import NavBarLogo from "./NavBarLogo";

export default function InicioNav() {
  return (
    <nav className="px-[20px] ">
      <div className="flex flex-row w-full justify-between pt-[0.5rem] items-center">
        <NavBarLogo />
        <button className="text-white bg-red-600 py-[0.25rem] px-[0.5rem] text-[0.9rem] rounded-[3px]">
          Iniciar sesion
        </button>
      </div>
    </nav>
  );
}