import React from "react";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Input,Button  } from 'antd';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DataHandel from "../Formaya";


const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false,
    action: 'http://127.0.0.1:5000/upload',
    method: "POST",
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } 
      else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


const FotaUploadForm_Component = () =>{

    return(
        
        <>
        <div className="UploadContainer">
        <h1 className="m-0 titleForm">Upload Form</h1>
        <br/>

        <DataHandel/>

        </div>
        </>
    )
}



// <div className="d-flex flex-row align-items-center justify-content-start">
// <p style={{marginInline:"1vh"}} className="text-bold">version:</p>
// <Input placeholder="version" />
// </div>
// <br/>
// <div className="text-white">
//     <Dragger {...props}  >
// <p className="ant-upload-drag-icon">
// <InboxOutlined />
// </p>
// <p className="ant-upload-text text-white">Click or drag .hex file to this area to upload</p>
// {/* <p className="ant-upload-hint text-white">
// Support for a single or bulk upload. Strictly prohibited from uploading company data or other
// banned files.
// </p> */}
// </Dragger> 
// </div>
//         <br/>
//         <div className="text-right">
//         <Button type="primary" className="bg-white text-black px-3 " >Upload Now</Button>
//         </div>



export {FotaUploadForm_Component};