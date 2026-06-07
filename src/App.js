import React from 'react';
import Header from './home/Header';
import Card from './home/Card';
import Background from './home/Background';
import FormSection from './home/FormSection';
import Openion from './home/Openion';
import Footer from './home/Footer';
import AllProducts from './AllProducts/AllProducts';
function App() {
  return (
    <div>
     <Header/>
     {/* <Card/> */}
     <br/>
     <AllProducts/>
     <br/>
     <Background/>
     <FormSection/>
     <Openion/>
     <Footer/>
    </div>
  );
}

export default App;
