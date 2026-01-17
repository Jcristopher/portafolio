
const ButtonProgram = ({icon: Icon, description, url}: {icon? : React.ElementType, description: string, url: string}) => {
    return (
        <a href={url} target="_blank">
            <button className="text-5xl flex gap-2 items-center border-[#a4b7b7]  bg-[#191919] rounded-lg border-[0.5px] text-[#ffffff] px-5 py-1 hover:bg-[#11b496]/80 hover:text-black transition-all text-[1.2rem] font-medium cursor-pointer">
            {Icon && (
                <Icon />
            )} <span className="text-[10px]">{description}</span> 
            </button>
        </a>
    )
}
const ButtonProgram2 = ({icon: Icon, description, url}: {icon? : React.ElementType, description: string, url: string}) => {
    return (
        <a href={url} target="_blank">
            <button className="text-5xl flex gap-2 items-center border-[#a4b7b7]  bg-[#11b496] rounded-lg border-[0.1px] text-[#000000] px-5 py-1 hover:bg-[#000000]/80 hover:text-white transition-all text-[1.2rem] font-medium cursor-pointer">
                {Icon && (
                    <Icon />
                )} <span className="text-[10px]">{description}</span>
            </button>
        </a>
    )
}

export {ButtonProgram, ButtonProgram2}