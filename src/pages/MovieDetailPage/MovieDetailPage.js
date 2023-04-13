import Footer from "../../components/Footer/Footer";
import MovieCast from "./MovieCast/MovieCast";
import MovieDetail from "./MovieDetail/MovieDetail";
import "./MovieDetailPage.scss";
import MovieRecomendation from "./MovieRecomendation/MovieRecomendation";

const MovieDetailPage = () => {
  return (
    <div>
      <MovieDetail></MovieDetail>
      <MovieCast></MovieCast>
      <MovieRecomendation></MovieRecomendation>
      <Footer></Footer>
    </div>
  );
};

export default MovieDetailPage;
