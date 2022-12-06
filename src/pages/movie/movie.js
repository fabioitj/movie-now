/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading/loading";
import { getMovieById, getTorrentQualitiesByName, downloadTorrentByUrl } from "../../hooks/movieApi";
import "./movie.css";

const Movie = () => {
  const defaultImage = "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true";
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [qualities, setQualities] = useState([]);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    const id = params.id_movie;
    getMovieById(id).then((response) => {
      setMovie(response);
      setTimeout(() => {
        setSearched(true);
      }, 2500);
    });
  }, []);

  useEffect(() => {
    if(movie != null && movie != undefined && movie != ""){
      getTorrentQualitiesByName(movie.title).then((response) => {
        setQualities(response);
      });
    }
   
  }, [movie])

  const handleChooseQuality = (url) => {
    downloadTorrentByUrl(url);
  }

  return (
    <div className="movie">
      <div className="movie-card">
        <img src={(movie == null || movie == undefined || movie == "" || movie.poster == null || movie.poster == undefined || movie.poster == "" ? defaultImage : movie.poster)} className="movie-card__image"/>
        <div className="movie-card__text">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__subtitle">{movie.overview}</p>
        </div>
      </div>
      <div className="quality">
        <h2 className="quality-title">Qualities</h2>
        <ul className="quality-list">
        {
          qualities.map(x => {
            return (
              <li className="quality-item"><a className="quality-link" onClick={() => {handleChooseQuality(x.url)}}>{x.quality} - {x.size}</a></li>
            )
          })
        }
        {
          qualities.length === 0 && !searched &&
          <Loading/>
        }
        {
          qualities.length === 0 && searched &&
          <div className="quality-empty">
            Movie is unavailable to watch at this moment.
          </div>
        }
        </ul>
      </div>
      <div className="movie-video" id="movie-video"></div>
    </div>
  );
};

export default Movie;
