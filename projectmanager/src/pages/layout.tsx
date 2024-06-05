'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import { Container, Paper, Box, Tabs, Tab } from '@mui/material';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (router.pathname === '/summary') {
      setSelectedTab(1);
    } else {
      setSelectedTab(0);
    }
  }, [router.pathname]);

  const handleHomeClick = () => {
    setSelectedTab(0);
    router.push('/');
  };

  const handleSummaryClick = () => {
    setSelectedTab(1);
    router.push('/summary');
  };

  return (
    <Container
      maxWidth='lg'
      style={{
        padding: '0',
        direction: 'rtl',
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        style={{ overflow: 'hidden' }}
      >
        <Box display='flex' alignItems='center' style={{ flexShrink: 0 }}>
          <Tabs
            value={selectedTab}
            indicatorColor='primary'
            textColor='primary'
          >
            <Tab
              icon={
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: `2px solid ${selectedTab === 0 ? '#1976d2' : '#e0e0e0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedTab === 0 && (
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#1976d2',
                      }}
                    />
                  )}
                </div>
              }
              label="עמוד ראשי"
              onClick={handleHomeClick}
            />
          </Tabs>
        </Box>
        <Box flexGrow={1} borderBottom={1} borderColor='divider' />
        <Box display='flex' alignItems='center' style={{ flexShrink: 0 }}>
          <Tabs
            value={selectedTab}
            indicatorColor='primary'
            textColor='primary'
          >
            <Tab
              icon={
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: `2px solid ${selectedTab === 1 ? '#1976d2' : '#e0e0e0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedTab === 1 && (
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#1976d2',
                      }}
                    />
                  )}
                </div>
              }
              label="סיכום"
              onClick={handleSummaryClick}
            />
          </Tabs>
        </Box>
      </Box>
      <Box margin={2}>
        <Paper
          elevation={3}
          style={{ padding: '20px', margin: '20px 0', overflow: 'hidden' }}
        >
          {children}
        </Paper>
      </Box>
    </Container>
  );
};

export default Layout;
