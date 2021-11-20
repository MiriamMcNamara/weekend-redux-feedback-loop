import { useState } from "react";
import { Grid, Typography, Box, Card, TextField, Button } from "@material-ui/core";


function ThankYou( props ){
    // const[ name, setName ]=useState( null );

    return(
        <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                    <Typography variant="h3" align="center" color="secondary">Thank You!</Typography>
                    <br />
                    <br />
                    <Button variant="contained" size="large" color="secondary" style={{fontSize: 18}}>
                        LEAVE NEW FEEDBACK</Button>
                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
    )
}

export default ThankYou;