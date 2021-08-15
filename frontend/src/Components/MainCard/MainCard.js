import React, { useState, useRef, useEffect } from "react";
import "./MainCard.css";
import ImageUploader from "../ImageUploader/ImageUploader";
import ImagePreview from "../ImagePreview/ImagePreview";
import ReadyIcon from "../../check.svg";

function MainCard (props) {
	const [ storedPicturePreview, setStoredPicturePreview ] = useState('');
	const [ storedPicturePreview1, setStoredPicturePreview1 ] = useState('asd');
	const [ isLoading, setIsLoading ] = useState(false);
	const inputEl = useRef();
	useEffect(
		() => {
		  const subscription = props.source.subscribe();
		  return () => {
			subscription.unsubscribe();
		  };
		},
		[props.source],
	  );
	  
	  
	// useEffect(() => {
	// 	inputEl.current.value = storedPicturePreview;
	// }, [inputEl, storedPicturePreview]);

	const setLoading = (picIsLoading) => {
		console.log(picIsLoading);
		setIsLoading(picIsLoading);
		props.onSetLoading(picIsLoading);
	};

	const setPreview = (preview) => {
		console.log(preview, " preview");
		props.onSetPreview(preview);
		setStoredPicturePreview(URL.createObjectURL(preview));
		setStoredPicturePreview1('njwner')
		console.log(typeof URL.createObjectURL(preview), ' url')
	};

	const copyToClipboard = () => {
		var copyText = inputEl.current;

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */
	  
		/* Copy the text inside the text field */
		document.execCommand("copy");
		console.log(inputEl.current.value, ' current')
		/* Alert the copied text */
		//alert("Copied the text: " + copyText.value);	  
	};


	
	return (
		<div className="mainCard">
			{!isLoading &&
			!props.storedPicturePreview && (
				<div>
					<div className="title">Upload your image</div>
					<p className="sub-title">File should be Jpeg, Png...</p>

					{/* Image uploader here */}
					<ImageUploader
						onSetLoading={setLoading}
						onSetPreview={setPreview}
						storedPicturePreview={props.storedPicturePreview}
					/>
				</div>
			)}
			{/* {!isLoading &&
			props.storedPicturePreview && (
				
			)} */}
			{!isLoading &&
			props.storedPicturePreview && (
				<div className="upload-completed-div">
					<div className="upload-completed-div">
						<img
							className="ready-icon"
							src={ReadyIcon}
							alt="Logo"
						/>

						<div className="title">Uploaded Successfully</div>
					</div>
					<ImagePreview
						storedPicturePreview={props.storedPicturePreview}
					/>
					<div className="upload-completed-copy-div">
						<input ref={inputEl} id="copy-link" type="text" readOnly className="uploaded-link" value={storedPicturePreview1}/>
						<span className="submit-button" onClick={copyToClipboard}>
							Copy Link
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default MainCard;
