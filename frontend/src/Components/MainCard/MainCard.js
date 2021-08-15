import React, { useState, useRef } from "react";
import "./MainCard.css";
import ImageUploader from "../ImageUploader/ImageUploader";
import ImagePreview from "../ImagePreview/ImagePreview";
import ReadyIcon from "../../check.svg";
import Loader from "react-loader-spinner";

function MainCard (props) {
	const [ storedPicturePreview, setStoredPicturePreview ] = useState("");
	const [ isLoading, setIsLoading ] = useState(false);
	const inputEl = useRef();

	const setLoading = (picIsLoading) => {
		console.log(picIsLoading);
		setIsLoading(picIsLoading);
	};

	const setPreview = (preview) => {
		console.log(preview, " preview");
		setStoredPicturePreview(URL.createObjectURL(preview));
		console.log(typeof URL.createObjectURL(preview), " url");
	};

	const copyToClipboard = () => {
		var copyText = inputEl.current;

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		document.execCommand("copy");
		console.log(inputEl.current.value, " current");
		/* Alert the copied text */
		//alert("Copied the text: " + copyText.value);
	};

	return (
		<div className={ isLoading ? "mainCard small" : "mainCard"}>
			{isLoading && (
				<Loader
					type="Puff"
					className="loader"
					color="#00BFFF"
					height={100}
					width={100}
				/>
			)}
			{!isLoading &&
			!storedPicturePreview && (
				<div>
					<div className="title">Upload your image</div>
					<p className="sub-title">File should be Jpeg, Png...</p>

					{/* Image uploader here */}
					<ImageUploader
						onSetLoading={setLoading}
						onSetPreview={setPreview}
						storedPicturePreview={storedPicturePreview}
					/>
				</div>
			)}
			{/* {!isLoading &&
			props.storedPicturePreview && (
				
			)} */}
			{!isLoading &&
			storedPicturePreview && (
				<div className="upload-completed-div">
					<div className="upload-completed-div">
						<img
							className="ready-icon"
							src={ReadyIcon}
							alt="Logo"
						/>

						<div className="title">Uploaded Successfully</div>
					</div>
					<ImagePreview storedPicturePreview={storedPicturePreview} />
					<div className="upload-completed-copy-div">
						<input
							ref={inputEl}
							id="copy-link"
							type="text"
							readOnly
							className="uploaded-link"
							value={storedPicturePreview}
						/>
						<span
							className="submit-button"
							onClick={copyToClipboard}
						>
							Copy Link
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default MainCard;
