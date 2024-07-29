import styled from "styled-components";

const StyledDropDown = styled.select`
    border: none;
    font-size: 14px;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    outline: none;
    color: #1A232C;
`



function DropDown({ options, defaultValue }) {

  return (
    <StyledDropDown
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropDown>
  );
}

export default DropDown;
