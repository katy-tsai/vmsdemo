import React ,{useRef}from 'react';

const FileUpload = ({children,action}) => {
  const fileRef = useRef(null);
  const uploadHandler = async ()=>{
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    let base64img;
    reader.readAsDataURL(file);  
    reader.onloadend = function () {
      base64img = reader.result; 
      action(base64img);
    }; 
      
  }
  return (
    <div className="upload-div">
       <input id="file" name="file" type="file" ref={fileRef} onChange={uploadHandler}/>
        <label htmlFor="file" >
          {children}
        </label>
    </div>
  );
};

export default FileUpload;