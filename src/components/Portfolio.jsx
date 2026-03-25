import { useGlobalContext } from "../context/Context";
import portfolio from "../assets/portfolio.png";
import airbnb from "../assets/airbnb.png";
import floristShop from "../assets/floristShop.png";
import coffeeShop from "../assets/coffeeShop.png";

const Portfolio = () => {
  const { portfolioRef } = useGlobalContext();
  return (
    <div className=" gallery row container" id="portfolio" ref={portfolioRef}>
      <div className="container__content column column__gap2">
        <div className="column">
          <div className="sh3 grey1 t__ca">Portfolio</div>
          <div className="h2 oswald t__uc f__w2">WORK I HAVE DONE</div>
        </div>
        <div className="row">
          <div className="row row__wrap">
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/portfolio"
            >
              <img src={portfolio} alt="gallery" />
            </a>
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/landing-page"
            >
              <img src={coffeeShop} alt="gallery" />
            </a>
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/airbnb-clone"
            >
              <img src={airbnb} alt="gallery" />
            </a>
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/landingPage-floristShop"
            >
              <img src={floristShop} alt="gallery" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
