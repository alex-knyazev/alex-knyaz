import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

export default () => {
  return (
    <div className="AppBar">
      <ul>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="AppBar-Mail">
          alexander.knyazev@progforce.com
        </li>
      </ul>
    </div>
  )
}
