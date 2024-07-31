import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch("/data/database.json")
      .then((response) => response.json())
      .then((data) => setCryptoData(data));
  }, []);

  const TableContainer = styled.div`
    overflow-x: auto;
    margin: 20px 0;
  `;

  const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 18px;
    text-align: left;
  `;

  const StyledTableHeader = styled.thead`
    color: #333;
    font-weight: bold;
  `;

  const StyledTableRow = styled.tr`
    border-bottom: 1px solid #efefef;
    text-align: right;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    flex: 0.7;

    span {
      color: #838e98;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <>
      <TableContainer>
        <StyledTable>
          <StyledTableHeader>
            <StyledTableRow style={{ color: "#697075", fontWeight: "300" }}>
              <StyledTableCell style={{ flex: "0.4" }}></StyledTableCell>
              <StyledTableCell>
                <RiSearchLine />
              </StyledTableCell>
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
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </StyledTableHeader>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell style={{ flex: "0.123", color: "#CBCBCB" }}>
                  <FaRegHeart />
                </StyledTableCell>
                <StyledTableCell>{index}</StyledTableCell>
                <StyledTableCell className="cyptocurrency">
                  <div>
                    <img
                      src={crypto.icon}
                      alt="icon"
                      style={{
                        border: "1px solid #EFEFEF",
                        padding: "7px 10px",
                        borderRadius: "15px",
                      }}
                    />
                    {crypto.name}
                    <span>{crypto.symbol}</span>
                  </div>
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
                <StyledTableCell style={{ flex: "0.2", textAlign: "center" }}>
                  <div
                    style={{
                      border: "1px solid #EFEFEF",
                      borderRadius: "10px",
                      padding: "5px",
                    }}
                  >
                    <HiOutlineDotsHorizontal style={{ color: "#CBCBCB" }} />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      <Pagination />
    </>
  );
};

export default CryptoTable;
