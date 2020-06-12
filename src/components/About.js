import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PlacesButton from './PlacesButton.js';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  about: {
    width: '75%',
    margin: '0 auto',
  },
  body: {
    width: '75%',
    margin: '0 auto',
  },
  gif: {
    width: 'auto',
    height: '350px',
    margin: theme.spacing(1),
  },
  margin2: {
    margin: theme.spacing(2),
  }
}));

const About = () => {

  const classes = useStyles();

  /**
   * function to display my age correctly
   */
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date('10 Jun 1999 00:00:00 EST');
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  return ( 
    <div className={classes.root}>
      <Typography variant='h3' color='primary'>About Me</Typography>
      <div className={classes.about}>
        <Typography variant='body1' color='textPrimary'>
          I'm a {getAge()} year old student studying Computer Science and Musical Science and Technology at McGill University.
          Between coursework and running the non-profit <MuiLink href='https://www.facebook.com/suitsumontreal/' rel='noopener noreferrer' target='_blank'>Suits U Montreal</MuiLink>, 
          I make time for <MuiLink component={Link} to='/projects'>personal projects</MuiLink> 
          , <MuiLink component={Link} to='/music'>music production</MuiLink>,
          DJing, motorcycling, basketball, and powerlifting. 
        </Typography>
      </div>
      <Box m={3}/>
      <Divider variant='inset' className={classes.body}/>
      <Box m={4}/>
      <div className={classes.body}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color='primary'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant='h5' color='primary'>DJing Makes Me Smile</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              I discovered a passion for DJing when I was 19 and have since taught myself how to mix accross a variety of genres but tend to focus on Tech House, Hip Hop and RnB.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color='primary'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h5' color='primary'>I Like to Go Fast</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              When I visited the BMW Motorrad factory in Berlin I gained a massive interest for Motorcycling, buying my first bike in 2020!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color='primary'/>}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant='h5' color='primary'>5/3/1 Keeps Me Strong</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction='column' spacing={0} alignItems='center'>
              <Grid item>
                <Typography>
                  After quitting soccer in 2016 I needed a way to stay in shape and after discovering Jim Wendler's 5/3/1 program I have stuck to it ever since.            
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color='primary'/>}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant='h5' color='primary'>I Want to Travel the World</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction='column' spacing={0} alignItems='center'>
              <Grid item>
                <Typography>
                  I've been fortunate enough to travel a lot in my life and look forward to many more trips in the future. Check out the map below to see the places I've visited.                  
                </Typography>
              </Grid>
              <Grid item>
                <Box m={2}/>
                <PlacesButton/>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div> 
  );
}
 
export default About;