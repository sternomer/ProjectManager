import React from 'react';
import { Grid, Button } from '@mui/material';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <Grid item xs={12}>
      <Button variant="contained" onClick={handleSubmit}>
        שלח
      </Button>
    </Grid>
  );
};

export default SubmitButton;
