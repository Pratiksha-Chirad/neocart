import React, { useState, useRef } from 'react';

const UploadSection = ({ onComplete }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setTimeout(() => {
          onComplete();
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSampleButtonClick = () => {
    setPreviewImage('https://readdy.ai/api/search-image?query=Modern%20living%20room%20interior%20with%20neutral%20colors%2C%20comfortable%20seating%20area%2C%20natural%20lighting%20from%20large%20windows%2C%20contemporary%20furniture%20arrangement%2C%20clean%20and%20spacious%20design%2C%20home%20decor%20inspiration&width=400&height=300&seq=sample1&orientation=landscape');
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImage(e.target.result);
          setTimeout(() => {
            onComplete();
          }, 1000);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="glass-card rounded-3xl p-8">
        <div className="w-8 h-8 flex items-center justify-center text-2xl text-primary mb-6 mx-auto">
          <i className="ri-camera-line"></i>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">Upload a photo of your room</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button 
            className="glass-card rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 whitespace-nowrap !rounded-button"
            onClick={handleUploadButtonClick}
          >
            <div className="w-12 h-12 flex items-center justify-center text-3xl text-primary mx-auto mb-4">
              <i className="ri-cloud-line"></i>
            </div>
            <span className="text-gray-700 font-medium">Upload from Device</span>
          </button>
          
          <button 
            className="glass-card rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 whitespace-nowrap !rounded-button"
            onClick={handleSampleButtonClick}
          >
            <div className="w-12 h-12 flex items-center justify-center text-3xl text-primary mx-auto mb-4">
              <i className="ri-gallery-line"></i>
            </div>
            <span className="text-gray-700 font-medium">Use Sample Room</span>
          </button>
        </div>
        
        <div 
          className={`drag-zone rounded-2xl p-12 text-center ${isDragOver ? 'drag-over' : ''}`}
          onClick={handleUploadButtonClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 flex items-center justify-center text-4xl text-gray-400 mx-auto mb-4">
            <i className="ri-folder-cloud-line"></i>
          </div>
          <p className="text-gray-600 text-lg">Drag and drop your image here</p>
          <p className="text-gray-500 text-sm mt-2">or click to browse files</p>
        </div>
        
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange}
        />
        
        {previewImage && (
          <div className="mt-8">
            <div className="relative inline-block">
              <img 
                src={previewImage} 
                className="rounded-2xl max-w-full h-64 object-cover object-top" 
                alt="Room preview"
              />
              <button 
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                onClick={handleRemoveImage}
              >
                <i className="ri-close-line text-sm"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;