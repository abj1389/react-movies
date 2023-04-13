import "./Gratis.scss";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import Item from "../Item/Item";
import { usePagination } from "../../hooks/usePaginator";
import { FormattedMessage } from "react-intl";

const Gratis = () => {
  const [optionMedia, setOptionMedia] = useState("movie");

  const API_URL_WATCH_FREE = process.env.REACT_APP_API_URL + "/discover/" + optionMedia + "?sort_by=release_date.desc&language=es-ES&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free&api_key=" + process.env.REACT_APP_API_KEY;
  const [freeData] = useFetch(API_URL_WATCH_FREE);
  const [firstMovies, showMoreMovies, theAreMore] = usePagination(freeData?.results);

  console.log(freeData);
  return (
    <div className="popular">
      <div className="popular__text">
        <h3 className="popular__title">
          <FormattedMessage id="gratis:title" />
        </h3>
        <div className="popular__buttons">
          <button className="btn popular__btn-time" onClick={() => setOptionMedia("movie")}>
            <FormattedMessage id="general:films" />
          </button>
          <button className="btn popular__btn-time" onClick={() => setOptionMedia("tv")}>
            <FormattedMessage id="general:tv" />
          </button>
        </div>
      </div>
      <div className="popular__films--wrapper">
        <div className="popular__films">
          {firstMovies?.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>

      {theAreMore && (
        <button onClick={() => showMoreMovies()} className="btn popular__show-more">
          <FormattedMessage id="general:show-more" />
        </button>
      )}
    </div>
  );
};

export default Gratis;
