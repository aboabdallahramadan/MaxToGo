"use client";
import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const FileUpload = ({ onFileSelect, multiple = false, fileType = 'all', name }) => {
    const t = useTranslations('GuestTasks');
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files).filter(file => validateFileType(file));
      setSelectedFiles(files);
      const event = {
        target: {
          name: name,
          value: files
        }
      };
      onFileSelect(event);
    }
  };

  const handleChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(file => validateFileType(file));
      setSelectedFiles(files);
      const event = {
        target: {
          name: name,
          value: files
        }
      };
      onFileSelect(event);
    }
  };
  

  const validateFileType = (file) => {
    if (fileType === 'pdf') {
      return file.type === 'application/pdf';
    } else if (fileType === 'image') {
      return file.type.startsWith('image/');
    }
    return true;
  };

  return (
    <div
      className={`file-upload mt-6 ${dragActive ? 'active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="file-input"
        name={name}
        onChange={handleChange}
        style={{ display: 'none' }}
        id="file-upload"
        multiple={multiple}
        accept={fileType === 'pdf' ? 'application/pdf' : fileType === 'image' ? 'image/*' : '*'}
        required
      />
      <label htmlFor="file-upload" className="file-label relative flex flex-col items-center justify-center w-full">
        <FaCloudUploadAlt size={75} className={`z-[0] text-primary opacity-50  ${selectedFiles.length > 0 ? 'hidden' : ''}`} /> {/* Large upload icon */}
        <div className='text-foreground text-lg'>
          {selectedFiles.length > 0 ? (
            <p className='mb-4'>{selectedFiles.map(file => file.name).join(', ')}</p>
        ) : (
            <div className='flex flex-col items-center justify-center gap-2 text-lg mb-4'>
              <p >{t("DragDrop")}</p>
              <p >{t("Or")}</p>
            </div>
          )}
        </div>
      </label>
      <button className='text-primary border border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-secondary transition-all duration-300' type="button" onClick={() => document.getElementById('file-upload').click()}>
        {t("BrowseFiles")}
      </button>
    </div>
  );
};

export default FileUpload;