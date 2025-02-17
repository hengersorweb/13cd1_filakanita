import React from "react"
import Home from "./oldalak/Home"
import Ermesek from "./oldalak/Ermesek"
import Mermesk from "./oldalak/Mermesek"
import Navbar from "./Navbar"
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tachyons'
import Mermesek from "./oldalak/Mermesek"



function App() {

  return (
    <>
      <div>
       <h1>Covid</h1>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ermesek" element={<Ermesek/>} />
        <Route path="/mermesk" element={<Mermesek/>} />

       </Routes>
      </div>
    </>
  )
}

export default App
