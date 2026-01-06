export const ButtonHeader = ({ activeSection, scrollToWithHeader, text, id }: { activeSection: string, scrollToWithHeader: (id: string) => void, text: string, id: string }) => {
    return (
        <button className={activeSection === id ?
            "text-[#00cca8] text-[20px]" :
            "hover:text-[#00cca8] cursor-pointer duration-300 text-[20px]"
        }
            onClick={() => scrollToWithHeader(id)}>
            {text}
        </button>
    )
}

export default ButtonHeader;