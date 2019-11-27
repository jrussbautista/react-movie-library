import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenre } from "../../store/genre/genre.action";
import { fetchGenres } from "../../store/genres/genres.action";
import Layout from "../Layout";
import Banner from "../Shared/Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Genres from "../Shared/Genres";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Genre = () => {
  const dispatch = useDispatch();
  const { genres, isLoading } = useSelector(state => state.genre);
  const { name } = useParams();

  const fetchGenresInfo = async () => {
    await dispatch(fetchGenres());
    dispatch(fetchGenre(name));
  };

  useEffect(() => {
    fetchGenresInfo();
  }, [name]);
  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Banner movie={genres[0]} />
          <Container>
            <Genres />
            <MovieList movies={genres} />
          </Container>
        </div>
      )}
    </Layout>
  );
};

export default Genre;
