import React from 'react';
import './index.css';
import {  Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Smartstudy from './pages/Smartstudy'



const App = () => (

    <div>
      <Navbar />
         <Routes>
         
         <Route path="/Smartstudy" element={<Smartstudy />} />
        

         </Routes>
      
      <Footer />
    </div>

);

export default App;
