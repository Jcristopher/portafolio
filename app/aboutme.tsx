import Image from "next/image";
import './globals.css';

export default function Aboutme() {
    return (
        <main className="aboutme" id="aboutme">
            <section>
                <h2>Sobre mi</h2>
                <p>Soy Jordy, desarrollador especializado en la construcción de aplicaciones web y móviles utilizando tecnologías
                    modernas como Angular, React, React Native y Flutter. Me enfoco en crear interfaces optimizadas, accesibles y
                    con alto rendimiento, aplicando principios de arquitectura modular, componentización, POO y buenas prácticas
                    de desarrollo. Me especializo en desarrollo frontend. <br />Manejo herramientas como Bootstrap, TailwindCSS, HTML
                    y CSS para estructurar soluciones escalables y mantener código limpio y mantenible. Me interesa constantemente
                    aprender y mejorar procesos, optimizar la experiencia del usuario y ampliar mi dominio técnico.
                    Cuento con nivel básico de inglés y continúo formándome para trabajar en equipos internacionales y
                    participar en proyectos globales.</p>
            </section>

            <section className="programas">
                <div className="imagenespro">
                    <Image src="/React.webp" width={500}
                        height={500} alt="imagen" />
                    <Image src="/Flutter2.png" width={500}
                        height={500} alt="imagen" />
                </div>
                <div className="imagenespro">
                    <Image src="/ReactNative2.jpg" width={500}
                        height={500} alt="imagen" />
                    <Image src="/angular.webp" width={500}
                        height={500} alt="imagen" />
                </div>
            </section>
        </main>
    );
}