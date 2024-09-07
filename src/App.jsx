import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider } from './context/ThemeContext';


import AllComponents from "./components/AllComponents";


function App() {

  return (

    <ThemeProvider>
      <BrowserRouter>
        <Routes>
        

          <Route path="/" element={<AllComponents />} />

        

        </Routes>
      </BrowserRouter>
      </ThemeProvider>  

  );
}

export default App;