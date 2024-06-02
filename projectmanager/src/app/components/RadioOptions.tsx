import React from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioOptions = ({ formData, handleRadioChange }) => {
  return (
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">רדיו</FormLabel>
        <RadioGroup
          name="radioOption"
          value={formData.radioOption}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="רדיו 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="רדיו 2"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default RadioOptions;
