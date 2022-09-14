import React, {useState, useEffect} from "react";
// import { Route, Routes, Link} from "react-router-dom";
// import ColoredNavbar from "./components/ColoredNavbar";
// import {Footer} from "./components/Footer";



const App = () => {
  const [allItems, SetAllItems] = useState([{}]);

  // const GetAllItems = async () => {
  //   const response = await fetch("http://localhost:8080/items");
  //   const data = await response.json();
  //   SetAllItems(data);
  // }
  // GetAllItems();

  useEffect(() => {
    fetch("http://localhost:8080/items")
    .then((res) => res.json())
    .then((data) => SetAllItems(data))
  }, []); 






  return (
    <>
      
      <div>
        {allItems.map((item) => {
          return (
            <div key={item.item_id}>
              <h1>{item.item_name}</h1>
              <p>{item.item_description}</p>
            </div>
          );
        })}
        
      </div>
      
    </>
  );
}

export default App;