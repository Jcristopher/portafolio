import Image from "next/image";
import Button from "../../components/shared/button/button";
import { VscMail, VscFile } from "react-icons/vsc";
import { DiGithub } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export interface PersonalDetailProps {
    fullName: string;
    job: string;
    description: string;
    link_linkedin?: string;
    link_github?: string;
    email?: string;
    photoURL?: string;
}

export default function PersonalDetail({
    fullName,
    job,
    description,
    link_linkedin,
    link_github,
    email,
    photoURL
}: PersonalDetailProps) {
    return (
        <main className="inicial p-4 text-[#8f8f8f]" id="homes">
            <section>
                <div className="flex flex-col">
                    <h4 className="text-2xl text-[#00cca8]">Hola, soy</h4>
                    <h1 className="text-[3rem] font-bold text-white">{fullName}</h1>
                    <h3 className="text-3xl font-semibold">{job}</h3>
                    <p className="text-[1.5rem] pt-10">{description}</p>
                </div>

                <div className="flex gap-4 py-10">
                    <Button description="Contactar" icon={VscMail} />
                    <Button description="Descargar CV" icon={VscFile} />
                </div>
                <div className="flex gap-4">
                    {link_github && <a target="_blank" href={link_github}><DiGithub className="text-[2rem]" /></a>}
                    {link_linkedin && <a target="_blank" href={link_linkedin}><AiFillLinkedin className="text-[2rem]" /></a>}
                    {email && <a target="_blank" href={`mailto:${email}`}><VscMail className="text-[2rem]" /></a>}
                </div>
            </section>

            <section className="fotoperfil">
                {photoURL && <Image className="mifoto"
                    src={photoURL as string}
                    width={500}
                    height={500}
                    alt="imagen de perfil"
                />}
            </section>
        </main>
    );
}