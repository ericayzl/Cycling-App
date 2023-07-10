/* File Name: Navigation.jsx
   File Description: Navigation component to my cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

import React from "react";
import { NavLink } from "react-router-dom";
import './stylesheet.css';
import {Cyclist} from '../Cyclist.js';
import {Log} from '../Log.js';

function Navigation() {
	global.mycyclist = new Cyclist ('', '', '', '', '')
	global.firstTime = true
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark" id="top-nav">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            MyCyclist Home
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  MyCyclist Information
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logs">
                  MyLogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;