'use client';

import React, { ReactNode, useState } from 'react';
import { Container, Paper, Box, Tabs, Tab } from '@mui/material';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(router.pathname === '/summary' ? 1 : 0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      router.push('/');
    } else if (newValue === 1) {
      router.push('/summary');
    }
  };

  return (
    <Container maxWidth={false} style={{ padding: 0, direction: 'rtl' }}>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', width: '100%' }}>
        <Box>
          <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
            <Tab label="עמוד ראשי" />
            <Tab label="סיכום" />
          </Tabs>
          <Box marginTop={2}>
            {children}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Layout;
