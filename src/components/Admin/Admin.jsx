import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Box, Card, Paper, CardContent, CardActions, Button } from "@material-ui/core";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';

function Admin( props ){

    const dispatch = useDispatch();
    const results = useSelector(store => store.results);
    // const[ name, setName ]=useState( null );

     const[ feedback, setFeedback ]=useState( [] );

    useEffect(()=>{ 
        getFeedback();
      }, []);

    const getFeedback = () => {
        axios.get('/feedback').then ( ( response )=>{
          console.log( 'getFeedback:', response.data );
          setFeedback(response.data);
        }).catch( ( err )=>{
          console.log( err );
          alert( 'problem!' );
        }) 
      } 

    return(
<Box sx={{boxShadow: 3}} m={2} pt={1} >
            <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10} >
                <Card >
                  <CardContent>
                    <Typography variant="h4" align="center" color="secondary">Feedback Results</Typography>
                    <br />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>

                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
             {/* Table TITLES */}
              <TableCell><h3>Feeling</h3></TableCell>
              <TableCell align="right"><h3>Understanding</h3></TableCell>
              <TableCell align="right"><h3>Support</h3></TableCell>
              <TableCell align="right"><h3>Comments</h3></TableCell>
              <TableCell align="right"><h3>Flag</h3></TableCell>
              <TableCell align="right"><h3>Delete</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedback.map((row) => (
            <TableRow
              key={feedback.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* Table CELLS that contain our data (passed from orders to rows) */}
              <TableCell component="th" scope="row">{row.feeling}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right"><Button>Flag</Button></TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>


                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={1}>
            </Grid>
            </Grid>
        </Box>
       
    )
}

export default Admin;