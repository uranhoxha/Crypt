import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";

const slides = [
  {
    img: image1,
    alt: "FTX building",
    title:
      "New FTX CEO says 'complete failure of corporate control' at crypto...",
    time: "27m ago",
    source: "Reuters",
  },
  {
    img: image2,
    alt: "Coin Graph",
    title: "3 Things you Must Know About Crypto",
    time: "30m ago",
    source: "Coin Rivet",
  },
  {
    img: image3,
    alt: "Bitcoin Stack",
    title: "What the Genesis Loan Suspension Teaches Us About Crypto Lending",
    time: "30m ago",
    source: "Decrypt Media",
  },
  {
    img: image4,
    alt: "FTX Boss",
    title: "New FTX Boss Condemns Management of the Crypto...",
    time: "30m ago",
    source: "CoinDesk",
  },
  {
    img: image5,
    alt: "Cracked Bitcoin",
    title: "Smartest Guys In The Room? Big Wall Street Firms Hold Bitcoin Bag",
    time: "30m ago",
    source: "Investor's Business Daily",
  },
  {
    img: image6,
    alt: "Doge dog",
    title:
      "Big Eyes Hits Time Square, is this the Key Steppingstone to Take it...",
    time: "30m ago",
    source: "Coin Rivet",
  },
];

function ImageSlider() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "40px",
        perPage: 6,
        width: '99%',
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
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <img src={slide.img} alt={slide.alt} />
          <h3 style={{fontFamily: "Quicksand",color: "#1A232C", }}>{slide.title}</h3>
          <p style={{fontFamily: "Quicksand",color: "#697075", }}>
            {slide.time} · {slide.source}
          </p>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default ImageSlider;
