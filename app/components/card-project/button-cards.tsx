
const ButtonProgram = ({icon: Icon, description}: {icon? : React.ElementType, description: string}) => {
    return (
        <button className="text-5xl flex gap-2 items-center border-[#a4b7b7]  bg-[#191919] rounded-[0.5rem] border-[0.5px] text-[#ffffff] px-5 py-1 hover:bg-[#11b496]/80 hover:text-black transition-all text-[1.2rem] font-medium cursor-pointer">
            {Icon && (
                <Icon />
            )} {description}
        </button>
    )
}
const ButtonProgram2 = ({icon: Icon, description}: {icon? : React.ElementType, description: string}) => {
    return (
        <button className="text-5xl flex gap-2 items-center border-[#a4b7b7]  bg-[#11b496] rounded-[0.5rem] border-[0.1px] text-[#000000] px-5 py-1 hover:bg-[#000000]/80 hover:text-white transition-all text-[1.2rem] font-medium cursor-pointer">
            {Icon && (
                <Icon />
            )} {description}
        </button>
    )
}

export {ButtonProgram, ButtonProgram2}