import React from 'react'
import './MainCard.css'
import ImageUploader from '../ImageUploader/ImageUploader'

function MainCard() {
    return (
        <div className="mainCard">
            <h2>Upload your image</h2>
            <p>File should be Jpeg, Png...</p>

            {/* Image uploader here */}
            <ImageUploader />
            <p>Or</p>
            {/* Choose a file button */}
            <button>Upload image</button>
        </div>
    )
}

export default MainCard
