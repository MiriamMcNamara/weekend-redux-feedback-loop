import { Grid, Typography, Box, Card, TextField, Button } from "@material-ui/core";
import { useState } from "react";

function Feeling( props ){
    // const[ name, setName ]=useState( null );

    const handleCloseAgree = () => {
        console.log('in handleCloseAgree' );
        //capture the input for the textfield and store in variable
        //if (textfield = 1-5) { link to next page}
        //if (textfield = empty ) { pop up dialogue}
        
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
                    <TextField type="number" inputProps={{ min: "1", max: "5" }}></TextField>
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