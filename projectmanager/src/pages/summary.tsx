'use client';

import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid, Tabs, Tab } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from './layout'; 

const SummaryPage: React.FC = () => {
    const router = useRouter();
    const { query } = router;
    const [selectedTab, setSelectedTab] = useState(router.pathname === '/summary' ? 1 : 0);
  
    // Helper function to safely parse query parameters
    const parseQueryParam = (param: string | string[] | undefined): string => {
      if (Array.isArray(param)) {
        return param[0];
      }
      return param || '';
    };
  
    const parseQueryParamNumber = (param: string | string[] | undefined): number => {
      const value = parseQueryParam(param);
      return parseFloat(value) || 0;
    };
  
    const formData = {
      projectType: parseQueryParam(query.projectType),
      projectName: parseQueryParam(query.projectName),
      budget: parseQueryParam(query.budget),
      description: parseQueryParam(query.description),
      percentage: parseQueryParamNumber(query.percentage),
      dates: query.dates ? JSON.parse(parseQueryParam(query.dates)) : [],
      displayName: parseQueryParam(query.displayName),
      numberInput: parseQueryParam(query.numberInput),
      isToggleOn: parseQueryParam(query.isToggleOn) === 'true',
      checkboxes: query.checkboxes ? JSON.parse(parseQueryParam(query.checkboxes)) : { box1: false, box2: false },
      radioOption: parseQueryParam(query.radioOption),
      files: query.files ? JSON.parse(parseQueryParam(query.files)) : [],
      components: query.components ? JSON.parse(parseQueryParam(query.components)) : []
    };
  
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setSelectedTab(newValue);
      if (newValue === 0) {
        router.push('/');
      } else if (newValue === 1) {
        router.push('/summary');
      }
    };
  
    return (
      <Layout>
        <Container maxWidth={false} style={{ padding: 0, direction: 'rtl' }}>
          <Paper elevation={3} style={{ padding: '20px', margin: '20px', width: '100%' }}>
            <Box>
              <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                <Tab label="עמוד ראשי" />
                <Tab label="סיכום" />
              </Tabs>
              <Box marginTop={2}>
                <Typography variant="h4" gutterBottom>
                  סיכום הנתונים
                </Typography>
                {selectedTab === 1 && (
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="body1">סוג פרויקט: {formData.projectType}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">שם הפרויקט: {formData.projectName}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">מחיר: {formData.budget} ₪</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">תיאור: {formData.description}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">אחוז: {formData.percentage}%</Typography>
                      </Grid>
                      {formData.dates.map((date: { openDate: string, closeDate: string }, index: number) => (
                        <Grid container spacing={1} key={index}>
                          <Grid item xs={12}>
                            <Typography variant="body1">תאריך פתיחה: {date.openDate}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">תאריך סגירה: {date.closeDate}</Typography>
                          </Grid>
                        </Grid>
                      ))}
                      <Grid item xs={12}>
                        <Typography variant="body1">שם תצוגה: {formData.displayName}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">מספר קלט: {formData.numberInput}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">מצב טוגל: {formData.isToggleOn ? 'מופעל' : 'כבוי'}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">צ'קבוקס 1: {formData.checkboxes.box1 ? 'מסומן' : 'לא מסומן'}</Typography>
                        <Typography variant="body1">צ'קבוקס 2: {formData.checkboxes.box2 ? 'מסומן' : 'לא מסומן'}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">רדיו: {formData.radioOption}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">מסמכים:</Typography>
                        {formData.files.map((file, index) => (
                          <Box key={index} border={1} borderColor="grey.400" p={2} borderRadius={1} mb={2}>
                            <Typography variant="body1">שם הקובץ: {file.fileName}</Typography>
                            <Typography variant="body1">שם תצוגה: {file.displayName}</Typography>
                          </Box>
                        ))}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">רכיבי איכות: {100 - formData.percentage}%</Typography>
                        <Typography variant="body1">רכיבי מחיר: {formData.percentage}%</Typography>
                        {formData.components.map((component, index) => (
                          <Box key={index} border={1} borderColor="grey.400" p={2} borderRadius={1} mb={2}>
                            <Typography variant="body1">תיאור: {component.description}</Typography>
                            <Typography variant="body1">מחיר: {component.price}%</Typography>
                          </Box>
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Box>
            </Box>
          </Paper>
        </Container>
      </Layout>
    );
  };
  
  export default SummaryPage;