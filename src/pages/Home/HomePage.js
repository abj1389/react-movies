import Avances from "../../components/Avances/Avances";
import Popular from "../../components/Popular/Popular";
import Tendencias from "../../components/Tendencias/Tendencias";
import "./HomePage.scss";
import HeaderBackground from "../../assets/header-img.png";
import Unete from "../../assets/unete.png";
import Gratis from "../../components/Gratis/Gratis";
import Footer from "../../components/Footer/Footer";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  return (
    <div>
      <div className="home__background">
        <div className="home__backround-container">
          <img className="home__background-container-image" src={HeaderBackground} />
        </div>
        <div className="home__background-text">
          <p className="home__background-text--first">
            <FormattedMessage id="home:first-title" />
          </p>
          <p className="home__background-text--second">
            <FormattedMessage id="home:first-text" />
          </p>
        </div>
      </div>
      <Tendencias></Tendencias>
      <Avances></Avances>
      <Popular></Popular>
      <div className="home__background">
        <div className="home__backround-container">
          <img className="home__background-container-image" src={Unete} />
        </div>
        <div className="home__background-text">
          <p className="home__background-text--first">
            <FormattedMessage id="home:second-title" />
          </p>
          <p className="home__background-text--second">
            <FormattedMessage id="home:second-text" />
          </p>
        </div>
      </div>
      <Gratis></Gratis>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
