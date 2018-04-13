import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

import Logo from '../Logo';
import AppBar from '../AppBar';

export default () => {
  return (
    <div className="Header">
      <Link to="/"><Logo /></Link>
      <AppBar />
    </div>
  )
}
