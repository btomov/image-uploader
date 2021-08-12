import React, { useState } from "react";
import "./ImageUploader.css";
import axios from "axios";
import PlaceholderImg from "../../image.svg";

function ImageUploader (props) {
	const [ storedPicture, setStoredPicture ] = useState();
	const [ isLoading, setIsLoading ] = useState();
	const [ storedPicturePreview, setStoredPicturePreview ] = useState();

	const onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append("image", storedPicture, storedPicture.name);

		// Details of the uploaded file
		console.log(storedPicture);

		// Request made to the backend api
		// Send formData object
		setIsLoading(true);
		axios
			.post("http://localhost:2000/upload", formData)
			.then((response) => {
				console.log(response);
				setIsLoading(false);
			});
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
		setStoredPicture(files[0]);
		setStoredPicturePreview(URL.createObjectURL(files[0]));

		console.log(files);
	};

	return (
		<React.Fragment>
			{isLoading && <div>LOADING</div>}
      
			{!isLoading && <div className="container">
				<div
					className="drop-container"
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}
				>
					<img
						className="placeholder-image"
						src={PlaceholderImg}
						alt="Logo"
					/>
					<p>Drag & Drop your image here</p>
					{storedPicturePreview && (
						<img
							id="thumb"
							className="thumb"
							src={storedPicturePreview}
							alt="your preview"
						/>
					)}
				</div>
				<p>Or</p>
				<span className="submit-button" onClick={onFileUpload}>
					Choose a file
				</span>
			</div>}
		</React.Fragment>
	);
}

export default ImageUploader;
