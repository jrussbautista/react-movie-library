import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Error from "./Error";
import { fetchGenres } from "../../store/genres/genres.action";

const Heading = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  padding: 2rem;
`;

const Genres = styled.div`
  .link {
    background-color: #263238;
    color: #fff;
    padding: 1rem;
    border-radius: 50px;
    font-size: 1.5rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    margin-right: 2rem;

    &.active {
      background-color: var(--color-primary);
    }

    &:hover {
      background-color: var(--color-primary);
    }
  }
`;

export default () => {
  const dispatch = useDispatch();
  const { genres, isLoading, isError } = useSelector(state => state.genres);
  const [totalShow, setTotalShow] = useState(null);
  const sliderEl = useRef();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    changeTotalShow();
    window.addEventListener("resize", changeTotalShow);
    return () => window.removeEventListener("resize", changeTotalShow);
  }, []);

  const changeTotalShow = () => {
    if (sliderEl.current !== undefined) {
      let totalItems = Math.round(sliderEl.current.offsetWidth / 150);
      setTotalShow(totalItems);
    }
  };

  let settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: totalShow,
    slidesToScroll: 1
  };

  if (isError) {
    return <Error message="Something went wrong" />;
  }

  return (
    <div style={{ padding: "20px 0 10px 0" }} ref={sliderEl}>
      <Heading> Genre </Heading>
      {isLoading ? (
        <div> Loading ... </div>
      ) : (
        <Slider {...settings}>
          {genres.map(g => (
            <Genres key={g.id}>
              <NavLink
                className="link"
                activeClassName="active"
                to={`${process.env.PUBLIC_URL}/genres/${g.name.toLowerCase()}`}
              >
                {g.name}
              </NavLink>
            </Genres>
          ))}
        </Slider>
      )}
    </div>
  );
};
