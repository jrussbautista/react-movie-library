import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  height: 50rem;
  position: relative;

  .hero-bg {
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .hero-info {
    position: relative;
    z-index: 3;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
  }

  .hero-main {
    padding-left: 6rem;
    width: 50%;
  }

  .rating {
    padding: 10px 0;
    font-size: 1.5rem;
  }

  .num {
    color: #dd2c00;
    font-weight: 700;
    font-size: 1.8rem;
  }

  .hero-overview {
    font-size: 1.7rem;
    font-weight: 400;
    padding: 2rem 0;
    line-height: 2.6rem;
  }
`;

export default ({ movie }) => {
  return (
    <Hero>
      <div
        className="hero-bg"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}")`
            : ""
        }}
      ></div>
      <div className="hero-info">
        <div className="hero-main">
          <div className="hero-title"> {movie.title} </div>
          <div className="rating">
            <span className="num">{movie.vote_average}</span> / 10 Ratings
          </div>
          <div className="hero-overview"> {movie.overview} </div>
          <div className="heroAction"></div>
        </div>
      </div>
      <div className="overlay"></div>
    </Hero>
  );
};
