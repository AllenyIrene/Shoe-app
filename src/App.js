import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import Context from "./Context/Context";
import Baby from "./Pages/Baby";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Men from "./Pages/Men";
import Women from "./Pages/Women";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Shoe-app">
      <Context>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index exact element={<Landing/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="men" element={<Men/>}/>
        <Route path="women" element={<Women/>}/>
        <Route path="baby" element={<Baby/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
      </Context>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
