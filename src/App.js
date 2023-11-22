
/*
author: Paul Kim
date: November 22, 2023
version: 1.0
description: app js for CapyTV
 */

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router';

function App() {

  const router = Router()

  return (
    <div id='wrapper'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
