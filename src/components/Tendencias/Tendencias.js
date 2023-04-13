import "./Tendencias.scss";
import useFetch from "../../hooks/useFetch";
import Item from "../Item/Item";
import { useState } from "react";
import { usePagination } from "../../hooks/usePaginator";
import { FormattedMessage } from "react-intl";

const Tendencias = () => {
  const [listTimeTrends, setListTimeTrends] = useState("day");

  const API_URL = process.env.REACT_APP_API_URL + "/trending/movie/" + listTimeTrends + "?" + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData] = useFetch(API_URL);
  const [firstMovies, showMoreMovies, theAreMore] = usePagination(movieData?.results);
  console.log(firstMovies);

  return (
    <div className="trends">
      <div className="trends__text">
        <h3 className="trends__title">
          <FormattedMessage id="tendencias:title" />
        </h3>
        <div className="trends__buttons">
          <button onClick={() => setListTimeTrends("day")} className="btn trends__btn-time">
            <FormattedMessage id="tendencias:today" />
          </button>
          <button onClick={() => setListTimeTrends("week")} className="btn trends__btn-time">
            <FormattedMessage id="tendencias:week" />
          </button>
        </div>
      </div>
      <div className="trends__films--wrapper">
        <div className="trends__films">
          {firstMovies?.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>

      {theAreMore && (
        <button onClick={() => showMoreMovies()} className="btn trends__show-more">
          <FormattedMessage id="general:show-more" />
        </button>
      )}
    </div>
  );
};

export default Tendencias;
