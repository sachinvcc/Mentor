import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Vol from './Vol';
import Card from 'react-bootstrap/Card';
import Home from './Home';
import Num from './Num'
import Mentor from './Mentor';
import Cards from './Cards';
import Ww from './Ww';
import Footer from './Footer'; 
// import Part from './Part'; 
// import Part1 from './Part1'; 
// import Part3 from './Part3'; 
// import Part2 from './Part2'; 
// import Task from './Task'; 
// import Task1 from './Task1'; 
// import Rout from './Rout'; 
// import Reduxx from './Reduxx'; 
// import Context from './Context'; 
// import Propss from './Propss';  
// import Iceview from './Features/Ice/Iceview';
// import Chocoview from './Features/Choco/Chocoview'; 
// import Context from './Context';
// import Contextt from './Contextt';
// import Newredux from './Newredux';
// import Login from './Login';
// import Profile from './Profile';
// import Api from './Api/Api'; 
// import Apiget from './Api/Apiget';
// import Apipost from './Api/Apipost';
// import Apiaxiosget from './Api/Apiaxiosget';
// import Cakeview from './Features/Cake/Cakeview'; */
// import Apinew from './Api/Apinew';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Navbar />
      <NavDropdown />
      <Container />
      <Vol />
      <Num />
      <Mentor/>
      <Button />
      <Cards />
      <Ww />
      <Card />
      <Footer />
      {/* <Part /> 
      <Part1 /> 
      <Part3 /> 
      <Part2 /> 
      <Task /> 
      <Task1 /> 
      <Rout /> 
      <Reduxx /> 
      <Context/> 
      < Propss car='Honda'/>      
      <Iceview /> 
      <Cakeview/>
      <Context />
      <Contextt />
      <Newredux />
      <Login />
      <Cakeview /> 
      <Api /> 
      <Apiget /> 
      <Apipost />
      <Apiaxiosget />
    <Profile /> */} 
      {/* <Cards />
      <Apinew /> */}
    </div>
  );
}

export default App;
