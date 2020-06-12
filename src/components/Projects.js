import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageInfo from './PageInfo.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { programmingLanguages, tooling } from './ProgrammingData.js';
import ChipList from './ChipList.js';
import CardDisplay from './CardDisplay.js';
import {projectData} from './ProgrammingData.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  about: {
    width: '50%',
    margin: '0 auto',
  },
  body: {
    width: '75%',
    margin: '0 auto',
  },
  gridItem: {
    display: 'flex',
  }
}));

const Projects = () => {

  const classes = useStyles();

  const body = 'I always had an interest in programming but was too scared to try it out. It wasn\'t until my second semester in McGill\'s Faculty of Management that I took a programming course. Ever since then I\'ve gained a love for building things with code and spent two years changing faculties so I could pursue this passion. Ever since then, I\'ve worked on a variety of projects related to my interests. Check out some of them below!';
  const title = 'Projects and Skills';

  return (
    <div className={classes.root}>
      <PageInfo title={title} body={body}/>
      <div className={classes.body}>                
        <Grid
          container
          direction="row"
          justify="flexStart"
          spacing={3}
        >
        {
            projectData.map((project, index) => {
              return (
                <Grid item xs={12} sm={6} key={index} className={classes.gridItem}>
                  <CardDisplay data={project}/>
                </Grid>
              )
            })
          }
        </Grid>
        <Box m={3}/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={12} lg={6}>
            <Typography variant='h5' color='primary'>
              Proficient Languages
            </Typography>
            <ChipList chiplist={programmingLanguages} elevation={1}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <Typography variant='h5' color='primary'>
              Tools, Frameworks, Libraries, etc.
            </Typography>
            <ChipList chiplist={tooling} elevation={1}/>            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
 
export default Projects;