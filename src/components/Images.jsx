import { useSlotProps } from "@mui/base";
import React from "react";

const Images = (props) => {
  var data = props.images;
  return (
    data.map((image, index) => (
      <img src = {image} class = {index}/>
    ))
  )
};

export default Images;