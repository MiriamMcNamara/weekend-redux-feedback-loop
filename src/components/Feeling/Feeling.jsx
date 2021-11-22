import { Grid, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Feeling( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ feelingInput, setFeelingInput ]=useState( 0 );

    const handleInput = ()=>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setFeelingInput( event.target.value );
        console.log( 'feelingInput:', feelingInput );
               if( event.target.value > 0 && event.target.value < 6 ){
        setLink( true )}
        else {
          setLink( false );
        }
    }

    const handleCloseAgree = () => { //button click handler
        console.log('in handleCloseAgree' );
        dispatch( { type: 'ADD_FEELING_FEEDBACK',  payload: feelingInput } ) }

    const [open, setOpen] = useState(false);

    const [link, setLink] = useState(false);

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
                <Card >
                  <CardContent>
                    <Typography variant="h4" align="center" color="secondary">1 of 4 Pages</Typography>
                    <br />
                    <Typography align="center" variant="h5">How are you feeling today?</Typography>
                    <br />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                    <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>handleInput ( event )}></TextField>
                    <br />
                    <br />
                    { link ?
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} onClick={handleCloseAgree}>
                    <Link to="/understanding">NEXT</Link></Button>:
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} onClick={handleClickOpen}>
                    NEXT</Button>
                    }
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

export default Feeling;