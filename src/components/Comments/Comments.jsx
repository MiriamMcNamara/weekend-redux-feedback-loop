import { Grid, Typography, Box, Card, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Comments( props ){
    // const[ name, setName ]=useState( null );

    const dispatch = useDispatch();

    const[ commentInput, setCommentInput ]=useState( '' );

    const handleInput = ()=>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setCommentInput( event.target.value );
    }

    const handleCloseAgree = () => { //button click handler
        console.log('in handleCloseAgree' );
        //else { send data to the store and link to next page}
        dispatch( { type: 'ADD_FEEDBACK',  payload: { commentInput } } );
    }

    return(
        <Box sx={{boxShadow: 3}} m={2} pt={1} >
        <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10} >
            <Card sx={{ maxWidth: 400 }}>
                <Typography variant="h4" align="center" color="secondary">4 of 4 Pages</Typography>
                <br />
                <Typography align="center" variant="h5">Any comments you want to leave?</Typography>
                <br />
                <TextField type="text" onChange={(event ) =>handleInput ( event )}></TextField>
                <br />
                <br />
                <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} onClick={handleCloseAgree}>
                    NEXT</Button>
            </Card>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        </Grid>
    </Box>
    )
}

export default Comments;