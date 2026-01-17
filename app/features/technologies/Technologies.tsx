"use client"

import TitleSection from "@/app/components/title-section/TitleSection";
import { technologies } from "@/app/utils/mapper/technologies.mapper";
import Image from "next/image";

const Technologies = ({ technologiesId }: { technologiesId: string[] }) => {
    return (
        <div className="my-10">
            <TitleSection title="Tecnologías" id="technologies" />
            <div className="flex flex-wrap gap-4 justify-around items-center bg-[#00cca850] my-10 py-5 
            w-[calc(100%)]">
                {technologiesId.map((technology, index) => (
                    <div key={index} className="hover:scale-110 transition-all duration-300">
                        <Image src={technologies[parseInt(technology)]} alt="technology" width={150} height={150} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
