import "./App.css";
import ImageUploader from "./Components/ImageUploader/ImageUploader";
import MainCard from "./Components/MainCard/MainCard";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import ImagePreview from "./Components/ImagePreview/ImagePreview";

function App () {
	const [ storedPicturePreview, setStoredPicturePreview ] = useState();
	const [ isLoading, setIsLoading ] = useState();

	const setLoading = (picIsLoading) => {
		console.log(picIsLoading);
		setIsLoading(picIsLoading);
	};
	const setPreview = (preview) => {
		console.log(preview, " preview");
		setStoredPicturePreview(URL.createObjectURL(preview));
	};

	return (
		<div className="fragment">
			{!isLoading && (
				<MainCard onSetLoading={setLoading} onSetPreview={setPreview} storedPicturePreview={storedPicturePreview}/>
			)}
			{isLoading && (
				<Loader type="Puff" className="loader" color="#00BFFF" height={100} width={100} />
			)}
			
		</div>
	);
}

export default App;
