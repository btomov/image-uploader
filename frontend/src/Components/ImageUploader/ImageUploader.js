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
			.post("https://api.imgur.com/3/image/", formData, {
				headers: { Authorization: "Client-ID 7e5c728ed16ed17" }
			})
			.then((response) => {
				console.log(response);
				props.onSetLoading(false);
				props.onSetPreview(response.data.data.link);
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

		console.log(files[0], " files 0");
	};

	
	const fileChange = (e) => {
		console.log(e.target.files[0], ' filechange')
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
				<input type="file" onChange={ (e) => fileChange(e)} id="file"/>
				{/* <span className="submit-button" onClick={onFileUpload}>
					Choose a file
				</span> */}
			</div>
		</React.Fragment>
	);
}

export default ImageUploader;
