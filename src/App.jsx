import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import AllComponents from "./components/AllComponents";


function App() {

  return (

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AllComponents />} />

        </Routes>
      </BrowserRouter>

  );
}

export default App;