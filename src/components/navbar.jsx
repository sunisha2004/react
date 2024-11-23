import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export class navbar extends Component{
    render(){

        return(
            <>
             <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <span className="nav-link">View</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </nav>
            </>
        )
    }
}

export default navbar