import React from "react";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <LoaderWrapper>
      <FadeLoader
        css={override}
        sizeUnit={"px"}
        size={20}
        color={"#fff"}
        loading={true}
      />
    </LoaderWrapper>
  );
};
