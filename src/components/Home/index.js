import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import useFetch from "../../hooks/useFetch";
import Banner from "./Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Genre from "./Genre";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Home = () => {
  let { name } = useParams();
  let endPoint;
  if (name === "discover") {
    endPoint = "/discover/movie";
  } else {
    endPoint = `/movie/${name}`;
  }
  const [status, error, datas] = useFetch(endPoint);

  const { results } = datas;

  if (error) {
    return <Error />;
  }

  return (
    <Layout>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div>
          <Banner movie={results[0]} />
          <Container>
            <Genre />
            <MovieList movies={results} />
          </Container>
        </div>
      )}
    </Layout>
  );
};

export default Home;
