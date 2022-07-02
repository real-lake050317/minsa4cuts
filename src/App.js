import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import TextField from "@mui/material/TextField";

import Images from "./components/Images";

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: "user",
};

const App = () => {
  let alphabet = ["a", "b", "c", "d"];
  //let [pictures, setPictures] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");

  const pictures = [];

  const downloadImage = (cnt) => {
    if (!img) return;
    var a = document.createElement("a");
    a.href = img;
    a.download = `${name}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    //console.log(name);
  }, [name]);

  useEffect(() => {
    if (cnt === 4) setCnt(0);
  }, [cnt])

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={onNameChange}
      />
      <Webcam
        audio={false}
        width={1080}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        mirrored={true}
      >
        {({ getScreenshot }) => (
          <button
            onClick={(cnt) => {
              setImg(getScreenshot());
              setCnt((cnt) => cnt + 1);
              pictures.push(img);
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      <h1>{cnt}</h1>
      <img src={img} />
      <Images images = {pictures} />
      <button onClick={() => downloadImage()}>download</button>
    </>
  );
};

export default App;
