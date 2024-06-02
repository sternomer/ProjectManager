import React, { useRef } from 'react';
import { Grid, Box, Typography, IconButton, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface FileType {
  fileName: string;
  displayName: string;
  isEditing: boolean;
  fileSize: string;
}

interface FileUploadProps {
  formData: {
    files: FileType[];
  };
  handleFileChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileNameChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  editFileName: (index: number) => void;
  deleteFile: (index: number) => void;
  addFile: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ formData, handleFileChange, handleFileNameChange, editFileName, deleteFile, addFile }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h6">העלאת מסמכים</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2} p={2} border="1px dashed #ccc" borderRadius="8px" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <CloudUploadIcon style={{ fontSize: '48px', color: '#ccc' }} />
        <Box ml={2}>
          <Typography variant="body1" color="primary">
            לחץ כאן או גרור קובץ להעלאה
          </Typography>
        </Box>
      </Box>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => handleFileChange(formData.files.length, e)}
        multiple
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>שם הקובץ</TableCell>
              <TableCell>שם לתצוגה</TableCell>
              <TableCell>גודל הקובץ</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.fileName}</TableCell>
                <TableCell>
                  {file.isEditing ? (
                    <input
                      type="text"
                      value={file.displayName}
                      onChange={(e) => handleFileNameChange(index, e)}
                    />
                  ) : (
                    file.displayName
                  )}
                </TableCell>
                <TableCell>{file.fileSize}</TableCell>
                <TableCell>
                  <IconButton onClick={() => editFileName(index)}>
                    {file.isEditing ? <SaveIcon /> : <EditIcon />}
                  </IconButton>
                  <IconButton onClick={() => deleteFile(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <Button variant="contained" onClick={addFile}>
          הוסף קובץ
        </Button>
      </Box>
    </Grid>
  );
};

export default FileUpload;
