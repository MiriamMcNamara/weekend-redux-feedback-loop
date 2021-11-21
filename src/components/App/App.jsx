import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import { Box, Container, Typography, Grid, Paper } from '@material-ui/core';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <Container>
      <Grid container>
        <Grid item xs={2}>  
        <Box p={3}>            
        <img className="image" src="https://www.pngkey.com/png/detail/57-576538_pink-star-clip-art-at-clker-pink-star.png"/>
        </Box>
        </Grid>
        <Grid item xs={8}>
          <Box p={3}>
            <Paper variant="outlined">
              <Typography variant="h1" align="center" color="secondary">Feedback!</Typography>
            </Paper>
          </Box>
          </Grid>
          <Grid item xs={2}>   
          <Box p={3}>         
        <img className="image" src="https://www.pngkey.com/png/detail/57-576538_pink-star-clip-art-at-clker-pink-star.png"/>
        </Box>
        </Grid>
      </Grid>

      <BrowserRouter>
        <Routes>
             {/* reminder that the Admin page should not be linked, only reachable by visiting /Admin in URL  */}
            <Route path='/' element={<Feeling />}></Route>
            <Route path='/understanding' element={<Understanding />}></Route>
            <Route path='/support' element={<Support />}></Route>
            <Route path='/comments' element ={<Comments />}></Route>
            <Route path='/review' element ={<Review />}></Route>
            <Route path='/thankyou' element ={<ThankYou />}></Route>

        </Routes>
      </BrowserRouter>

      </Container>
  );
}

export default App;
