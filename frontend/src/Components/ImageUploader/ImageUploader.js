import React from "react";
import "./ImageUploader.css";
import axios from "axios";
import PlaceholderImg from "../../image.svg";

function ImageUploader (props) {

	const onFileUpload = (image) => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append("image", image, image.name);

		props.onSetLoading(true);
		// Request made to the backend api
		// Send formData object
		axios
			.post("https://image-uploader-backend1.herokuapp.com//upload", formData)
			.then((response) => {
				console.log(response);
				setTimeout(function(){
					props.onSetLoading(false);

				}, 1000)
			});
	};

	const dragOver = (e) => e.preventDefault();
	const dragEnter = (e) => e.preventDefault();
	const dragLeave = (e) => e.preventDefault();

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
		onFileUpload(files[0]);
		props.onSetPreview(files[0]);

		console.log(files[0], ' files 0');
	};

	return (
		<React.Fragment>
      
			<div className="container">
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
				</div>
				<p>Or</p>
				<span className="submit-button" onClick={onFileUpload}>
					Choose a file
				</span>
			</div>
		</React.Fragment>
	);
}

export default ImageUploader;
