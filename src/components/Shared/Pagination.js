import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledPaginate = styled.div`
  padding: 5rem 0;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;

    li {
      padding: 1rem 2rem;

      &:not(:last-child) {
        margin-right: 2.5rem;
      }

      &.selected {
        background-color: #dd2c00;
        color: #fff;
        border-radius: 4px;
      }

      &.disabled {
        opacity: 0.6;

        a {
          cursor: not-allowed;
        }
      }

      a {
        font-size: 1.7rem;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default ({ initialPage, totalPage }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handlePageChange = num => {
    const { selected } = num;
    history.push(`${pathname}?page=${selected + 1}`);
  };

  return (
    <StyledPaginate>
      <ReactPaginate
        pageCount={totalPage.length}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        initialPage={initialPage - 1}
        onPageChange={handlePageChange}
      />
    </StyledPaginate>
  );
};
