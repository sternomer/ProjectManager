import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const DateInputs = ({ formData, handleDateChange, addDate }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">תאריך מתרחב</Typography>
      {formData.dates.map((date, index) => (
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="תאריך פתיחה"
              variant="outlined"
              name={`openDate-${index}`}
              type="date"
              value={date.openDate}
              onChange={(e) =>
                handleDateChange(index, 'openDate', e.target.value)
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="תאריך סגירה"
              variant="outlined"
              name={`closeDate-${index}`}
              type="date"
              value={date.closeDate}
              onChange={(e) =>
                handleDateChange(index, 'closeDate', e.target.value)
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" onClick={addDate}>
        הוסף תאריך
      </Button>
    </Grid>
  );
};

export default DateInputs;
