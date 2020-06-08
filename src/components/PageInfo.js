import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  about: {
    width: '50%',
    margin: '0 auto',
  },
  body: {
    width: '75%',
    margin: '0 auto',
  },
}));

const PageInfo = ({title, body}) => {

  const classes = useStyles();

  return (
    <>
      <Typography variant='h3' color='primary' align='center'>{title}</Typography>
      <div className={classes.about}>
        <Typography variant='body1' color='textPrimary'>
          {body}
        </Typography>
      </div>
      <Box m={3}/>
      <Divider variant='inset' className={classes.body}/>
      <Box m={4}/>
    </>
  );
}
 
export default PageInfo;