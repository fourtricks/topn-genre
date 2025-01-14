import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export const UploadButton = ({ onFileChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      // Create a synthetic event to pass the file up to the parent component
      onFileChange({ target: { files: acceptedFiles } });
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/mpeg': ['.mp3'],
      'audio/wav': ['.wav'],
    },
    maxFiles: 1, // Only allow one file
  });

  return (
    <div
      {...getRootProps()}
      className="w-full max-w-md mx-auto rounded-lg text-center cursor-pointer transition transform duration-200 ease-out active:scale-95"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 py-10 px-4 sm:px-6 rounded-lg">
        {isDragActive ? (
          <p className="text-white font-medium text-lg">Drop the audio file here...</p>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-white mb-4" /> {/* White upload icon */}
            <p className="text-xl font-semibold text-white text-center">
              Drag & drop your audio file here
            </p>
            <span className="text-sm text-white opacity-90 text-center">
              or click to select a file (MP3 or WAV only)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadButton;
