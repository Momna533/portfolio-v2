import Button from "./Button";
import { FaGithub } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="row column__gap1 row__wrap">
      <div className="footer__social__link row">
        <Button
          target="_blank"
          href="https://github.com/Momna533"
          varient="link"
        >
          <FaGithub className="home__social__icon" />
        </Button>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
