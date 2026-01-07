const Button = ({ description, icon: Icon }: { description: string, icon?: React.ElementType }) => {
    return (
        <button className="border-[#00cca8] rounded-[0.5rem] border-[1px] text-[#00cca8] px-4 
        py-2 hover:bg-[#00cca8]/80 hover:text-white transition-all
        text-[1.2rem] font-medium cursor-pointer flex gap-2 flex-row
        justify-center items-center">
            <span>
                {Icon && (
                    <Icon />
                )}
            </span>
            {description}
        </button>
    );
}
export default Button;