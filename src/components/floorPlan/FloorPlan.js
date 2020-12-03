import React,{useRef,useEffect,useState,useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileUpload from './FileUpload';
import {ImgUpload} from '../icons/Icons';
import {getMapsList} from '../../store/action/maps.action';
const FloorPlan = () => {
  const canvasRef = useRef(null);
  const {floorPlanList} = useSelector(state => state.maps);
  const [currentIndex,setCurrentIndex]=useState(0);
  const dispatch = useDispatch();
  const drawImage =useCallback(()=>{
  
    if(floorPlanList.length>0){
      const ctx = canvasRef.current.getContext("2d");
      const image = new Image();
      image.onload = function() {
        const canvas=canvasRef.current;
        canvas.width = image.width;
        canvas.height=image.height;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
        canvas.style.width = '100%';
        
      }
      image.src =floorPlanList[currentIndex].img;
    }
    
  },[currentIndex,floorPlanList]);
  useEffect(()=>{
     function fetchData() {
      dispatch(getMapsList());   
    }
   fetchData();
  },[]);
  useEffect(()=>{
    drawImage();
 },[floorPlanList]);

  const uploadHandler = (base64url)=>{
    console.log(base64url);
    
    // const ctx = canvasRef.current.getContext("2d");
    // const image = new Image();
    // image.onload = function() {
    //   const canvas=canvasRef.current;
     
    //   canvas.width = image.width;
    //   canvas.height=image.height;
    //   ctx.clearRect(0,0,canvas.width,canvas.height);
    //   ctx.drawImage(image,0,0,canvas.width,canvas.height);
    //   canvas.style.width = '100%';
      
    // };
    // image.src =base64url;
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