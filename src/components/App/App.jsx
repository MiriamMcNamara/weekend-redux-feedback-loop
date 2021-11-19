import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import { Box, Container, Typography, Grid, Paper } from '@material-ui/core';

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

      <Feeling />
      </Container>
  );
}

export default App;
