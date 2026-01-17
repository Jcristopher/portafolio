interface Title {
    title: string;
    id: string;
}
const TitleSection = ({title, id}: Title) => {
    return (
        <div className='flex gap-5 px-10 flex-row justify-center items-center mb-6' id={id}>
            <div className="h-0.5 bg-(--border) w-[40%]"></div>
            <h1 className="text-4xl w-[20%] font-bold text-center text-foreground">{title}</h1>
            <div className="h-0.5 bg-(--border) w-[40%]"></div>
        </div>
    );
};

export default TitleSection;
