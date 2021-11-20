import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Grid, Typography, Box, Card, Button } from "@material-ui/core";


function Review( props ){
    // const[ name, setName ]=useState( null );
    const feedback = useSelector(store => store.feedback);

    return(
            <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                    <Typography variant="h4" align="center" color="secondary">Review Your Feedback</Typography>
                    <br />
                    <Typography align="center" variant="h5">Feelings: {feedback.feelings} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Understanding: {feedback.understanding} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Support: {feedback.support} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Comments: {feedback.comments} </Typography>
                    <br />
                    <br />
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} >
                        SUBMIT</Button>
                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
    )
}

export default Review;