import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  IconButton,
  Button,
  Paper,
  InputAdornment,
  Slider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ComponentTable = ({
  formData,
  setFormData,
  handleComponentChange,
  addQualityComponent,
  deleteComponent,
}) => {
  const [sliderValue, setSliderValue] = useState(100 - formData.percentage);

  useEffect(() => {
    const totalQualityPercentage = formData.components.reduce(
      (sum, component) => sum + parseFloat(component.price || '0'),
      0
    );
    setSliderValue(totalQualityPercentage);
    setFormData((prevState) => ({
      ...prevState,
      percentage: Math.max(0, 100 - totalQualityPercentage),
    }));
  }, [formData.components]);

  const validateTotalPercentage = (index, value) => {
    const newComponents = [...formData.components];
    newComponents[index] = { ...newComponents[index], price: value };

    const totalPercentage = newComponents.reduce(
      (sum, component) => sum + parseFloat(component.price || '0'),
      0
    );

    if (totalPercentage > 100) {
      alert('הערך הכולל של רכיבי האיכות לא יכול לעבור את ה-100%.');
      newComponents[index] = { ...newComponents[index], price: '' }; // Reset the value to empty
      setFormData((prevState) => ({
        ...prevState,
        components: newComponents,
        percentage: 100,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        components: newComponents,
        percentage: Math.max(0, 100 - totalPercentage),
      }));
    }
  };

  const handleAddQualityComponent = () => {
    const newComponents = [
      ...formData.components,
      { description: '', price: '' },
    ];
    setFormData((prevState) => ({
      ...prevState,
      components: newComponents,
    }));
  };

  const handleAddSubComponent = (index) => {
    const newComponents = [...formData.components];
    newComponents.splice(index + 1, 0, { description: '', price: '' });
    setFormData((prevState) => ({
      ...prevState,
      components: newComponents,
    }));
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setFormData((prevState) => ({
      ...prevState,
      percentage: 100 - newValue,
    }));
  };

  return (
    <Grid item xs={12}>
      <Typography variant='h6'>טבלה מורכבת</Typography>
      <Box mb={2}>
        <Typography>
          רכיבי איכות: {sliderValue}% | רכיבי מחיר: {formData.percentage}%
        </Typography>
        <Slider
        disabled
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby='continuous-slider'
          max={100}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        />
      </Box>
      <Box mt={2} display='flex' justifyContent='flex-start'>
        <Button
          color='primary'
          startIcon={<AddIcon />}
          onClick={handleAddQualityComponent}
          style={{ marginBottom: '10px', marginRight: 'auto' }}
        >
          הוספת רכיב איכות
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>תיאור סעיף</TableCell>
              <TableCell>משקל (%)</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.components.map((component, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={component.description}
                    onChange={(e) =>
                      handleComponentChange(
                        index,
                        'description',
                        e.target.value
                      )
                    }
                    placeholder='הכנס תיאור'
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={component.price}
                    onChange={(e) =>
                      validateTotalPercentage(index, e.target.value)
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>%</InputAdornment>
                      ),
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteComponent(index)}>
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => handleAddSubComponent(index)}
                  >
                    הוספת תת רכיב
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ComponentTable;
