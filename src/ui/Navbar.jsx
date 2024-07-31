import React, { useState } from "react";
import styled from "styled-components";
import logo from "/assets/logo.svg";
import DropDown from "./DropDown";
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "./Search";
import Button from "./Button";

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
  .logo-navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const StyledNavbar = styled.ul`
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1132px) {
    display: none;
  }
`;

const StyledList = styled.li`
  list-style-type: none;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 24px;
  @media (max-width: 1132px) {
    display: flex;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #fff;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  font-size: 24px;
  z-index: 1000;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (min-width: 1132px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
  color: black;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const optionsCryptos = [
    { value: "Cryptocurrencies", label: "Cryptocurrencies" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsExchanges = [
    { value: "Exhanges", label: "Exhanges" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsNFT = [
    { value: "NFT", label: "NFT" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsProducts = [
    { value: "Products", label: "Products" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsCommunity = [
    { value: "Community", label: "Community" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsAffiliate = [
    { value: "Affiliate", label: "Affiliate" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsLearn = [
    { value: "Learn", label: "Learn" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <StyledNavbarContainer>
      <div className="logo-navbar">
        <a href="home"><img src={logo} alt="logo_crypt" /></a>
        <StyledNavbar>
          <StyledList>
            <DropDown
              options={optionsCryptos}
              defaultValue="Cryptocurrencies"
            />
          </StyledList>
          <StyledList>
            <DropDown options={optionsExchanges} defaultValue="Exhanges" />
          </StyledList>
          <StyledList>
            <DropDown options={optionsNFT} defaultValue="NFT" />
          </StyledList>
          <StyledList>
            <DropDown options={optionsProducts} defaultValue="Products" />
          </StyledList>
          <StyledList>
            <DropDown options={optionsCommunity} defaultValue="Community" />
          </StyledList>
          <StyledList>
            <DropDown options={optionsAffiliate} defaultValue="Affiliate" />
          </StyledList>
          <StyledList>
            <DropDown options={optionsLearn} defaultValue="Learn" />
          </StyledList>
        </StyledNavbar>
        <Hamburger onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu />
        </Hamburger>
      </div>

      <StyledButtonContainer>
        <Search />
        <Button variation="secondary" size="small">
          Log In
        </Button>
        <Button size="small">Sign Up</Button>
      </StyledButtonContainer>

      {isOpen && (
        <Overlay>
          <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
          <DropDown options={optionsCryptos} defaultValue="Cryptocurrencies" />
          <DropDown options={optionsExchanges} defaultValue="Exhanges" />
          <DropDown options={optionsNFT} defaultValue="NFT" />
          <DropDown options={optionsProducts} defaultValue="Products" />
          <DropDown options={optionsCommunity} defaultValue="Community" />
          <DropDown options={optionsAffiliate} defaultValue="Affiliate" />
          <DropDown options={optionsLearn} defaultValue="Learn" />
        </Overlay>
      )}
    </StyledNavbarContainer>
  );
}

export default Navbar;
