
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { ButtonProgram, ButtonProgram2} from './button-cards';
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

export default function CardProject ({tittle, image, imagetittle, description}:{tittle: string, image: string, imagetittle: string, description: string}) {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title={imagetittle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {tittle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonProgram icon={FaGithub} description="Código" url='' />
                    <ButtonProgram2 icon={RiShareBoxLine} description="Demo" url='' />
                </CardActions>
            </Card>
        </div>
    )
}