import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link} from "react-router-dom";



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: '100px',
      marginLeft: '70px',
      display: 'inline-block',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    media: {
      height: 170,
    }
});



const CardInsecto = ({spider}) =>{

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const newTo = { 
        pathname: `/item/${spider._id}`
      };
  

  return (
    <div className='cards' style={{ width: '18rem' }} >
        <div className='card_info' style={{ width: '18rem' }}>
    <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={spider.url}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                       {spider.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {spider.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
              

             <Link to={newTo}>
                    Mas Information
             </Link>
                 
            
            <Button disabled={open}
                    variant="outlined"
                    onClick={() => {
                    setOpen(false);
            }} size="small" color="primary">
            Aprender más
            </Button>
      </CardActions>
    </Card>


    {/* <Collapse in={open}>
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
      </Collapse>  */}

        </div>    
    </div>
  )
}

export default CardInsecto