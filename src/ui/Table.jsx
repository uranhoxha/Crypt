import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch("/data/database.json")
      .then((response) => response.json())
      .then((data) => setCryptoData(data));
  }, []);

  const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
  `;

  const StyledTableHeader = styled.thead`
    color: #333;
    font-weight: bold;
  `;

  const StyledTableRow = styled.tr`
    border-bottom: 1px solid #efefef;
    text-align: left;
    &:hover {
      background-color: #f1f1f1;
    }

    .cyptocurrency {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  `;

  const StyledTableCell = styled.td`
    padding: 12px 15px;
    text-align: center;

    span {
      color: #838e98;
    }
  `;

  return (
    <>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow>
            <StyledTableCell>Cyptocurrency</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>1h %</StyledTableCell>
            <StyledTableCell>24h %</StyledTableCell>
            <StyledTableCell>7d%</StyledTableCell>
            <StyledTableCell>All-time High</StyledTableCell>
            <StyledTableCell>Market Cap</StyledTableCell>
            <StyledTableCell>24h Volume</StyledTableCell>
            <StyledTableCell>Circulating Supply</StyledTableCell>
            <StyledTableCell>Last 7 Days</StyledTableCell>
          </StyledTableRow>
        </StyledTableHeader>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell className="cyptocurrency">
                <img src={crypto.icon} alt="icon" />
                {crypto.name}
                <span>{crypto.symbol}</span>
              </StyledTableCell>
              <StyledTableCell>{crypto.price}</StyledTableCell>
              <StyledTableCell>{crypto["1h"]}</StyledTableCell>
              <StyledTableCell>{crypto["24h"]}</StyledTableCell>
              <StyledTableCell>{crypto["7d"]}</StyledTableCell>
              <StyledTableCell>{crypto["allTimeHigh"]}</StyledTableCell>
              <StyledTableCell>{crypto.marketCap}</StyledTableCell>
              <StyledTableCell>{crypto["24hVolume"]}</StyledTableCell>
              <StyledTableCell>{crypto.circulatingSupply}</StyledTableCell>
              <StyledTableCell>
                <img src={crypto.image} alt="graph" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
      <Pagination />
    </>
  );
};

export default CryptoTable;
