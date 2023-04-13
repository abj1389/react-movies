import "./MovieRecomendation.scss";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import RecomendationItem from "../../../components/RecommdationItem/RecomendationItem";
import { FormattedMessage } from "react-intl";

const MovieRecomendation = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_RECOMMENDATIONS = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "/recommendations" + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [recommendationsData] = useFetch(API_URL_RECOMMENDATIONS);
  return (
    <div className="movie-rec">
      <h3 className="movie-rec__title">
        <FormattedMessage id="movie-recomendation:title" />
      </h3>
      <div className="movie-rec__wrapper">
        <div className="movie-rec__item">
          {recommendationsData?.results?.map((element) => (
            <RecomendationItem key={element.id} item={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRecomendation;
