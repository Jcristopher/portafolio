import { MdOutlineErrorOutline } from "react-icons/md";
export default function NotFoundPage() {
    return (
        <div className="m-auto text-center gap-4 w-[45rem] h-[45rem] flex flex-col justify-center items-center">
            <MdOutlineErrorOutline size={200} />
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">No tenemos información relacionada con la consulta realizada</h2>
            <p className="text-xl">Por favor, verifica la URL y vuelve a intentarlo.</p>
            <p className="text-xl"><span className="text-[var(--primary)]">En cualquier caso contactar con el desarrollador a consultar la URL</span></p>
        </div>
    );
}