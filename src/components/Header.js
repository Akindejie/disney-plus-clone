import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <NavLink to="/">
        <Logo src="/images/logo.svg" />
      </NavLink>
      <NavMenu>
        <li>
          <img src="/images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </li>
        <li>
          <img src="/images/search-icon.svg" alt="Search Icon" />
          <span>SEARCH</span>
        </li>
        <li>
          <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>WATCHLIST</span>
        </li>
        <li>
          <img src="/images/original-icon.svg" alt="Original Icon" />
          <span>ORIGINALS</span>
        </li>
        <li>
          <img src="/images/movie-icon.svg" alt="Movies Icon" />
          <span>MOVIES</span>
        </li>
        <li>
          <img src="/images/series-icon.svg" alt="Series Icon" />
          <span>SERIES</span>
        </li>
        <NavLink to="/detail">
          <li>
            <img src="/images/home-icon.svg" alt="Home Icon" />
            <span>DETAILS</span>
          </li>
        </NavLink>
      </NavMenu>
      <NavLink to="/login">
        <UserImg src="/images/deji-avatar.jpg" />
      </NavLink>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
