import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import styled from "styled-components";

const StyledCard = styled(SplideSlide)`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  padding: 20px;
  border: 1px solid #efefef;
  border-radius: 15px;
  gap: 30px;

  .first-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .second-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:6rem;
  }
`;

const cryptoData = [
  {
    logo: "/src/assets/bitcoinOrange.png",
    title: "Bitcoin",
    subtitle: "BTC",
    price: "$19,163.30",
    change: "+0.55%",
    volume: "$155.3M",
    graph: "/src/assets/cardgraph.png",
  },
  {
    logo: "/src/assets/ethereumPurple.png",
    title: "Ethereum",
    subtitle: "ETH",
    price: "$1,300.05",
    change: "+1.03%",
    volume: "$239.5M",
    graph: "/src/assets/cardgraph.png",
  },
  {
    logo: "/src/assets/CardanoBlue.png",
    title: "Cardano",
    subtitle: "ADA",
    price: "$0.35",
    change: "+2.15%",
    volume: "$3.4M",
    graph: "/src/assets/cardgraph.png",
  },
  {
    logo: "/src/assets/bitcoinGreen.png",
    title: "Bitcoin Cash",
    subtitle: "BCH",
    price: "$106.50",
    change: "+0.45%",
    volume: "$0.6M",
    graph: "/src/assets/cardgraph.png",
  },
  {
    logo: "/src/assets/dogecoinGold.png",
    title: "Dogecoin",
    subtitle: "DOGE",
    price: "$0.06",
    change: "+0.75%",
    volume: "$0.9M",
    graph: "/src/assets/cardgraph.png",
  },
];

function CardSection() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "40px",
        perPage: 6,
        breakpoints: {
          1795: {
            perPage: 4,
          },
          1327: {
            perPage: 3,
          },
          1010: {
            perPage: 2,
          },
          644: {
            perPage: 1,
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      {cryptoData.map((crypto, index) => (
        <StyledCard className="card" style={{width: "max-content"}}>
          <div className="first-section">
            <div className="header-content">
              <div>
                <img src={crypto.logo} alt="Bitcoin orange" />
              </div>
              <div>
                <h4>{crypto.title}</h4>
                <p>{crypto.subtitle}</p>
              </div>
            </div>
            <h3>{crypto.price}</h3>
          </div>
          <div className="second-section">
            <img src={crypto.graph} alt="Graph" />
            <div>
              <div>
                CHG <span style={{ color: "#17E6A1" }}>{crypto.change}</span>
              </div>
              <div>
                VOL{" "}
                <span style={{ color: "#111112", fontWeight: "900" }}>
                  {crypto.volume}
                </span>
              </div>
            </div>
          </div>
        </StyledCard>
      ))}
    </Splide>
  );
}

export default CardSection;
