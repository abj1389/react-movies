import "./RecomendationItem.scss";
import { roundedToFixed } from "../../utils/utils";
import { Link } from "react-router-dom";

const RecomendationItem = ({ item }) => {
  const type = item.title ? "movie" : "tv";
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + "%";
  return (
    <Link className="rec-item" to={`/items/${item?.id}/${type}`}>
      <img className="rec-item__img" src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} />
      <div className="rec-item__text">
        <p className="rec-item__title">{item?.name || item?.title}</p>
        <p className="rec-item__score">{porcentVote}</p>
      </div>
    </Link>
  );
};
export default RecomendationItem;
