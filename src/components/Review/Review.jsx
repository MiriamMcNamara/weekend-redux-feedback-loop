import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Grid, Typography, Box, Card, CardContent, CardActions, Button } from "@material-ui/core";
import axios from "axios";
import { Link } from 'react-router-dom';


function Review( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

    const handlePost = () =>{ //post to the database when submit button clicked
        console.log( 'in handlePost' );
        axios.post( `/feedback`, feedback ).then( (response)=>{
            //send a dispatch to empty out the store
            dispatch({ type: 'EMPTY' });
          }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
          });
    }

    return(
            <Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                    <Typography variant="h4" align="center" color="secondary">Review Your Feedback</Typography>
                    <br />
                    <Typography align="center" variant="h5">Feelings: {feedback.feeling} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Understanding: {feedback.understanding} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Support: {feedback.support} </Typography>
                    <br />
                    <Typography align="center" variant="h5">Comments: {feedback.comments} </Typography>
                    <br />
                    <br />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}}>
                    <Link to="/comments">PREVIOUS</Link></Button>
                    <Button variant="outlined" size="large" color="secondary" style={{fontSize: 18}} onClick={handlePost}>
                    <Link to="/thankyou">SUBMIT</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
    )
}

export default Review;