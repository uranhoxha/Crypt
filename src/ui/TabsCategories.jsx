import styled from "styled-components";
import DropDown from "./DropDown";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { IoFilter } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaList } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiLineVerticalLight } from "react-icons/pi";


const dropDown = [
  { value: "All Categories", label: "All Categories" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const StyledTabs = styled.div`
  padding: 0px 30px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  gap:5px;
  font-size: 14px;
  font-weight: 500;
  flex-wrap:wrap;
  color: #1A232C;

  div{
    display:flex;
    align-items:center;
    gap:5px;
    padding:10px 15px;
    border-radius:50px;
  }

  select{
    padding: 5px;
    border-radius:5px;
  }

  
`;

function TabsCategories() {
  return (
    <StyledTabs>
      <div style={{border: "1px solid #EFEFEF"}}>
        <DropDown options={dropDown} defaultValue="All Categories" />
      </div>
      <PiLineVerticalLight style={{fontSize: "24px", color: "#EFEFEF"}}/>
      <div style={{color: "#427CFF", border: "1px solid #427CFF"}}>Cryptocurrencies</div>
      <div>Categories</div>
      <div>DeFi</div>
      <div>NFT</div>
      <div>Metaverse</div>
      <div>Polkadot</div>
      <div>BNB Chain</div>
      <div>Polana</div>
      <div>Avalanche</div>
      <div>DAO</div>
      <TfiArrowCircleRight style={{fontSize: "18px", color: "#56799C"}}/>
      <div>
        <label for="cars">Show rows</label>
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
      <div style={{border: "1px solid #EFEFEF", borderRadius: "10px"}}>
        <IoFilter style={{color: "#1A232C"}}/>
        Filters
      </div>
      <div style={{border: "1px solid #EFEFEF", borderRadius: "10px"}}>
        <CgMenuGridO style={{color: "#CBCBCB"}}/>
        Costumize
      </div>
      <div style={{border: "1px solid #EFEFEF", borderRadius: "10px"}}>
        <FaList style={{border: "1px solid #EFEFEF", padding: "3px", borderRadius: "5px",color: "#427CFF"}}/>
        <CgMenuGridO style={{color: "#CBCBCB"}}/>
      </div>
      <div style={{border: "1px solid #EFEFEF", borderRadius: "10px"}}>
        <HiOutlineDotsHorizontal style={{color: "#CBCBCB"}}/>
      </div>
    </StyledTabs>
  );
}

export default TabsCategories;
