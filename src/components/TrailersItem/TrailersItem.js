import "./TrailersItem.scss";
import useFetch from "../../hooks/useFetch";
import { ImPlay3 } from "react-icons/im";
import { FormattedMessage } from "react-intl";

const TrailersItem = ({ item }) => {
  const [urlItemVideo] = useFetch(process.env.REACT_APP_API_URL + "/movie/" + item?.id + "/videos?api_key=" + process.env.REACT_APP_API_KEY);
  const urlOficialTrailerItem = urlItemVideo?.results?.find((element) => element.name?.includes("Trailer") && element.site === "YouTube" && element.key);
  return (
    <div className="trailers-item">
      <div className="trailers-item__player">
        <ImPlay3 className="trailers-item__icon" />
        <a className="trailers-item__link-video" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${urlOficialTrailerItem?.key}`}>
          <FormattedMessage id="trailers:youtube" />
        </a>
      </div>
      <div className="trailers-item__info">
        <p className="trailers-item__title">{item?.title}</p>
        <p className="trailers-item__text">
          <FormattedMessage id="trailers:trailer" />
        </p>
      </div>
    </div>
  );
};

export default TrailersItem;
