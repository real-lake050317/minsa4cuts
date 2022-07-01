import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import TextField from '@mui/material/TextField';


const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: "user",
};

const App = () => {
  const [img, setImg] = useState(null);
  const downloadImage = () => {
    if (!img) 
      return;
    var a = document.createElement("a");
    a.href = img;
    a.download = "image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Webcam
        audio={false}
        width={1920}
        height={1080}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        mirrored={true}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              setImg(getScreenshot());
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      <img src={img}></img>
      <button onClick={() => downloadImage()}>download</button>
    </>
  );
};

export default App;
