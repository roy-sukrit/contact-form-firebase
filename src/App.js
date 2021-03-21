// import React,{useEffect,lazy,Suspense} from "react";
import React from 'react';
import { lazy,Suspense } from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import GlobalStyles from "./globalStyles";
import Header from "./components/Header";



import ContactContent from "../src/content/ContactContent.json";
const Container = lazy(() => import("../src/common/Container"));
const Contact = lazy(() => import("./components/ContactForm"));

const Footer = lazy(() => import("./components/Footer"));




const App = () => {
  
  return (
    <BrowserRouter>
    <Suspense fallback={null}>
    <GlobalStyles />
    <Header />
    <Container>    
    <Contact
    title={ContactContent.title}
    content={ContactContent.text}
    id="contact"
    icon="FAQ_outline I.svg"

  />     
    <Footer/>
    </Container>
    </Suspense>
    </BrowserRouter>
  

  );
};

export default App;
