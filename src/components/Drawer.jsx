import { useGlobalContext } from "../context/Context";
import { IoMdClose } from "react-icons/io";
import home_icon_mobile from "../assets/home_icon_mobile.png";
import about_icon_mobile from "../assets/about_icon_mobile.png";
import services_icon_mobile from "../assets/services_icon_mobile.png";
import portfolio_icon_mobile from "../assets/portfolio_icon_mobile.png";
import contact_icon_mobile from "../assets/contact_icon_mobile.png";
import Button from "./Button";

const Drawer = () => {
  const {
    closeDrawer,
    handleScrollToSection,
    homeRef,
    aboutRef,
    servicesRef,
    portfolioRef,
    contactRef,
  } = useGlobalContext();
  return (
    <div className="drawer">
      <div className="drawer__content">
        {/*drawerBtn */}
        <Button className="close__drawer__btn" onClick={closeDrawer}>
          <IoMdClose className="close__icon" />
        </Button>
        {/*drawer nav */}
        <div className="drawer__nav">
          <div className="drawer__nav__content">
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(homeRef)}>
                <img src={home_icon_mobile} alt="home" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(aboutRef)}>
                <img src={about_icon_mobile} alt="about" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(servicesRef)}>
                <img src={services_icon_mobile} alt="services" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(portfolioRef)}>
                <img src={portfolio_icon_mobile} alt="portfolio" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(contactRef)}>
                <img src={contact_icon_mobile} alt="contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
