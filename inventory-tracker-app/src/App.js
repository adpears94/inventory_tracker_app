import React, {useState, useEffect, useContext} from "react";
import {Routes, Route } from "react-router-dom";
import ColoredNavbar from "./components/ColoredNavbar";
import Banner from "./components/Banner";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import SmallExample from "./components/ItemTable";
import "bootstrap/dist/css/bootstrap.min.css";
import {ItemTable} from "./components/ItemTable";
import "./App.css";

export const InventoryContext = React.createContext();

const App = () => {
  const [allItems, SetAllItems] = useState([]);
  const [toggle, setToggle] = useState(false);  

  useEffect(() => {
    fetch("http://localhost:8080/items")
    .then((res) => {
      if (res.ok) {
        setToggle(true)
        return res.json() 
        
      }      
    })
    .then((data) => {SetAllItems(data)})
  }, []); 

  const obj = { toggle, setToggle, allItems, SetAllItems };

  return (
    <InventoryContext.Provider value={obj}>
      <Banner />
      <ColoredNavbar />
      <Routes>
        <Route path="/" element={<h1>Hello :)</h1>} />
        <Route path="/items" element = {<ItemTable items={allItems} /> } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </InventoryContext.Provider>
  );
}

export default App;