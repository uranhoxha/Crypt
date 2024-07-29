import styled from "styled-components";
import { GoGraph } from "react-icons/go";
import { MdOutlineSort } from "react-icons/md";
import DropDown from "./DropDown";

const StyledTableTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
  color: #1a232c;
  font-weight: 500;
  p{
    font-size: 16px;
  }

  .first-content {
    display: flex;
    gap: 20px;
    h3{
        font-size: 24px;
    }
  }

  .first-content div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    color: #427cff;
    text-decoration: none;
  }

  span {
    color: #f6465d;
  }

  .second-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
  }

  .icon{
    color: #CBCBCB;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
    overflow: hidden;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efefef;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }
  
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const dropDown = [
  { value: "Show Market Features", label: "Show Market Features" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function TableTitle() {
  return (
    <StyledTableTitle>
      <div>
        <div className="first-content">
          <h3>Cryptocurrency Prices by Market Cap</h3>
          <div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p>Show Stats</p>
            <GoGraph className="icon"/>
          </div>
        </div>
        <p>
          The global cryptocurrency market cap today is $865 Billion, a{" "}
          <span>-0.2% </span>
          change in the last 24 hours. <a href="#as">Read More</a>
        </p>
      </div>
      <div className="second-content">
        <MdOutlineSort className="icon"/>
        <DropDown options={dropDown} defaultValue="Show Market Features" />
      </div>
    </StyledTableTitle>
  );
}

export default TableTitle;
