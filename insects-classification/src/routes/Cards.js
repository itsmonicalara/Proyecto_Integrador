import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image_reptil from '../media/lizard.jpg';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: '100px',
      marginLeft: '70px',
      display: 'inline-block',
      alignItems: 'center',
    },
    media: {
      height: 140,
    },
});



function Cards() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


  return (
    <div className='cards'>
        <div className='card_info'>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
            <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>


    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>

    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Esta especie no es venenosa!
        </Alert>
      </Collapse> 

    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image_reptil}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
            Compartir
            </Button>
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(true);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>
        </div>    
    </div>
  )
}

export default Cards