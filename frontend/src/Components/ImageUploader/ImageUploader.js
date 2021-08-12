import React, {useState} from 'react';
import "./ImageUploader.css"
import axios from 'axios';


function ImageUploader(props) {
  const [storedPicture, setStoredPicture] = useState();
  const [storedPicturePreview, setStoredPicturePreview] = useState();

  const handleChange = (e) =>{
    console.log(e.target.files);
    if(e.target.files[0]){
      setStoredPicture(e.target.files[0]);
      setStoredPicturePreview(URL.createObjectURL(e.target.files[0]))
      
    }

  }
  
  const onFileUpload = () =>{
        // Create an object of formData
        const formData = new FormData();
  
        // Update the formData object
        formData.append(
          "myFile",
          storedPicture,
          storedPicture.name
        );
      
        // Details of the uploaded file
        console.log(storedPicture);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    
  }

  const dragOver = (e) => {
    e.preventDefault();
}

  const dragEnter = (e) => {
      e.preventDefault();
  }

  const dragLeave = (e) => {
      e.preventDefault();
  }

  const fileDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      console.log(files);
  }

  return (
    <div className="container">
      {storedPicturePreview && <img id="thumb" className="thumb"src={storedPicturePreview} alt="your preview" /> }
      <input type='file' onChange={handleChange} />
      <button onClick={onFileUpload}>Upload</button>
      <div className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
      >
      </div>
    </div>
  );
}

export default ImageUploader;