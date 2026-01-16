import Image from "next/image";
import { AboutMe } from "../Home";

export default function Aboutme({ aboutme }: { aboutme: AboutMe[][] }) {
    return (
        <main className="aboutme " id="aboutme">
            <div className="flex gap-5 px-10 flex-row justify-center items-center mb-6">
                <div className="h-[2px] bg-[var(--border)] w-[40%]"></div>
                <h1 className="text-4xl w-[20%] font-bold text-center text-foreground">Sobre mi</h1>
                <div className="h-[2px] bg-[var(--border)] w-[40%]"></div>
            </div>

            {aboutme.map((item, index) => (
                <p key={index} className="text-xl mb-10">
                    {item.map((aboutme, index) => (
                        (aboutme.hightlight)
                            ? <span key={index} className={aboutme.hightlight ? "text-[var(--primary)]" : ""}>{aboutme.text}</span>
                            : <span key={index}>{aboutme.text}</span>
                    ))}
                </p>
            ))}
        </main>
    );
}