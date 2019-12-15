import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "../Shared/Icons/Hamburger";

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

    @media ${props => props.theme.mediaQueries.largest} {
      max-width: 100%;
      padding: 0 2rem;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media ${props => props.theme.mediaQueries.medium} {
      background: #1d1d21;
      width: 60%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 100;
      z-index: 100;
      flex-direction: column;
      justify-content: flex-start;
      padding: 2rem 0;
    }

    &.sidebar-open {
      transform: translateX(0);
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  .header-mobile {
    display: none;
    flex: 1;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      transform: rotate(180deg);
      fill: #fff;
      display: block;
      width: 2.2rem;
      height: 2.2rem;
    }
    @media ${props => props.theme.mediaQueries.medium} {
      display: flex;
    }
  }

  .header-nav {
    display: flex;
    align-items: center;

    @media ${props => props.theme.mediaQueries.medium} {
      flex-direction: column;
      order: 2;
      align-items: flex-start;
      padding: 1rem 2rem;
    }

    .active {
      color: #fff;

      &:after {
        content: "";
        position: absolute;
        bottom: -1.5rem;
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

      @media ${props => props.theme.mediaQueries.medium} {
        margin: 1rem 0;
        font-size: 2rem;
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

    @media ${props => props.theme.mediaQueries.medium} {
      margin: 0 2rem;
    }

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
  const history = useHistory();
  const [isScroll, setIsScroll] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  //close sidebar when click outside
  const handleClickOutside = e => {
    if (e.target.classList.contains("overlay")) {
      setIsOpenSidebar(false);
    }
  };

  // change navbar dark theme  when scroll
  const handleScroll = e => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${process.env.PUBLIC_URL}/search/${search}`);
  };

  return (
    <StyledHeader isDark={isScroll}>
      <div className="container">
        <Link to={`${process.env.PUBLIC_URL}/discover/popular`}>
          <img src="" alt="" />
          <span className="title"> Movie Library </span>
        </Link>
        <div className="header-mobile">
          <div onClick={() => setIsOpenSidebar(true)}>
            <Hamburger />
          </div>
        </div>
        {isOpenSidebar && <div className="overlay"></div>}
        <div className={`header-right ${isOpenSidebar ? "sidebar-open" : ""}`}>
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
            <li>
              <NavLink to="/favorites"> Favorites </NavLink>
            </li>
          </ul>
          <form className="form-search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Movie "
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn" type="submit">
              <MdSearch />
            </button>
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
