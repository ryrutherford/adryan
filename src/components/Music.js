import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
///import Typography from '@material-ui/core/Typography';
import PageInfo from './PageInfo.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  body: {
    width: '75%',
    margin: '0 auto',
  },
}));

const Music = () => {

  const classes = useStyles();

  const title = 'My Music';
  const body = 'I\'ve been making beats since I was 15 but started taking it more seriously when I turned 18. I tend to focus more on Hip Hop and RnB beats but I have also made some Tech House tracks recently. Check out some of my recent beats below!';

  return ( 
    <div className={classes.root}>
      <PageInfo title={title} body={body}/>
      <div className={classes.body}>
        
      </div>
    </div>
  );
}
 
export default Music;