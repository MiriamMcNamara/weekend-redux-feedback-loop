import { Grid, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Understanding( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ understandingInput, setUnderstandingInput ]=useState( 0 );

    const handleInput = ()=>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setUnderstandingInput( event.target.value );
    }

    const handleCloseAgree = () => { //button click handler
        console.log('in handleCloseAgree' );
        if ( understandingInput === 0 ){ 
            handleClickOpen();
            console.log( 'no input') }
        //else { send data to the store and link to next page}
        else { console.log( 'you have a number' );
        dispatch( { type: 'ADD_UNDERSTANDING_FEEDBACK',  payload: understandingInput } ) }
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                  <CardContent>
                    <Typography variant="h4" align="center" color="secondary">2 of 4 Pages</Typography>
                    <br />
                    <Typography align="center" variant="h5">How well are you understanding the content?</Typography>
                    <br />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                    <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>handleInput ( event )}></TextField>
                    <br />
                    <br />
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} onClick={handleCloseAgree}>
                      <Link to="/support">NEXT</Link></Button>
                    </CardActions>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Input Required"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select a number between 1 and 5 before proceeding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>

                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
       
    )
}

export default Understanding;