import Image from "next/image";
export  default function Contenido2() {
    return (
        <main>
            <section>
                <h2>Sobre mi</h2>
                <p>Soy Jordy, desarrollador especializado en la construcción de aplicaciones web y móviles utilizando tecnologías
                    modernas como Angular, React, React Native y Flutter. Me enfoco en crear interfaces optimizadas, accesibles y
                    con alto rendimiento, aplicando principios de arquitectura modular, componentización, POO y buenas prácticas
                    de desarrollo. Me especializo en desarrollo frontend. <br/>Manejo herramientas como Bootstrap, TailwindCSS, HTML
                    y CSS para estructurar soluciones escalables y mantener código limpio y mantenible. Me interesa constantemente
                    aprender y mejorar procesos, optimizar la experiencia del usuario y ampliar mi dominio técnico.
                    Cuento con nivel básico de inglés y continúo formándome para trabajar en equipos internacionales y
                    participar en proyectos globales.</p>
            </section>
            <section className="programas">
                <div className="imagenes1">
                    <Image src="/1.jpg" width={500}
                        height={500} alt="imagen" />
                    <Image src="/2.jpg" width={500}
                        height={500} alt="imagen" />
                </div>
                <div className="imagenes2">
                    <Image src="/3.jpg" width={500}
                        height={500} alt="imagen" />
                    <Image src="/4.jpg" width={500}
                        height={500} alt="imagen" />
                </div>
            </section>
        </main>
    );
}