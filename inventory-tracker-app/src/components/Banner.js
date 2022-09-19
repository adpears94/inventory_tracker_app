import React, { useState, useContext } from "react";
import styled from "styled-components";
import { InventoryContext } from "./InventoryContext";
import { DarkThemeContext } from "./DarkThemeContext";

const StyledBanner = styled.div`
  background-color: #202d73;
  height: 100px;
  display: flex;
`;

const StyledHeading = styled.h1`
  margin: auto;
`;

const StyledOnline = styled.h4`
  position: absolute;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 17px;
`;

const StyledWelcome = styled.h3`
  position: relative;
  color: white;
  top: 70px;
  padding-right: 10px;
  font-size: 17px;
`;

const StyledImg = styled.img`
  height: 16px;
  width: 16px;
`;

const SunMoonImg = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  top: 70px;
  padding-right: 0px;
  font-size: 17px;
  margin-right: 4px;
`;

const Banner = () => {
  const { toggle } = useContext(InventoryContext);
  const { darkMode, setDarkMode, icon, setIcon } = useContext(DarkThemeContext);
  const [name, setName] = useState("Rick");

  return (
    <StyledBanner>
      <StyledHeading className="banner">UNIT INVENTORY TRACKER</StyledHeading>
      {toggle === false ? (
        <StyledOnline>
          Database: Offline <StyledImg src="/images/offline.ico" alt="text" />
        </StyledOnline>
      ) : (
        <StyledOnline>
          Database: Online <StyledImg src="/images/online.ico" alt="text" />
        </StyledOnline>
      )}
      <SunMoonImg
        src={`${icon}`}
        alt="sun"
        onClick={() => {
          if (darkMode === "#ffffff") {
            setDarkMode("slategray");
            setIcon("./images/moon.png");
          } else {
            setDarkMode("#ffffff");
            setIcon("./images/sun.png");
          }
        }}
      />
      <StyledWelcome>Welcome, {name}</StyledWelcome>
    </StyledBanner>
  );
};

export default Banner;
