import React from 'react';
import { Grid, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const Checkboxes = ({ formData, handleCheckboxChange }) => {
  return (
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">צ'קבוקסים</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.checkboxes.box1}
                onChange={handleCheckboxChange}
                name="box1"
              />
            }
            label="צ'קבוקס 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.checkboxes.box2}
                onChange={handleCheckboxChange}
                name="box2"
              />
            }
            label="צ'קבוקס 2"
          />
           <FormControlLabel
            control={
              <Checkbox
                disabled
                checked={true}
              />
            }
            label="צ'קבוקס דיסבלד"
          />
        </FormGroup>
      </FormControl>
    </Grid>
  );
};

export default Checkboxes;