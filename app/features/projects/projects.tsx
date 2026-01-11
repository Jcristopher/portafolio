import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardProject from '@/app/components/card-project/cards';

export default function Projects() {
    return (
        <section className="mt-10">
            <main className='flex gap-5 px-10 flex-row justify-center items-center mb-6' id='projects'>
                    <div className="h-0.5 bg-(--border) w-[40%]"></div>
                    <h1 className="text-4xl w-[20%] font-bold text-center text-foreground">Proyectos</h1>
                    <div className="h-0.5 bg-(--border) w-[40%]"></div>
            </main>
            <main className="cards" id="projects">
                
                <CardProject tittle="Proyecto Angular" image='random' imagetittle='random' description='asdjasdkjahsdkja' />

                <CardProject tittle="Proyecto React" image='random' imagetittle='random' description='asdjasdkjahsdkja' />

                <CardProject tittle="Proyecto ReactNative" image='random' imagetittle='random' description='asdjasdkjahsdkja' />
                
            </main>
        </section>
    );
}
