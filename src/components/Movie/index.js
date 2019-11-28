import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaLink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMovie } from "../../store/movie/movie.action";
import Loading from "../Shared/Spinner/Loading";
import Error from "../Shared/Error";
import RecommendMovies from "./RecommendMovies";
import Layout from "../Layout";
import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  margin: 7rem auto;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;

  .movie-info {
    flex: 1;
    padding: 0 3rem;
  }

  .movie-title {
    font-size: 3rem;
  }

  .movie-rating {
    padding-top: 2rem;
    font-size: 1.6rem;
  }

  .movie-desc {
    font-size: 1.7rem;
    margin: 1rem 0;
  }

  .movie-details {
    li {
      display: flex;
      font-size: 1.6rem;
      margin-top: 0.5rem;

      .movie-details-text {
        width: 20rem;
        padding-right: 1rem;
      }
    }
  }

  .movie-img-container {
    flex-basis: 30%;

    .movie-img {
      width: 100%;
      border-radius: 15px;
    }
  }

  .movie-action {
    display: flex;
    align-items: center;
    margin: 2rem 0;

    .btn {
      width: 20rem;
      border: 1px solid var(--color-primary);
      padding: 1rem 0;
      color: #fff;
      border-radius: 50px;
      background-color: var(--color-primary);
      text-align: center;
      font-size: 1.7rem;

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    .btn-invert {
      background-color: #fff;
      border: 1px solid #fff;
      color: var(--color-primary);
    }
  }
`;

const Movie = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movie, isLoading } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [movieId, dispatch]);

  return (
    <Layout>
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <MovieContainer>
              <div className="movie-img-container">
                <img
                  className="movie-img"
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-rating">
                  {movie.vote_average}/ 10 Rating
                </div>
                <div className="movie-desc">{movie.overview}</div>
                <ul className="movie-details">
                  <li>
                    <div className="movie-details-text"> Genre </div>
                    <div>
                      {movie.genres.length > 0 &&
                        movie.genres.map(genre => (
                          <span
                            key={genre.id}
                            style={{ marginRight: "0.5rem" }}
                          >
                            {genre.name}
                          </span>
                        ))}
                    </div>
                  </li>
                  <li>
                    <div className="movie-details-text"> Released Date </div>
                    <div>{movie.release_date}</div>
                  </li>
                  <li>
                    <div className="movie-details-text"> Duration </div>
                    <div>{movie.runtime} minutes</div>
                  </li>
                  {movie.production_countries &&
                    movie.production_countries.length > 0 && (
                      <li>
                        <div className="movie-details-text"> Country</div>
                        <div>{movie.production_countries[0].name}</div>
                      </li>
                    )}
                </ul>
                <div className="movie-action">
                  <a href={movie.homepage} className="btn ">
                    <span style={{ marginRight: "1rem" }}>
                      <FaLink />
                    </span>
                    Visit Website
                  </a>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    className="btn btn-invert"
                  >
                    <span style={{ marginRight: "1rem" }}>
                      <FaPlay />
                    </span>
                    IMDB
                  </a>
                </div>
              </div>
            </MovieContainer>
            <RecommendMovies />
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Movie;
