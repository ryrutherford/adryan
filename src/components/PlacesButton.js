import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Places from './Places.js'

const PlacesButton = ({width}) => {

  /**
   * function to determine screen size breakpoint used to determin full screen size
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        See Where I've Been
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Places I've Visited"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click on a marker for more info
          </DialogContentText>
          <Places/>
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
 
export default withWidth()(PlacesButton);