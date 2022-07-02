import React from "react";

const Images = ({ images }) => {
  return (
    <div className="images">
      {images.map((image, index) => (
        <img key={index} src={image} alt="image" />
      ))}
    </div>
  );
};

export default Images;