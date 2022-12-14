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
import { InventoryContext } from "./components/InventoryContext";
import { DarkThemeContext } from "./components/DarkThemeContext";

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [stateTracker, setStateTracker] = useState(false);
  const [darkMode, setDarkMode] = useState("#ffffff");
  const [icon, setIcon] = useState("./images/sun.png");
  const [tableColor, setTableColor] = useState("light");

     

   
  // #202d73
  useEffect(() => {
    fetch("http://localhost:8080/users", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setAllUsers(data);
        const cookie = document.cookie;
        const parseCookie = (str) =>
          str
            .split(";")
            .map((v) => v.split("="))
            .reduce((acc, v) => {
              acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
                v[1].trim()
              );
              return acc;
            }, {});
        var cookieDarkMode = parseCookie(cookie).darkMode;
        if (cookieDarkMode === "true"){
          setDarkMode("slategray");
          setTableColor("dark");
          setIcon("./images/moon.png")
        } else {
          setDarkMode("#ffffff");
          setTableColor("light");
          setIcon("./images/sun.png")
        }
      })
      .then(console.log("im fetching users"));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:8080/itemswithusers",{
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setToggle(true);
          return res.json();
        }
      })
      .then((data) => {
        setAllItems(data);
      })
      .then(console.log("im fetching items with users"));
  }, [stateTracker]);

  const obj = {
    toggle,
    setToggle,
    allItems,
    setAllItems,
    allUsers,
    setAllUsers,
    stateTracker,
    setStateTracker,
  };

  const themeObject = {
    darkMode,
    setDarkMode,
    icon,
    setIcon,
    tableColor,
    setTableColor
  };

  return (
    <DarkThemeContext.Provider value={themeObject}>
      <InventoryContext.Provider value={obj}>
        <Banner />
        <ColoredNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <StyledBox style={{ backgroundColor: `${darkMode}` }}>
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
    </DarkThemeContext.Provider>
  );
};

export default App;
