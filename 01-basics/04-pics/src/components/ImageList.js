import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images)
    const images = props.images.map((image) => {
        const {id} = image;
        return <ImageCard key={id} image={image} />
    });
    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;