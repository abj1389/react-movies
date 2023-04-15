import Trailers from "../../components/Trailers/Trailers";
import Popular from "../../components/Popular/Popular";
import Trending from "../../components/Trending/Trending";
import "./HomePage.scss";
import HeaderBackground from "../../assets/header-img.png";
import Unete from "../../assets/unete.png";
import FreeToWatch from "../../components/FreeToWatch/FreeToWatch";
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
      <Trending></Trending>
      <Trailers></Trailers>
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
      <FreeToWatch></FreeToWatch>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
