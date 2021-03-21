import { lazy } from "react";
import { Row, Col,notification } from "antd";
import Zoom from "react-reveal/Zoom";
import firebase from "firebase/app";
import database from 'firebase/database'


import SvgIcon from '../../common/SvgIcon'
import * as S from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";
const Block = lazy(() => import("../Block"));
const Button = lazy(() => import("../../common/Button"));


const validationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .max(20, "*Name can't be longer than 20 characters")
    .required("*Name is required"),

  Project: Yup.string()
  .min(2, "*Names must have at least 2 characters")

   
    .required("* Project Title required"),

  Email: Yup.string().email('Invalid email').required('Required'),

});


const Contact = ({ title, content, id, icon }) => {
  const contactInfo = firebase.database().ref("infos") 
 
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent, Our experts will contact you within 24hrs",
    });
  }

  

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="80%"
              height="80%"
            />
          </Col>
          <Col lg={12} md={12} sm={24}>
           
            <Formik
             initialValues={{ Name: "", Project: "", Email: "" }}
              validationSchema={validationSchema}
              onSubmit={ (values,{ resetForm }) =>{     
                console.log("Submitted",values);
                openNotificationWithIcon("success");

                 resetForm()
                 //save to database
                 let newContactInfo = contactInfo.push()
                 newContactInfo.set({Data:values})

               

              }
              }
              >
               {/* Callback function containing Formik state and helpers that handle common form actions */}
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            
            
          }) => (  
            
 
            <S.FormGroup  method="post" onSubmit={handleSubmit}>
            <br/>
            <br/>
                     
              <Col span={24} >
              <S.Container>
              <label htmlFor="Name">Name</label>
                <S.Input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Name}
                  className={touched.Name && errors.Name ? "error" : null}

                />
                </S.Container>
                {touched.Name && errors.Name ? (
                  <div className="error-message text-danger">{errors.Name}</div>
                ) : null}
              </Col>
              <Col span={24}>
              <S.Container>
              <label htmlFor="Email">Email</label>

                <S.Input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Your Email"
                  value={values.Email}
                  onChange={handleChange}
                />
                {touched.Email && errors.Email ? (
                  <div className="error-message text-danger">{errors.Email}</div>
                ) : null}  
                
                </S.Container>
                       </Col>              
              
              
              <Col span={24}>
              <S.Container>
                <S.TextArea
                  placeholder="Project Title & Details"
                  value={values.Project}
                  name="Project"
                  id="Project"
                  onChange={handleChange}
                />
                {touched.Project && errors.Project ? (
                  <div className="error-message text-danger">{errors.Project}</div>
                ) : null}
                </S.Container>
              </Col>
              <S.ButtonContainer >
                <Button type="submit" >
                {`Submit`}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          
            )}
            </Formik>
            
          </Col>
           
         
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default Contact;
