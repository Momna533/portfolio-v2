import Button from "./Button";
import { FaInstagram, FaGithub, FaTiktok, FaLinkedin } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="row column__gap1 row__wrap">
      <div className="footer__social__link row">
        <Button
          target="_blank"
          href="https://www.instagram.com/momna_ijaz_/"
          varient="link"
        >
          <FaInstagram className="home__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/momna-ijaz-951760398/"
          varient="link"
        >
          <FaLinkedin className="home__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          target="_blank"
          href="https://github.com/Momna533"
          varient="link"
        >
          <FaGithub className="home__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          target="_blank"
          href="https://www.tiktok.com/@momna_ijaz"
          varient="link"
        >
          <FaTiktok className="home__social__icon" />
        </Button>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
