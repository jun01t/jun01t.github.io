import './App.css';
import './AppMobile.css'
import MediaQuery from 'react-responsive';
import React from 'react'
import {Header} from "./components/Header"
import {Skills} from "./components/Skills"
import {Contact} from "./components/Contact"

import {HeaderMobile} from "./components/HeaderMobile"
import {SkillsMobile} from "./components/SkillsMobile"
import {ContactMobile} from "./components/ContactMobile"

function App({Component,PageProps}) {
  return (
    <>
    <MediaQuery query="(max-width:767px)">
    <HeaderMobile/>
    <SkillsMobile/>
    <ContactMobile/>
    </MediaQuery>
    <MediaQuery query="(min-width:768px)">
    <Header/>
    <Skills/>
    <Contact/>
    </MediaQuery>
    </>  
  );
}

export default App;
