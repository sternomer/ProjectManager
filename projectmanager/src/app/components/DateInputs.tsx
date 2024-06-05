import React from 'react';
import { Grid, TextField, IconButton, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const DateInputs = ({ formData, handleDateChange, addDate }) => {
  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <IconButton onClick={addDate} color="primary" aria-label="add date">
          <AddIcon />
        </IconButton>
        <Typography variant="body1">הוסף תאריך</Typography>
      </Box>
      {formData.dates.map((date, index) => (
        <Grid container spacing={3} key={index} style={{ marginBottom: '16px' }}>
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
    </Grid>
  );
};

export default DateInputs;
