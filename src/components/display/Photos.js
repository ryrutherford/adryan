import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '95%',
    height: 450,
  },
}));

const Photos = ({photos, width}) => {

  const classes = useStyles();

  /**
   * function to determine number of columns in gridlist based on screen size
   */
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 4;
    }

    if (isWidthUp('lg', width)) {
      return 3;
    }

    if (isWidthUp('md', width)) {
      return 2;
    }

    return 1;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={getGridListCols()} className={classes.gridList}>
        <GridListTile key="Subheader" cols={getGridListCols()} style={{ height: 'auto' }}>
          <ListSubheader component="div">Some of my recent photos</ListSubheader>
        </GridListTile>
        {photos !== [] && photos.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.location}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
 
export default withWidth()(Photos);