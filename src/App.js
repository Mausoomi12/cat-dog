import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Lorem from './components/Lorem'
import ImageSlider from './components/ImageSlider';


function App() {
  return (
    <div className="homepage">
    <div className="left-half">
      <Lorem/>
    </div>
      <div className="right-half">
      
   <Navbar/>
   <ImageSlider/>
      </div>
    </div>
  );
}

export default App;
