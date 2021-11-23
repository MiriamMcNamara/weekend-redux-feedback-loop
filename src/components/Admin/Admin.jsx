import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Box, Card, Paper, CardContent, CardActions, Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';

function Admin( props ){

    const dispatch = useDispatch();
    const results = useSelector(store => store.results);
    // const[ name, setName ]=useState( null );

     const[ feedback, setFeedback ]=useState( [] ); //needed a hook
     //to capture the response.data from the GET

     const [open, setOpen] = useState(false); //dialog window for delete

     const [ rowId, setRowId] = useState( null ); //needed a hook
     //to capture the ID of the row for DELETE since the dialog window
     //added a layer of removal from the table, if that makes sense?
 
     const handleClickOpen = (id) => { //needed to pass in ID of row to set the variable
        setRowId(id);
       setOpen(true);
       //this is the function that opens the confirmation dialogue on button click
     };
   
     const handleCloseDisagree = () => {
       setOpen(false);
       //this closes it again if the user clicks "disagree"
     };

    useEffect(()=>{ //axios GET when the page loads
        getFeedback();
      }, []);

    const getFeedback = () => { //gets the data from the database
        axios.get('/feedback').then ( ( response )=>{
          console.log( 'getFeedback:', response.data );
          setFeedback(response.data);
        }).catch( ( err )=>{
          console.log( err );
          alert( 'problem!' );
        }) 
      } 

      const deleteFeedback = () => { //deletes the row once confirmed by user
          console.log( 'in deleteFeedback', rowId ); //use the row ID
          axios.delete(`/feedback/${rowId}`).then ( ( response )=>{
            getFeedback(); //run the get call
            setOpen(false); //close the dialog window
          }).catch( ( err )=>{
            console.log( err );
          alert( 'problem!' );
          })
      }

      const flagFeedback = (id) => { //pass ID of row into function
          console.log( 'in flagFeedback', id ); //and use it to make PUT call
          axios.put(`/feedback/${id}`).then ( ( response )=>{
            getFeedback();
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
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* Table CELLS that contain our data (passed from orders to rows) */}
              <TableCell component="th" scope="row">{row.feeling}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right"><Button variant="outlined" onClick={ () => flagFeedback(row.id)}>Flag</Button></TableCell>
              <TableCell align="right"><Button variant="outlined" onClick={ () => handleClickOpen(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>

    <Dialog
        open={open}
        onClose={deleteFeedback, handleCloseDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this feedback?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Don't Delete</Button>
          <Button onClick={deleteFeedback} autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>

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