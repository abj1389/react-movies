import "./CastItem.scss";

const CastDetail = ({ character }) => {
  return (
    <div className="cast-item">
      <img className="cast-item__img" alt={character?.name} src={`https://image.tmdb.org/t/p/w440_and_h660_face/${character?.profile_path}`} />
      <p className="cast-item__name">{character?.name}</p>
      <p className="cast-item__character">{character?.character}</p>
    </div>
  );
};
export default CastDetail;
