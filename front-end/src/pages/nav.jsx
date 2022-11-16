import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Nav = ({
      outerContainerId,
      pageWrapId,
    }) => {
      return (
        <>
       <nav>
          <ul>
              <li>
              <Link id="homeID" className="menu-item" to="/"> Home </Link>
              </li>
              <li>
              <Link id="generatorID" className="menu-item" to="/Generator"> Generator </Link>
              </li>
              <li>
              <Link id="loginID" className="menu-item" to="/Login"> Login </Link>
              </li>
              <li>
              <Link id="signUpID" className="menu-item" to="/SignUp"> Sign Up </Link>
              </li>
          </ul>
      </nav> 
      <Outlet />
      </>
      );
    };
    
    export default Nav;