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

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
  }
});

const ProjectInfo = ({project}) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={project.titleImg}
          title={project.title}
        />      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.link ? <Link href={project.link} rel='noopener noreferrer' target='_blank' color='textPrimary'>{project.title}</Link> : project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.body}
            <ChipList chiplist={project.languages} elevation={0}/>
          </Typography>
        </CardContent>      
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary">
          <Link href={project.github} rel='noopener noreferrer' target='_blank'>Github</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
 


export default ProjectInfo;