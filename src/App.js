import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import ProductView from './Components/ProductView';
import AboutUs from './Pages/AboutUs';
import TopBar from './Navigation/TopBar';
import './App.css';
import BackgroundImage from './Components/BackgroundImage/BackgroundImage.tsx';
import Footer from "./Components/Footer.js";


const App = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">

            </div>
           <Router>
               <div style={{backgroundImage: `url('.src/Components/background/pink-smoke-background_23-2149440129.jpg')`, backgroundSize: 'cover', minHeight: '100vh'}}>
                   <TopBar />
                   <BackgroundImage/>
                   <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/contact" element={<Contact />} />
                       <Route path="/products" element={<Products />} />
                       <Route path="/product-details/:id" element={<ProductView />} />
                       <Route path="/aboutus" element={<AboutUs />} />
                     </Routes>
                     <Footer/>
               </div>
           </Router>
        </div>
    );
};

export default App;