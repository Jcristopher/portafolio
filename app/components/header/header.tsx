'use client'
import { useState } from "react";
import { ButtonHeader } from "./button-header";
export default function CustomHeader() {
    const scrollToWithHeader = (id: string) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        const header = document.querySelector("header");
        if (!el) return;

        const headerH = header ? header.getBoundingClientRect().height : 0;
        const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
    const [activeSection, setActiveSection] = useState<string>('homes');
    return (
        <header className="flex gap-10 justify-end py-7 px-60 sticky 
        top-0 z-50 bg-background/70 backdrop-blur-md border-b-[0.3px] border-[#00cca8]">
            <ButtonHeader activeSection={activeSection} scrollToWithHeader={scrollToWithHeader} text="Presentación" id="homes" />
            <ButtonHeader activeSection={activeSection} scrollToWithHeader={scrollToWithHeader} text="Sobre mi" id="aboutme" />
            <ButtonHeader activeSection={activeSection} scrollToWithHeader={scrollToWithHeader} text="Proyectos" id="projects" />
            <ButtonHeader activeSection={activeSection} scrollToWithHeader={scrollToWithHeader} text="Contacto" id="contact" />
            <ButtonHeader activeSection={activeSection} scrollToWithHeader={scrollToWithHeader} text="Habilidades" id="skills" />
        </header>
    );
}