import React, { useState, useContext } from "react";
import styled from "styled-components";
import { InventoryContext } from "../App";

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

const Banner = () => {
  const { toggle } = useContext(InventoryContext);
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

      <StyledWelcome>Welcome, {name}</StyledWelcome>
    </StyledBanner>
  );
};

export default Banner;
