import React, {useEffect, useState} from 'react';
import TWELVE from '../res/12apostles.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import axios from 'axios';
import Photos from './Photos.js';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  button: {
    margin: theme.spacing(1),
    maxWidth: '125px', 
    maxHeight: '30px', 
    minWidth: '125px', 
    minHeight: '30px'
  },
  divider: {
    margin: theme.spacing(2),
  }
}));

const Home = () => {
  const classes = useStyles();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.imgur.com/3/account/everdon/albums/ids/0',
      headers: { 'authorization': 'Client-ID ' + process.env.REACT_APP_IMGUR_KEY }
    })
      .then((res) => {
        const albumID = res.data.data[0];
        axios({
          method: 'get',
          url: 'https://api.imgur.com/3/album/'+ albumID + '/images',
          headers: { 'authorization': 'Client-ID ' + process.env.REACT_APP_IMGUR_KEY }
        })
          .then((res) => {
            const photos = res.data.data.map((photo) => {
              return {
                id: photo.id,
                img: photo.link,
                title: photo.title,
                location: photo.description,
              }
            })
            setPhotos(photos);
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));
  }, [])
  
  return (
      <div className={classes.root}>
        <Grid container direction='column' spacing={0} alignItems='center'>
          <Grid item>
            <Typography color='primary' variant='h3'>Hi! I'm Adryan</Typography>
          </Grid>
          <Grid item>
            <Avatar alt="Adryan Rutherford" src={TWELVE} className={classes.large}/>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Grid item>
              <Button variant="contained" component={Link} to='/about' color='primary' className={classes.button}>
                About
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" component={Link} to='/projects' color='primary' className={classes.button}>
                Projects
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Grid item>
              <Button variant="contained" component={Link} to='/music' color='primary' className={classes.button}>
                Music
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color='primary' className={classes.button}>
                <MuiLink underline='none' color='inherit' href='https://drive.google.com/file/d/1cdRN2o_V4u7oPKcqNiD2I_pkZfl5zoRA/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</MuiLink>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider variant='inset' className={classes.divider}/>
        <Photos photos={photos}/>
      </div>
  );
}
 
export default Home;