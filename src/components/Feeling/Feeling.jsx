import { Grid, Typography, Box, Card, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Feeling( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ feelingInput, setFeelingInput ]=useState( 0 );

    const handleInput = ()=>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setFeelingInput( event.target.value );
    }

    const handleCloseAgree = () => { //button click handler
        console.log('in handleCloseAgree' );
        //if (textfield = 1-5) { send data to the store and link to next page}
        //if (textfield = 0 ) { pop up dialogue, bc it isn't a num you can select}
        //dispatch( { type: 'ADD_CUSTOMER',  payload: { newCustomer } } )
    }

    return(
        <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                    <Typography variant="h4" align="center" color="secondary">1 of 4 Pages</Typography>
                    <Typography align="center">How are you feeling today?</Typography>
                    <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>handleInput ( event )}></TextField>
                    <Button variant="contained" size="large" color="secondary" onClick={handleCloseAgree}>NEXT</Button>
                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
       
    )
}

export default Feeling;