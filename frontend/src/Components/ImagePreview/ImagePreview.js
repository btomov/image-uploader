import React from 'react'

function ImagePreview(props) {
    return (
        <div className="preview-div">
            {props.storedPicturePreview && (
                <img
                    id="thumb"
                    className="thumb"
                    src={props.storedPicturePreview}
                    alt="your preview"
                />
            )}

        </div>
    )
}

export default ImagePreview
