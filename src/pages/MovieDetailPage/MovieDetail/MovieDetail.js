import "./MovieDetail.scss";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import CrewItem from "../../../components/CrewItem/CrewItem";
import { roundedToFixed, generateColor, formatDate, formatGenres, formatTime } from "../../../utils/utils";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LanguageSelector } from "../../../App";

const MovieDetail = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const { language } = useContext(LanguageSelector);
  const API_URL_DETAIL = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "?language=" + language + "&api_key=" + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);
  const porcentVote = roundedToFixed(itemData?.vote_average) * 10 + "%";
  const colorVote = generateColor(roundedToFixed(itemData?.vote_average) * 10);

  return (
    <div className="movie-detail">
      <div className="movie-detail__box-1">
        <img className="movie-detail__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${itemData?.poster_path}`} />
      </div>
      <div className="movie-detail__box-2">
        <div className="movie-detail__text">
          <h3 className="movie-detail__title">{itemData?.title || itemData?.name}</h3>
          <div className="game-page__main-info">
            <span>{formatDate(itemData?.release_date || itemData?.seasons?.[0]?.air_date)} | </span>
            <span>{`${formatGenres(itemData?.genres)}`} </span>
            <span>{itemData?.runtime ? formatTime(itemData?.runtime) : ` | Seasons: ${itemData?.number_of_seasons} Episodes: ${itemData?.number_of_episodes}`}</span>
          </div>
          <div className="movie-detail__vote-line">
            <div className="movie-detail__exterior-circle">
              <div className="movie-detail__interior-circle" style={{ border: `3px solid ${colorVote}` }}>
                <p className="movie-detail__vote">
                  {porcentVote}
                  <span className="movie-detail__span"></span>
                </p>
              </div>
            </div>
            <p className="movie-detail__tagline">{itemData?.tagline}</p>
          </div>

          <p className="movie-detail__subtitle">
            <FormattedMessage id="movie-detail:title" />
          </p>
          <p className="movie-detai__description">{itemData?.overview}</p>
        </div>
        <div className="movie-detail__crew">
          <CrewItem></CrewItem>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
