import "./CrewItem.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { usePagination } from "../../hooks/usePaginator";
import { FormattedMessage } from "react-intl";

const CrewItem = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_CAST = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "/credits" + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);
  console.log(personsData);
  const [firstCrew, showMorePeople, theAreMore] = usePagination(personsData?.crew);

  return (
    <div className="crew-item">
      <div className="crew-item__content">
        {firstCrew?.map((person) => (
          <div className="crew-item__info" key={person.id}>
            <p className="crew-item__name">{person?.name}</p>
            <p className="crew-item__job">{person?.job}</p>
          </div>
        ))}
      </div>
      <div className="crew-item__button">
        {theAreMore && (
          <button onClick={() => showMorePeople()} className="btn crew-item__show-more">
            <FormattedMessage id="general:show-more" />
          </button>
        )}
      </div>
    </div>
  );
};
export default CrewItem;
