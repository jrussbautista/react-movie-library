import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../images/logo.svg";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  flex-wrap: wrap;
  margin: 3rem 0;
  grid-gap: 2rem;
  padding: 0 2rem;
`;

const Col = styled.div`
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

    svg {
      height: 36rem;
      width: 100%;
      fill: var(--color-primary);
    }
  }

  .img {
    border-radius: 10px;
    width: 100%;
    height: 36rem;

    @media ${props => props.theme.mediaQueries.medium} {
      object-fit: cover;
    }
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
          <Link
            to={`${process.env.PUBLIC_URL}/discover/movie/${movie.id}`}
            className="link"
          >
            <Card className="card">
              <div className="img-wrapper">
                {movie.poster_path ? (
                  <img
                    className="img"
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <Logo />
                )}
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
