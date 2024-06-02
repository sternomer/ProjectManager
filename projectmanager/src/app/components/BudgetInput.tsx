import React from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';

const BudgetInput = ({ formData, handleChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="מחיר"
        variant="outlined"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">₪</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default BudgetInput;
