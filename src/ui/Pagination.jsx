import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  color: #1A232C;
  font-size: 14px;
  font-weight: 500;
  flex-wrap:wrap;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  select{
    padding: 5px;
    border-radius:5px;
    border: 1px solid #efefef;
  }
`;

const StyledNumbers = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    flex-wrap: wrap;
    div{
        padding:5px 12px;
        border-radius: 10px;
    }

    .selected{
        background-color: #427CFF;
        color: #fff;
    }
   
`

function Pagination() {
  return (
    <StyledPagination>
      <p>Showing 1 - 20 out of 9431</p>
      <StyledNumbers>
        <IoIosArrowBack />
        <div className="selected">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>
          <BsThreeDots />
        </div>
        <div>492</div>
        <IoIosArrowForward />
      </StyledNumbers>
      <div>
        <label for="cars">Show rows</label>
        <select name="rows" id="rows">
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
    </StyledPagination>
  );
}

export default Pagination;
