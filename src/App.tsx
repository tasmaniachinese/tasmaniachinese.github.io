import * as React from 'react';
import './App.css';
import {Box, CssBaseline, Typography} from "@mui/material";

const App = ()=> {
  return (
      <>
        <CssBaseline /> {/* Normalize styles */}
          <Box textAlign="center" mt={10}>
            <Typography variant="h3" gutterBottom>
              Welcome to Tasmania Chinese Support Association
            </Typography>
          </Box>
      </>
  );
}

export default App;
