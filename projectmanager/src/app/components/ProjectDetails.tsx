import React from 'react';
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const ProjectDetails = ({ formData, handleChange, handleSelectChange }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          style={{ width: '33%', direction: 'ltr', borderRadius: '12px' }}
          variant='outlined'
        >
          <InputLabel id='projectType-label'>אינפוט סלקט</InputLabel>
          <Select
            labelId='projectType-label'
            id='projectType'
            value={formData.projectType}
            onChange={handleSelectChange}
            label='אינפוט סלקט'
          >
            <MenuItem value=''>
              <em>בחר</em>
            </MenuItem>
            <MenuItem value='type1'>אפשרות א</MenuItem>
            <MenuItem value='type2'>אפשרות ב</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          style={{ width: '33%', borderRadius: '15px' }}
          label='שם הפרויקט'
          variant='outlined'
          name='projectName'
          value={formData.projectName}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default ProjectDetails;
