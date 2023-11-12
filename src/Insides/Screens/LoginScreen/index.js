import React from "react";
import { motion } from "framer-motion"
import { Layout, Space ,Col, Divider, Row } from 'antd';
import { FotaUploadForm_Component } from "../../Components";
import LoginForm from "../../Components/LoginForm";


const { Header, Footer, Sider, Content } = Layout;

const LoginScreen = () =>{

    return(
        <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-login"
  >

        <Row>
    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="h-100 App-header p-10" >
    <div className="cont-banner">
    <p className="banner-txt">update your customers firmware now with ...</p>
    <img src={require("../../../assets/FOTALOGO.png")} className="w-100"/>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="App-header h-100">
    <motion.div
    initial={{ x: 50 }}
    animate={{ x: 0 }}
    transition={{ duration: 1.5 }}
  > 
<LoginForm/>
    </motion.div>
    </Col>

  </Row>





  </motion.div>

        </>
    )
}


export {LoginScreen};