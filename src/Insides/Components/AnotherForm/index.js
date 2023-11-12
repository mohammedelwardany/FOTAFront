import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
    if(e.event){
        // console.log('A7a:', e.file);
    const file = e.file;
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://127.0.0.1:5000/upload', formData)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
    
};
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const FormJoker = () => (
 
        <Upload.Dragger name="files" action="/upload.do" onChange={normFile}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      
);
export default FormJoker;
