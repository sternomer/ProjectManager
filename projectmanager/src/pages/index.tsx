import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, Button, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import Layout from './layout';
import ProjectDetails from '../app/components/ProjectDetails';
import BudgetInput from '../app/components/BudgetInput';
import ToggleSwitch from '../app/components/ToggleSwitch';
import Checkboxes from '../app/components/Checkboxes';
import RadioOptions from '../app/components/RadioOptions';
import DateInputs from '../app/components/DateInputs';
import FileUpload from '../app/components/FileUpload';
import ComponentTable from '../app/components/ComponentTable';
import SubmitButton from '../app/components/SubmitButton';

interface DateType {
  openDate: string;
  closeDate: string;
}

interface FileType {
  fileName: string;
  displayName: string;
  isEditing: boolean;
  fileSize: string;
}

interface ComponentType {
  price: string;
  description: string;
}

interface FormData {
  projectType: string;
  projectName: string;
  budget: string;
  description: string;
  percentage: number;
  dates: DateType[];
  displayName: string;
  numberInput: string;
  isToggleOn: boolean;
  checkboxes: { box1: boolean; box2: boolean };
  radioOption: string;
  files: FileType[];
  components: ComponentType[];
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    projectName: '',
    budget: '',
    description: '',
    percentage: 100,
    dates: [{ openDate: '', closeDate: '' }],
    displayName: '',
    numberInput: '',
    isToggleOn: false,
    checkboxes: { box1: false, box2: false },
    radioOption: '',
    files: [],
    components: [{ price: '', description: '' }]
  });

  const router = useRouter();

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newFiles = [...formData.files];
      newFiles[index] = {
        fileName: file.name,
        displayName: file.name.replace(/\.[^/.]+$/, ''),
        isEditing: false,
        fileSize: `${(file.size / 1024).toFixed(2)} KB` // Convert size to KB and format it
      };
      setFormData((prevState) => ({
        ...prevState,
        files: newFiles,
      }));
    }
  };

  const handleFileNameChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = [...formData.files];
    newFiles[index].displayName = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      files: newFiles,
    }));
  };

  const editFileName = (index: number) => {
    const newFiles = [...formData.files];
    newFiles[index].isEditing = !newFiles[index].isEditing;
    setFormData((prevState) => ({
      ...prevState,
      files: newFiles,
    }));
  };

  const deleteFile = (index: number) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData((prevState) => ({
      ...prevState,
      files: newFiles,
    }));
  };

  const addFile = () => {
    setFormData((prevState) => ({
      ...prevState,
      files: [
        ...prevState.files,
        { fileName: '', displayName: '', isEditing: false, fileSize: '' }, // Add the missing 'fileSize' property
      ],
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/router', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const query = queryString.stringify({
          projectType: formData.projectType,
          projectName: formData.projectName,
          budget: formData.budget,
          description: formData.description,
          percentage: formData.percentage.toString(),
          dates: JSON.stringify(formData.dates),
          displayName: formData.displayName,
          numberInput: formData.numberInput,
          isToggleOn: formData.isToggleOn.toString(),
          checkboxes: JSON.stringify(formData.checkboxes),
          radioOption: formData.radioOption,
          files: JSON.stringify(formData.files),
          components: JSON.stringify(formData.components),
        });

        router.push(`/summary?${query}`);
      } else {
        console.error('Failed to save form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <Container dir="rtl">
        <Typography variant="h4" gutterBottom>
          כותרת דף
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <ProjectDetails formData={formData} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))} handleSelectChange={(e: React.ChangeEvent<{ value: unknown }>) => setFormData((prevState) => ({ ...prevState, projectType: e.target.value as string }))} />
              <BudgetInput formData={formData} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevState) => ({ ...prevState, budget: e.target.value }))} />
              <ToggleSwitch formData={formData} handleToggleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevState) => ({ ...prevState, isToggleOn: e.target.checked }))} />
              <Checkboxes formData={formData} handleCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevState) => ({ ...prevState, checkboxes: { ...prevState.checkboxes, [e.target.name]: e.target.checked } }))} />
              <RadioOptions formData={formData} handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData((prevState) => ({ ...prevState, radioOption: e.target.value }))} />
              <DateInputs formData={formData} handleDateChange={(index: number, field: string, value: string) => {
                const newDates = [...formData.dates];
                newDates[index] = { ...newDates[index], [field]: value };
                setFormData((prevState) => ({
                  ...prevState,
                  dates: newDates,
                }));
              }} addDate={() => setFormData((prevState) => ({ ...prevState, dates: [...prevState.dates, { openDate: '', closeDate: '' }] }))} />
              <FileUpload
                formData={formData}
                handleFileChange={handleFileChange}
                handleFileNameChange={handleFileNameChange}
                editFileName={editFileName}
                deleteFile={deleteFile}
                addFile={addFile}
              />
              <ComponentTable
                formData={formData}
                setFormData={setFormData}
                handleComponentChange={(index: number, field: string, value: string) => {
                  const newComponents = [...formData.components];
                  newComponents[index] = { ...newComponents[index], [field]: value };
                  setFormData((prevState) => ({
                    ...prevState,
                    components: newComponents,
                  }));
                }}
                addQualityComponent={() => setFormData((prevState) => ({ ...prevState, components: [...prevState.components, { price: '', description: 'רכיב איכות' }] }))}
                addPriceComponent={() => setFormData((prevState) => ({ ...prevState, components: [...prevState.components, { price: '', description: 'רכיב מחיר' }] }))}
                deleteComponent={(index: number) => setFormData((prevState) => ({ ...prevState, components: prevState.components.filter((_, i) => i !== index) }))}
              />
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleSubmit}>
                  שלח
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Home;
