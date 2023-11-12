import React, { useState } from 'react';
import axios from 'axios';
import { InboxOutlined } from '@ant-design/icons';

import { Button, ConfigProvider, message, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';






function DataHandler() {
  const [modalOpen, setModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();





  function extractProperties(file) {
    const {
      lastModified,
      lastModifiedDate,
      name,
      size,
      type,
      webkitRelativePath,
    } = file.originFileObj;
  
    return {
      lastModified,
      lastModifiedDate,
      name,
      size,
      type,
      webkitRelativePath,
    };
  }
  const uploadToServer = (fileData) => {
  
    const formData = new FormData();
    formData.append('file', fileData);
  
    axios.post('https://flaskproject-404121.wl.r.appspot.com/upload', formData)
  
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }



  const props = {
    name: 'file',
    multiple: false,
    action: 'https://flaskproject-404121.wl.r.appspot.com/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {

      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files[0]);
    },
  };




//   const extractedProperties = extractProperties(originalFile);
// console.log(extractedProperties);


  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://flaskproject-404121.wl.r.appspot.com/upload', formData)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // https://flaskproject-404121.wl.r.appspot.com/
  const handleSubmitting = (event) => {
    event.preventDefault();
    setModalOpen(true)
    axios.get('https://flaskproject-404121.wl.r.appspot.com/GetFileData')
    .then(response => {
        setModalOpen(false)
        messageApi.open({
          type: 'success',
          content: response.data,
        });
        console.log(response.data);
      })
      .catch(error => {
        messageApi.open({
          type: 'error',
          content: error.message,
        });
        setModalOpen(false)
        console.error(error);
      });
  }

//pip3 freeze > requirements.txt

  return (
    <div>
      {contextHolder}
      <h1></h1>
      <form>
        {/* <input type="file" onChange={handleChange} className='uploadDoc'  draggable/> */}
        <Dragger {...props} >
    <p className="ant-upload-drag-icon">
      
      <InboxOutlined className='orange-text'/>
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
  <h1></h1>
        <button className='UploadPtn' onClick={handleSubmitting}>Upload</button>
      </form>

      <ConfigProvider
  theme={{
    components: {
      Modal: {
        contentBg:"#101010"
      },
    },
  }}
>
  <Modal
        
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ style:{display:"none"}}}
        cancelButtonProps={{ style:{display:"none"} }}
        maskClosable={false}
    

      >
        <img src={require("../../../assets/fota.gif")} className='w-100'/>
      </Modal>
   
</ConfigProvider>
    </div>
  );
}

export default DataHandler;
