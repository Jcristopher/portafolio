import Image from "next/image";
export default function Contenido() {
    return (
        <main>
            <section>
                <div className="saludo">
                    <h2>Hola, soy</h2>
                    <h4>Jordy Cristopher <br/>Paredes Tavara</h4>
                    <h3>Desarrollador Web</h3> <br/>
                    <p>Soy desarrollador web y mobile enfocado en crear productos digitales sólidos y funcionales.
                        Trabajo con tecnologías como Angular, React, React Native y Flutter para transformar ideas en aplicaciones completas,
                        rápidas y accesibles. Mi objetivo es ofrecer interfaces intuitivas y un rendimiento óptimo en cada proyecto.
                    </p>
                </div>

                <div className="botones">
                    <button>
                        <a href="https://www.google.com">contactar</a>
                    </button>
                    <button>
                        <a href="https://www.youtube.com">descargar cv</a>
                    </button>
                </div>

                <div className="redes">
                    <a href="https://github.com/Jcristopher">github</a>
                    <a href="https://www.linkedin.com">linkedin</a>
                    <a href="mailto:jparedestavara@gmail.com">mail</a>
                </div>
            </section>
            
            <section>
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </section>
        </main>
    );
}