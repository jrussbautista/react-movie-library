import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const StyledHeader = styled.header`
  height: 7rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: ${props =>
    props.isDark ? "var(--color-dark)" : "transparent"};
  box-shadow: ${props =>
    props.isDark
      ? "0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08)"
      : "none"};

  .container {
    display: flex;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    height: 100%;
  }

  .header-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .header-nav {
    display: flex;
    align-items: center;

    .active {
      color: #fff;

      &:after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 1rem;
        height: 1rem;
        background-color: #dd2c00;
        border-radius: 50%;
      }
    }

    li {
      font-size: 1.7rem;
      text-decoration: none;
      position: relative;

      &:not(:last-child) {
        margin-right: 3rem;
      }

      a {
        color: #bdbdbd;
      }
    }
  }

  .title {
    color: var(--color-primary);
    font-size: 3rem;
    font-weight: 600;
    padding: 0 1.5rem;
  }

  .form-search {
    height: 4rem;
    border: 1px solid #eee;
    background-color: transparent;
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin-left: 2rem;

    input {
      padding: 0 1.5rem;
      height: 100%;
      border: 1px solid transparent;
      color: inherit;
      font-size: 1.6rem;
      background-color: transparent;
      border-radius: 50px;
      color: #fff;
      width: 100%;
      &::placeholder {
        color: #fff;
      }

      &:focus {
        outline: none;
      }
    }

    .btn {
      background-color: transparent;
      border: 1px solid transparent;
      color: #fff;
      margin: 0 1rem;
      cursor: pointer;
      font-size: 2.5rem;

      &:focus {
        outline: none;
      }
    }
  }
`;

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // change navbar dark theme  when scroll
  const handleScroll = e => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <StyledHeader isDark={isScroll}>
      <div className="container">
        <div>
          <img src="" alt="" />
          <span className="title"> Movie Library </span>
        </div>
        <div className="header-right">
          <ul className="header-nav">
            <li>
              <NavLink to="/discover/popular"> Popular </NavLink>
            </li>
            <li>
              <NavLink to="/discover/top_rated"> Top Rated </NavLink>
            </li>
            <li>
              <NavLink to="/discover/upcoming"> Upcoming </NavLink>
            </li>
          </ul>
          <form className="form-search">
            <input type="text" placeholder="Search Movie " />
            <button className="btn">
              <MdSearch />
            </button>
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
