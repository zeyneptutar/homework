import React from 'react';
import { Link } from "react-router";

const SideBar = () =>{
  return (
    <div>
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li><Link to="/mainpage">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </div>
    </div>
    )
}

export default SideBar;