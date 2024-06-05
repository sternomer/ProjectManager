import React, { useRef } from 'react';
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DescriptionIcon from '@mui/icons-material/Description'; // Default icon
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

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
  moveFileUp: (index: number) => void; // Function to move file up
}

const getFileIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'pdf':
      return <PictureAsPdfIcon style={{ color: '#D32F2F' }} />;
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return <ImageIcon style={{ color: '#4CAF50' }} />;
    case 'doc':
    case 'docx':
    case 'txt':
      return <DescriptionIcon style={{ color: '#1976D2' }} />;
    case 'xls':
    case 'xlsx':
      return <InsertDriveFileIcon style={{ color: '#1E8449' }} />;
    default:
      return <InsertDriveFileIcon style={{ color: '#9E9E9E' }} />;
  }
};

const FileUpload: React.FC<FileUploadProps> = ({ formData, handleFileChange, handleFileNameChange, editFileName, deleteFile, addFile, moveFileUp }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h6">העלאת מסמכים</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={2} p={2} border="1px dashed #ccc" borderRadius="8px" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <CloudUploadIcon style={{ fontSize: '48px', color: '#ccc' }} />
        <Box mt={1}>
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
              <TableCell>סוג הקובץ</TableCell>
              <TableCell>שם הקובץ</TableCell>
              <TableCell>שם לתצוגה</TableCell>
              <TableCell>גודל הקובץ</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{getFileIcon(file.fileName)}</TableCell>
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
                  <IconButton onClick={() => moveFileUp(index)}>
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default FileUpload;
