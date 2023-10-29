import React from "react";
import { motion } from "framer-motion"
import { Layout, Space ,Col, Divider, Row } from 'antd';
import { FotaUploadForm_Component } from "../../Components";


const { Header, Footer, Sider, Content } = Layout;

const FotaUpload_Screen = () =>{

    return(
        <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg"
  >

        <Row>
    <Col xs={2} sm={4} md={12} lg={12} xl={12} className="p-10" >
    <motion.div
    initial={{ x: -50 }}
    animate={{ x: 0 }}
    transition={{ duration: 1.5 }}
  > 
    <div className="mx-5 mb-5">
                <p className="title m-0">FOTA</p>

                <p className="subtitle m-0">CAR CLASS VERSION 2023</p>
            </div>
            <div className="mb-5">
                <FotaUploadForm_Component/>
            </div>
            <div className="console-font mx-5 mb-5">
                {">>"} CODE <br/>
                {">>"} CODE <br/>
                {">>"} CODE <br/>
                {">>"} CODE <br/>
            </div>
            </motion.div>
    </Col>
    <Col xs={20} sm={16} md={12} lg={12} xl={12} className="App-header p-10">
    <motion.div
    initial={{ x: 50 }}
    animate={{ x: 0 }}
    transition={{ duration: 1.5 }}
  > 
    <img className="w-100" src={require("../../../assets/CarImg.png")}/>
    </motion.div>
    </Col>

  </Row>





  </motion.div>

        </>
    )
}


export {FotaUpload_Screen};