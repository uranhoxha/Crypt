import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import { LuHexagon } from "react-icons/lu";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  border: 1px solid #efefef;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  color: #889095;

  .search-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    border: none;
    font-family: "Quicksand", sans-serif;
    outline: none;
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #889095;
  gap: 15px;
  flex-wrap:wrap;
`;

function Search() {
  return (
    <StyledSearchContainer>
      <StyledSearch>
        <div className="search-logo">
          <HiSearch />
          <input placeholder="Search blocks, transactions, hash..." />
        </div>
        <VscSettings />
      </StyledSearch>
      <LuHexagon />
    </StyledSearchContainer>
  );
}

export default Search;
