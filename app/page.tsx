import { FaCircleUser } from "react-icons/fa6";

export default async function Page() {
    return (
        <div className="m-auto text-center w-[50rem] h-[50rem] flex flex-col justify-center items-center gap-4">
            <FaCircleUser size={125} />
            <h1 className="text-4xl font-bold">Bienvenido</h1>
            <p className="text-xl">Por favor, ingrese un nombre en la URL para continuar</p>
            <p className="text-xl">Ejemplo: <span className="text-[var(--primary)]">/roalp</span></p>
        </div>
    );
}
