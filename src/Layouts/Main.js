import React from 'react';
import  { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import Navbar from '../Componens/Navbar/Navbar';
import Footer from '../Componens/Footer/Footer';



function Main() {
    return (
        <div>
           <Navbar />
            <div className="content">
                
            </div>
            <Footer />
        </div>
    )
}

export default Main;