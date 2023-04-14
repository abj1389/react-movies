import "./GamePage.scss";
import { generateRandom } from "../../utils/utils";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { FormattedMessage } from "react-intl";
import { ImFilm } from "react-icons/im";
import useFetch from "../../hooks/useFetch";

const GamePage = () => {
  const [nameSelected, setNameSelected] = useState();
  const [gameIsSolved, setGameIsSolved] = useState(false);
  // const [filmList, setFilmList] = React.useState([]);
  const [page, setPage] = useState(generateRandom(0, 100));
  const [currentFilm, setCurrentFilm] = useState();
  const [options, setOptions] = useState([]);
  const FILM_URL = process.env.REACT_APP_API_URL + "/movie/top_rated?language=en-US&page=" + page + "&api_key=" + process.env.REACT_APP_API_KEY;
  const [currentFilmInfo] = useFetch(process.env.REACT_APP_API_URL + "/movie/" + currentFilm?.id + "?api_key=" + process.env.REACT_APP_API_KEY);
  useEffect(() => {
    fetch(FILM_URL)
      .then((response) => response.json())
      .then((dataParsed) => {
        // setFilmList(dataParsed.results);
        generateNewGamePlay(dataParsed.results);
      });
  }, [page]);

  const generateNewGamePlay = (dataParsed) => {
    const randomIndexes = [];

    while (randomIndexes.length < 4) {
      const randomIndex = generateRandom(0, dataParsed.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const currentFilmIndex = randomIndexes[generateRandom(0, 3)];
    setCurrentFilm(dataParsed[currentFilmIndex]);
    const newGameOptions = randomIndexes.map((index) => dataParsed[index].title);
    setOptions(newGameOptions);
    setGameIsSolved(false);
    setNameSelected(null);
  };
  console.log(currentFilm);
  const selectOption = (name) => {
    if (!gameIsSolved) {
      setNameSelected(name);
    }
  };
  const getClassesForButton = (option) => {
    if (gameIsSolved) {
      if (option === currentFilm?.title) {
        return "btn__option--correct";
      } else if (option === nameSelected) {
        return "btn__option--wrong";
      }
    } else {
      if (option === nameSelected) {
        return "btn__option--selected";
      }
    }
  };

  console.log(currentFilm);

  return (
    <div className="game-page">
      <div className="game-page__detail">
        <div className="game-page__box-1">{gameIsSolved ? <img className="game-page__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${currentFilm?.poster_path}`} /> : <ImFilm className="game-page__film-icon" />} </div>
        <div className="game-page__box-2">
          <div className="game-page__text">
            <h3 className="game-page__title">{gameIsSolved ? currentFilm?.title || currentFilm?.name : "?"}</h3>
            <div className="game-page__main-info">
              <p className="game-page__release-date">{currentFilm?.release_date} | </p>
              <p className="game-page__genre">
                {currentFilm?.genres?.map((item) => (
                  <span key={item.id}> {item?.name},</span>
                ))}
              </p>
              <p className="game-page__time">| {currentFilmInfo?.runtime} min</p>
            </div>
            <h3 className="game-page__detail--title">
              <FormattedMessage id="game:first-title" />
            </h3>
            <p>{currentFilm?.overview}</p>
          </div>
        </div>
      </div>

      <div className="game-page__options--container">
        <h3 className="game-page__option-title">
          <FormattedMessage id="game:second-title" />
        </h3>
        <div className="game-page__options">
          {options.map((name) => (
            <button onClick={() => selectOption(name)} key={name} className={"btn btn--big btn__option game-page__button " + getClassesForButton(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="game-page__solve">
        <button
          className="btn btn--link game-page__solve-btn"
          onClick={() => {
            setPage(generateRandom(0, 100));
          }}
        >
          <FormattedMessage id="game:btn-charge" />
        </button>
        <button className="btn game-page__solve-btn" disabled={gameIsSolved} onClick={() => setGameIsSolved(true)}>
          <FormattedMessage id="game:btn-solve" />
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default GamePage;
