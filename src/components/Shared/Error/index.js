import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  .message {
    font-size: 3rem;
  }

  .btn {
    height: 6rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 1.5rem;
    width: 20rem;
    font-size: 2rem;
    border: 1px solid transparent;
    background-color: var(--color-primary);
    color: #fff;
    margin: 2rem auto;
  }
`;

export default ({ message }) => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <div className="message">{message}</div>
        <button
          className="btn"
          onClick={() => history.push("/discover/popular")}
        >
          {" "}
          Back to Home{" "}
        </button>
      </div>
    </Container>
  );
};
