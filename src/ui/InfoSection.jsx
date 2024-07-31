import { CgLoadbarSound } from "react-icons/cg";
import styled from "styled-components";
import phoneImg from "/assets/coins-phones.png";
import googlePlay from "/assets/googlePlay.png";
import appStore from "/assets/appStore.png";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

const StyledInfoSec = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1365px) {
    flex-wrap: wrap;
  }

  .first-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    h2 {
      color: #1a232c;
      font-size: 42.5px;
    }

    p {
      color: #1a232c;
      font-size: 20px;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
    }

    .card {
      border-radius: 15px;
      padding: 20px;
      width: 400px;

      &:first-child {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border: 1px solid #efefef;

        .icon {
          background-color: #427cff;
          color: #fff;
          padding: 5px;
          font-size: 20px;
          border-radius: 50px;
        }
      }

      .icon {
        color: #cbcbcb;
        padding: 10px;
        font-size: 20px;
        border-radius: 50px;
        border: 1px solid #efefef;
      }

      h4 {
        color: #1a232c;
        font-size: 20px;
      }

      p {
        color: #697075;
        font-size: 16px;
      }
    }

    @media (max-width: 527px) {
      .card {
        width: 90%;
      }
    }

    @media (max-width: 409px) {
      .card {
        width: 100%;
      }
    }
  }

  .second-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }

    div {
      display: flex;
      gap: 10px;

      @media (max-width: 520px) {
        flex-wrap: wrap;
        width: 50%;
      }
    }
  }
`;

function InfoSection() {
  return (
    <StyledInfoSec>
      <div className="first-section">
        <div>
          <h2>Build Your Crypto Portfolio</h2>
          <p>
            Discover, store, invest, send & receive. All in one app. Ready to
            use.
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <CgLoadbarSound className="icon" />
            <div>
              <h4>Real-time Insights</h4>
              <p>Updating 24/7 using price data from the biggest exchanges.</p>
            </div>
          </div>
          <div className="card">
            <CiMobile1 className="icon" />

            <div>
              <h4>Free Mobile App</h4>
              <p>Top notch crypto portfolio tracking at no cost.</p>
            </div>
          </div>
          <div className="card">
            <MdOutlineSettingsInputComponent className="icon" />

            <div>
              <h4>Crypto Portfolio</h4>
              <p>
                Thousands of coins and tokens available with balance and profit
                & loss.
              </p>
            </div>
          </div>
          <div className="card">
            <GoShieldCheck className="icon" />
            <div>
              <h4>Data Security</h4>
              <p>We take data security and privacy very seriously.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-section">
        <img src={phoneImg} alt="Coins phone" />
        <div>
          <img src={googlePlay} alt="Google Play Store" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>
    </StyledInfoSec>
  );
}

export default InfoSection;
