import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ColoredNavbar from "./components/ColoredNavbar";
import Banner from "./components/Banner";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemTable } from "./components/ItemTable";
import SplashPage from "./components/SplashPage";
import "./App.css";
import { CheckedOut } from "./components/CheckedOut";
import { Resources } from "./components/Resources";
import { StyledBox } from "./components/Styles";

export const InventoryContext = React.createContext();

const App = () => {
  const [allItems, SetAllItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setAllUsers(data);
      })
      .then(console.log("im fetching users"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/itemswithusers")
      .then((res) => {
        if (res.ok) {
          setToggle(true);
          return res.json();
        }
      })
      .then((data) => {
        SetAllItems(data);
      })
      .then(console.log("im fetching items with users"));
  }, []);

  const obj = {
    toggle,
    setToggle,
    allItems,
    SetAllItems,
    allUsers,
    setAllUsers,
  };

  return (
    <InventoryContext.Provider value={obj}>
      <Banner />
      <ColoredNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <StyledBox>
              <SplashPage />
            </StyledBox>
          }
        />
        <Route path="/items" element={<ItemTable items={allItems} />} />
        <Route path="/checkedout" element={<CheckedOut items={allItems} />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </InventoryContext.Provider>
  );
};

export default App;
