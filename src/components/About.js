import React from 'react';
import Places from './Places.js';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

const About = () => {

  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <Typography variant='h3'>About</Typography>
      <Places/>
    </div> 
  );
}
 
export default About;