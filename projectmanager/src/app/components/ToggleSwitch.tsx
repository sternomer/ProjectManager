import React, { useState } from 'react';
import { Grid, FormControlLabel, Switch, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; 

const ToggleSwitch = ({ formData, handleToggleChange }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleToggleChange(event);
    if (event.target.checked) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleClose = () => {
    handleToggleChange({ target: { name: 'isToggleOn', checked: false } });
    setOpen(false);
  };

  return (
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Switch
            checked={formData.isToggleOn}
            onChange={handleChange}
            name="isToggleOn"
          />
        }
        label={
          <Box display="flex" alignItems="center">
            <span>כפתור מידע</span>
            <IconButton size="small" onClick={() => setOpen(true)}>
              <InfoIcon />
            </IconButton>
          </Box>
        }
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <p>This is the information about the website.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ToggleSwitch;
