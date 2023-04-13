import "./Popular.scss";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import Item from "../Item/Item";
import { usePagination } from "../../hooks/usePaginator";
import { FormattedMessage } from "react-intl";

const Popular = () => {
  const [optionMedia, setOptionMedia] = useState("movie");

  const API_URL_POPULAR = process.env.REACT_APP_API_URL + "/" + optionMedia + "/popular/" + "?" + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [popularData] = useFetch(API_URL_POPULAR);
  const [firstItems, showMoreItems, theAreMore] = usePagination(popularData?.results);

  console.log(popularData);
  return (
    <div className="popular">
      <div className="popular__text">
        <h3 className="popular__title">
          <FormattedMessage id="popular:title" />
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
          {firstItems?.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>

      {theAreMore && (
        <button onClick={() => showMoreItems()} className="popular__show-more btn">
          <FormattedMessage id="general:show-more" />
        </button>
      )}
    </div>
  );
};

export default Popular;
