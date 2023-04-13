import useFetch from "../../hooks/useFetch";
import AvancesItem from "../AvancesItem/AvancesItem";
import "./Avances.scss";
import { usePagination } from "../../hooks/usePaginator";
import { FormattedMessage } from "react-intl";

const Avances = () => {
  const API_URL = process.env.REACT_APP_API_URL + "/discover/movie?page=1&release_date.desc&vote_average.gte=5.5&api_key=" + process.env.REACT_APP_API_KEY;
  const [discoverData] = useFetch(API_URL);
  const [firstMovies, showMoreMovies, theAreMore] = usePagination(discoverData?.results);
  console.log(discoverData);
  return (
    <div className="discover">
      <h3 className="discover__title">
        <FormattedMessage id="avances:title" />
      </h3>
      <div className="discover__wrapper">
        {firstMovies?.map((item) => (
          <AvancesItem key={item.id} item={item} />
        ))}
      </div>
      <div className="discover__btn">
        {theAreMore && (
          <button onClick={() => showMoreMovies()} className="btn discover__show-more">
            <FormattedMessage id="general:show-more" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Avances;
