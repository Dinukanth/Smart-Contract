import React from 'react';

const FileUpload = ({ label, allowedTypes, maxSize }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSize = file.size / 1024 / 1024; // in MB
      const fileType = file.type;
      
      if (!allowedTypes.includes(fileType)) {
        console.log('File type not allowed');
      } else if (fileSize > maxSize) {
        console.log('File exceeds maximum size');
      } else {
        console.log('File uploaded successfully');
      }
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
