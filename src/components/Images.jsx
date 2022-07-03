import { useSlotProps } from "@mui/base";
import React from "react";

import "./Images.css";

const Images = (props) => {
  var data = props.images;

  return (
    <div className="images" >
      {data.map((image, { index }) => (
        <div className="image">
          <img src={image} className={index} />
        </div>
      ))}
    </div>
  );
};

export default Images;
