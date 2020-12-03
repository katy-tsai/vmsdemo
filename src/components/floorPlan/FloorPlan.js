import React,{useRef} from 'react';
import FileUpload from './FileUpload';
import {ImgUpload} from '../icons/Icons';
const FloorPlan = () => {
  const canvasRef = useRef(null);

  const uploadHandler = (base64url)=>{
    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.onload = function() {
      const canvas=canvasRef.current;
     
      canvas.width = image.width;
      canvas.height=image.height;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(image,0,0,canvas.width,canvas.height);
      canvas.style.width = '100%';
      
    };
    image.src =base64url;
  }

  const scaleToFill=(img,canvas)=>{
    // get the scale
    console.log(canvas);
    console.log(img);
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    console.log('scale',scale);
    
    // get the top left position of the image
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    return [x,y,scale];
    
}

  return (
    <div className="floor_plan_div"> 
       <div className="canvas-view">
         <canvas ref={canvasRef} ></canvas>
        </div> 
       <FileUpload action={uploadHandler}><ImgUpload/></FileUpload>
    </div>
  );
};

export default FloorPlan;