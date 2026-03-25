import { useGlobalContext } from "../context/Context";
import {
  FaReact,
  FaNode,
  FaGit,
  FaHtml5,
  FaCss3,
  FaJs,
  FaYarn,
  FaNpm,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

const Services = () => {
  const { servicesRef } = useGlobalContext();
  return (
    <div className="services row container" id="services" ref={servicesRef}>
      <div className="container__content column column__gap2">
        <div className="column">
          <div className="sh3 grey1 t__ca">What i do</div>
          <div className="h2 oswald t__uc f__w2">My services</div>
        </div>
        <div className="services__content">
          <div className="services__entry">
            <FaReact />
          </div>
          <div className="services__entry">
            <FaHtml5 />
          </div>
          <div className="services__entry">
            <FaGit />
          </div>
          <div className="services__entry">
            <FaCss3 />
          </div>
          <div className="services__entry">
            <FaJs />
          </div>
          <div className="services__entry">
            <FaYarn />
          </div>
          <div className="services__entry">
            <FaNpm />
          </div>
          <div className="services__entry">
            <FaGithub />
          </div>
          <div className="services__entry">
            <FaFigma />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
