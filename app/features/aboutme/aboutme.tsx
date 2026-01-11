import Image from "next/image";

export default function Aboutme() {
    return (
        <main className="aboutme " id="aboutme">
            <div className="flex gap-5 px-10 flex-row justify-center items-center mb-6">
                <div className="h-[2px] bg-[var(--border)] w-[40%]"></div>
                <h1 className="text-4xl w-[20%] font-bold text-center text-foreground">Sobre mi</h1>
                <div className="h-[2px] bg-[var(--border)] w-[40%]"></div>
            </div>

            <p className="text-xl mb-10">Soy Jordy, desarrollador especializado en la construcción de aplicaciones web y móviles utilizando tecnologías
                modernas como <span className="text-[var(--primary)]">Angular, React, React Native y Flutter.</span> Me enfoco en crear interfaces optimizadas, accesibles y
                con alto rendimiento, aplicando principios de arquitectura modular, componentización, POO y buenas prácticas
                de desarrollo. Me especializo en desarrollo frontend.</p>
            <p className="text-xl">Manejo herramientas como <span className="text-[var(--primary)]">Bootstrap, TailwindCSS, HTML
                y CSS</span> para estructurar soluciones escalables y mantener código limpio y mantenible. Me interesa constantemente
                aprender y mejorar procesos, optimizar la experiencia del usuario y ampliar mi dominio técnico.
                Cuento con nivel básico de inglés y continúo formándome para trabajar en equipos internacionales y
                participar en proyectos globales.</p>
        </main>
    );
}