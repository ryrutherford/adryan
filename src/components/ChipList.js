import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  paperScroll: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexWrap: 'nowrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipList = ({chiplist, elevation}) => {

  const classes = useStyles();

  return (
    <Paper component="ul" className={elevation === 0 ? classes.paperScroll : classes.paper} elevation={elevation}>
      {chiplist.map((chip, index) => {
        return (
          <li key={index}>
            <Chip
              color='primary'
              variant={elevation === 0 ? 'default' : 'outlined'}
              label={chip.data}
              avatar={<Avatar alt={chip.data} src={chip.img} />}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
 
export default ChipList;