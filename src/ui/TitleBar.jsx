import styled from "styled-components";
import DropDown from "./DropDown";
import { HiFire } from "react-icons/hi";
import { FaFlagUsa } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";

function TitleBar() {
  const StyledTitleBar = styled.div`
    padding: 0px 30px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #1a232c;
    border-bottom: 1px solid #efefef;
  `;

  const StyledOptions = styled.div`
    display: flex;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const StyledNationality = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  `;

  const optionsCryptos = [
    { value: "Cryptos: 21,200", label: "Cryptos: 21,200" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsExchanges = [
    { value: "Exchanges", label: "Exchanges: 525" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsMarketplaces = [
    { value: "Marketplaces", label: "Marketplaces: 3" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const optionsGas = [
    { value: "Gas", label: "Gas: 30 Gwei" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const countryLaguage = [
    { value: "English", label: "English" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const countryCurrency = [
    { value: "USD", label: "USD" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <StyledTitleBar>
      <StyledOptions>
        <DropDown
          options={optionsCryptos}
          defaultValue={optionsCryptos.label}
        />
        <DropDown
          options={optionsExchanges}
          defaultValue={optionsExchanges.label}
        />

        <DropDown
          options={optionsMarketplaces}
          defaultValue={optionsMarketplaces.label}
        />

        <p>Market Cap: $1,108,910,944,084,088</p>
        <p>24h Vol: $102,188,690,183.10</p>

        <div>
          <HiFire />
          <DropDown options={optionsGas} defaultValue={optionsGas.label} />
        </div>
      </StyledOptions>

      <StyledNationality>
        <div>
          <FaFlagUsa />

          <DropDown
            options={countryLaguage}
            defaultValue={countryLaguage.label}
          />
        </div>

        <div>
          <IoLogoUsd />
          <DropDown
            options={countryCurrency}
            defaultValue={countryCurrency.label}
          />
        </div>
      </StyledNationality>
    </StyledTitleBar>
  );
}

export default TitleBar;
