import styled from "styled-components";
import DropDown from "./DropDown";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { IoFilter } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaList } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiLineVerticalLight } from "react-icons/pi";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "./Table";

const dropDown = [
  { value: "All Categories", label: "All Categories" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const StyledTabs = styled.div`
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  flex-wrap: wrap;
  color: #1a232c;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    border-radius: 50px;
  }

  select {
    padding: 5px;
    border-radius: 5px;
  }
`;

const CustomTabList = styled(TabList)`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  .react-tabs__tab {
    margin-right: 10px;
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
  }

  .react-tabs__tab--selected {
    color: #427cff !important;
    border: 1px solid #427cff !important;
    border-radius: 50px !important;
  }
`;

function TabsCategories() {
  return (
    <Tabs>
      <StyledTabs>
        <div style={{ border: "1px solid #EFEFEF" }}>
          <DropDown options={dropDown} defaultValue="All Categories" />
        </div>
        <PiLineVerticalLight style={{ fontSize: "24px", color: "#EFEFEF" }} />

        <CustomTabList>
          <Tab>Cryptocurrencies</Tab>
          <Tab>Categories</Tab>
          <Tab>DeFi</Tab>
          <Tab>NFT</Tab>
          <Tab>Metaverse</Tab>
          <Tab>Polkadot</Tab>
          <Tab>BNB Chain</Tab>
          <Tab>Polana</Tab>
          <Tab>Avalanche</Tab>
          <Tab>DAO</Tab>
        </CustomTabList>
        <TfiArrowCircleRight style={{ fontSize: "18px", color: "#56799C" }} />
        <div>
          <label htmlFor="cars">Show rows</label>
          <select name="cars" id="cars">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
          </select>
        </div>
        <div style={{ border: "1px solid #EFEFEF", borderRadius: "10px" }}>
          <IoFilter style={{ color: "#1A232C" }} />
          Filters
        </div>
        <div style={{ border: "1px solid #EFEFEF", borderRadius: "10px" }}>
          <CgMenuGridO style={{ color: "#CBCBCB" }} />
          Customize
        </div>
        <div style={{ border: "1px solid #EFEFEF", borderRadius: "10px" }}>
          <FaList
            style={{
              border: "1px solid #EFEFEF",
              padding: "3px",
              borderRadius: "5px",
              color: "#427CFF",
            }}
          />
          <CgMenuGridO style={{ color: "#CBCBCB" }} />
        </div>
        <div style={{ border: "1px solid #EFEFEF", borderRadius: "10px" }}>
          <HiOutlineDotsHorizontal style={{ color: "#CBCBCB" }} />
        </div>
      </StyledTabs>
      <TabPanel>
        <Table />
      </TabPanel>
      <TabPanel>
        <h2>Content for Categories</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for DeFi</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for NFT</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Metaverse</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Polkadot</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for BNB Chain</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Polana</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Avalanche</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for DAO</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabsCategories;
