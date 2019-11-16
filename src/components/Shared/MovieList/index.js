import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
`;

const Col = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  padding: 0 1rem;
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }

  .link {
    display: block;
    color: #fff;
  }
`;

const Card = styled.div`
  .img-wrapper {
    position: relative;
  }

  .img {
    border-radius: 6px;
    width: 100%;
    height: 36rem;
  }

  .info {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    line-height: 2.2rem;
    height: 4.2rem;
    overflow: hidden;
    text-align: center;
    margin-top: 1rem;
  }

  .rating {
    color: var(--color-primary);
    font-size: 1.7rem;
  }
`;

export default ({ movies }) => {
  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.id}>
          <Link to={`movie/${movie.id}`} className="link">
            <Card className="card">
              <div className="img-wrapper">
                <img
                  className="img"
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="info">
                <div className="rating">{movie.vote_average}/10</div>
                <div className="title">{movie.title}</div>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
