import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';






export default function Navbar1() {

 return (

    <Navbar expand="lg" className='bg-dark btn-light ' style={{padding:"30px"}}>
  
      <Container>
     
    <Navbar.Toggle aria-controls="" style={{backgroundColor:"lightblue",position:"absolute",right:"10px",top:"10px"}} />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-10" >
          <Link to="/" style={{textDecoration:"none"}}><p style={{color:"lightblue", marginLeft:"40px"}}>Calculatrice</p></Link> 
          <Link to="/slide" style={{textDecoration:"none"}}><p style={{color:"lightblue",marginLeft:"40px"}}>Slider</p></Link>
          <Link to="/todolist" style={{textDecoration:"none"}}><p style={{color:"lightblue",marginLeft:"40px"}}>Todolist</p></Link> 
          <Link to="/pagination" style={{textDecoration:"none"}}><p style={{color:"lightblue",marginLeft:"40px"}}>Pagination</p></Link>
          <Link to="/multilang" style={{textDecoration:"none"}}><p style={{color:"lightblue",marginLeft:"40px"}}>Multilanguage</p></Link> 

       </Nav>
     </Navbar.Collapse>
 

   </Container>
   

  </Navbar>
 )
}