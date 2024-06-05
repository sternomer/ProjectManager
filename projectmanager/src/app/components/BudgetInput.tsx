import React from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';

const BudgetInput = ({ formData, handleChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        sx={{ width: '33%', '& .MuiOutlinedInput-root': { borderRadius: '10px' } }} 
        label='מחיר' 
        variant='outlined'
        name='budget'
        value={formData.budget}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment>₪</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default BudgetInput;
