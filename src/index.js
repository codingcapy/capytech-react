
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: index js for CapyTV
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from "./components/Auth/Auth"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth>
    <App />
  </Auth>
);
