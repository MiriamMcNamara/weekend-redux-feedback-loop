import { useState } from "react";
import { Grid, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function ThankYou( props ){
    // const[ name, setName ]=useState( null );

    return(
        <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                    <Typography variant="h3" align="center" color="secondary">Thank You!</Typography>
                    <br />
                    <br />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" size="large" color="secondary" style={{fontSize: 18}}>
                    <Link to="/">LEAVE NEW FEEDBACK</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
    )
}

export default ThankYou;