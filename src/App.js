import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlagComponent from './components/Topbar/FlagComponent';
import NavBarComponents from './components/Navbar/NavBarComponent';
import ContentComponent from './components/ContentSection/ContentComponent';
import NewsComponent from './components/NewsSection/NewsComponent';
import AdComponent from './components/AdSection/AdComponent';
import AboutComponent from './components/AboutSection/AboutComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ContentTest from './components/ContentTest/ContentTest';
import NavBarTest from './components/NavBarTest/NavBarTest';

class App extends Component {
  render() {
    return (
      <div className="App">

        <FlagComponent />
        <NavBarTest />
        {/* <NavBarComponents /> */}
        {/* <ContentComponent /> */}
        <ContentTest />
        <NewsComponent />
        
        {/* <AdComponent /> */}
        <AboutComponent />
        <FooterComponent />


        
      </div>
    );
  }
}

export default App;
