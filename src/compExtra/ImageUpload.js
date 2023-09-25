import {React, useState} from 'react';
import "./ImageUpload.css";
import { Button } from './Button';
import { Stack } from '@mui/material';
function ImageUpload() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  }

  const picData = [
	  {
      id: 231, 
      name: "Image1", 
      image: "./image1.jpg",
      msg: "Im a penguin"
  	},
    {
      id: 232, 
      name: "Image2", 
      image: "./image2.jpg",
      msg: "Im another penguin"
  	},

  ];

  return (
		<div>
			{visible ? (
				<div className="parent">
					<Button onClick={handleVisible}> X </Button>
                    <Stack direction="column">
                        <img
                            src={require("./image1.jpg")}
                            alt="Image 1"
                            height="300"
                        />
                        <img
                            src={require("./image2.jpg")}
                            alt="Image 2"
                            height="300"
                        />
                    </Stack>
				</div>
			) : (
				<Button onClick={handleVisible} >Start Image Layering</Button>
			)}
		</div>
  );
}

export default ImageUpload;