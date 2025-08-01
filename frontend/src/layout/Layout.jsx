import React from 'react'

import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Routers from "../Routes/Routers";

const layout = () => {
  return <>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </>
  
};

export default layout;