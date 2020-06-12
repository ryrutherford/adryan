import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ChipList from './ChipList.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
  },
  video: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  body: {
    textAlign: 'center',
  }
});

const CardDisplay = ({data, width}) => {

  /**
   * function to determine screen size breakpoint used to determine full screen size
   */
  const getFullScreenBrk = () => {
    if (isWidthUp('xl', width)) {
      return 'xl';
    }

    if (isWidthUp('lg', width)) {
      return 'lg';
    }

    if (isWidthUp('md', width)) {
      return 'md';
    }

    return 'sm';
  }

  const classes = useStyles();

  //state determines whether the map dialog is open or not
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(getFullScreenBrk()));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={data.titleImg}
            title={data.title}
          />      
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.link ? <Link href={data.link} rel='noopener noreferrer' target='_blank' color='textPrimary'>{data.title}</Link> : data.title}
            </Typography>
            {data.languages ? 
              <Typography variant="body2" color="textSecondary" component="p">
                <ChipList chiplist={data.languages} elevation={0}/>
              </Typography>
              :
              null
            }
          </CardContent>      
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            {data.languages ? 'Learn More' : 'Watch Video'}
          </Button>
          <Button size="small" color="primary">
            {data.github ? <Link href={data.github} rel='noopener noreferrer' target='_blank'>Github</Link> : null}
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen={data.video ? fullScreen : false}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{data.title}</DialogTitle>
        <DialogContent>
          {data.body ? 
            <DialogContentText className={classes.body}>
              {data.body}
            </DialogContentText>
            :
            null
          }
          <div className={classes.video}>
          {data.video ? 
            <ReactPlayer 
              url={data.video}
              controls
              width={data.languages ? '65%' : '65%'}
              height={data.languages ? '65%' : '450px'}
              /> : null}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
 


export default withWidth()(CardDisplay);