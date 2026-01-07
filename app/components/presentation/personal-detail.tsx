import Image from "next/image";
import Button from "../shared/button/button";
import { VscMail, VscFile } from "react-icons/vsc";
import { DiGithub } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";


export default function PersonalDetail() {
    const name = "Jordy Cristopher Paredes Tavara";
    const job = "Desarrollador Web";
    const description = "Soy desarrollador web y mobile enfocado en crear productos digitales sólidos y funcionales.\
                        Trabajo con tecnologías como Angular, React, React Native y Flutter para transformar ideas en aplicaciones completas,\
                        rápidas y accesibles. Mi objetivo es ofrecer interfaces intuitivas y un rendimiento óptimo en cada proyecto.";
    return (
        <main className="inicial p-4 text-[#8f8f8f]" id="homes">
            <section>
                <div className="flex flex-col">
                    <h4 className="text-2xl text-[#00cca8]">Hola, soy</h4>
                    <h1 className="text-[3rem] font-bold text-white">{name}</h1>
                    <h3 className="text-3xl font-semibold">{job}</h3>
                    <p className="text-[1.5rem] pt-10">{description}</p>
                </div>

                <div className="flex gap-4 py-10">
                    <Button description="Contactar" icon={VscMail} />
                    <Button description="Descargar CV" icon={VscFile} />
                </div>

                <div className="flex gap-4">
                    <a target="_blank" href="https://github.com/Jcristopher"><DiGithub className="text-[2rem]" /></a>
                    <a target="_blank" href="https://www.linkedin.com"><AiFillLinkedin className="text-[2rem]" /></a>
                    <a target="_blank" href="mailto:jparedestavara@gmail.com"><VscMail className="text-[2rem]" /></a>
                </div>
            </section>

            <section className="fotoperfil">
                <Image className="mifoto"
                    src="/cv.jpg"
                    width={500}
                    height={500}
                    alt="imagen de perfil"
                />
            </section>
        </main>
    );
}