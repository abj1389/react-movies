import "./Item.scss";
import { roundedToFixed, generateColor } from "../../utils/utils";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + "%";
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);
  const type = item.title ? "movie" : "tv";
  return (
    <Link className="item" to={`/items/${item?.id}/${type}`}>
      <div className="item">
        <img className="item__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${item?.poster_path}`} />
        <p className="item__title">{item?.title || item?.name}</p>
        <p className="item__date">{item?.release_date || item?.first_air_date}</p>
      </div>
      <div className="item__exterior-circle">
        <div className="item__interior-circle" style={{ border: `3px solid ${colorVote}` }}>
          <p className="item__vote">
            {porcentVote}
            <span className="item__span">%</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
