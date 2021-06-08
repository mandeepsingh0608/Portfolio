import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';

import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import './Style.css'
import './ResponsiveCSS/Phone.css'    
import profileimg from './images/profileimg.jpg'




function ManuBar() {

const [open, setOpen] = useState(false);
  
const hideMenu = ()=>{
 setOpen(false);
   

 
}



    return (

        <Router>

 <div className="colorWhite">
    

   <div className="navContainer" id={open ? "hidden":""}>
      {/* image container  */}
            <div className="imgContainer">
                
                 <img className="profileImg" src={profileimg}/>
                
                <div className="profileName">
                    <h3>Mandeep Singh</h3>
                    <h4>Software Developer</h4>
                </div>
            </div>
            {/* end of img container */}
            <hr className="horizontalLine"></hr>
        {/* navbar div */}
  
        
        <i onClick={()=>setOpen(!open)} className="fas fa-bars Menubars"></i> 

  <div className="navItemContainer"  >
  
  <Navbar className="navbar"   >
 
<ul>
    
    <li>
      <NavLink onClick={hideMenu} className="no-deco hoverlink"  to="/" activeClassName="currentActive" exact> Home </NavLink>
  </li>
    <li>
      <NavLink onClick={hideMenu} className="no-deco hoverlink"  to="/resume" activeClassName="currentActive" exact>Resume </NavLink>
    </li>
    <li>
      <NavLink onClick={hideMenu} className="no-deco hoverlink "  to="/projects" activeClassName="currentActive" exact>Project</NavLink>
    </li>
    <li>
   <NavLink onClick={hideMenu}  className="no-deco hoverlink" to="/contact" activeClassName="currentActive"
   exact>Contact</NavLink>
    </li>
</ul>
</Navbar>  
    
</div>   
</div>


    
</div>




<Switch>
    <Route path="/" exact>
        <Home></Home>
    </Route>
</Switch>
<Switch>
    <Route path="/resume" exact>
        <Resume></Resume>
    </Route>
</Switch>

<Switch>
    <Route path="/projects" exact>
        <Projects></Projects>
    </Route>
</Switch>

<Switch>
    <Route path="/contact" exact>
        <Contact></Contact>
    </Route>
</Switch>
<Switch>
    <Redirect to="/"/>
</Switch>

</Router>
    )
}

export default ManuBar
