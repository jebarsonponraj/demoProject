import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import { Generate, About} from "./components";
import Output from "./components/pages/Output";



const App = () => {


  return (
    <Routes>
      <Route index element={<Generate/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/output" element={<Output/>} />
    </Routes>
  )
}

export default App