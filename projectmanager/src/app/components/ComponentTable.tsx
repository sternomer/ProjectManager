import React from 'react';
import { Grid, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, IconButton, Button, Paper, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ComponentTable = ({ formData, setFormData, handleComponentChange, addQualityComponent, addPriceComponent, deleteComponent }) => {
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
    const newComponents = [...formData.components, { description: '', price: '' }];
    setFormData((prevState) => ({
      ...prevState,
      components: newComponents,
    }));
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h6">טבלה מורכבת</Typography>
      <Box mb={2}>
        <Typography>
          רכיבי איכות: {100 - formData.percentage}% | רכיבי מחיר: {formData.percentage}%
        </Typography>
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
                      handleComponentChange(index, 'description', e.target.value)
                    }
                    placeholder="הכנס תיאור"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={component.price}
                    onChange={(e) => validateTotalPercentage(index, e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteComponent(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <Button variant="contained" onClick={handleAddQualityComponent}>
          הוסף רכיב איכות
        </Button>
      </Box>
    </Grid>
  );
};

export default ComponentTable;