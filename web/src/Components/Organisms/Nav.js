import React, { Fragment } from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

function Nav() {
  const location = useLocation();

  return (
    location.pathname !== '/' &&
    location.pathname !== '/signup' && (
      <NavBox>
        <NavElement>
          <NavMenu>
            <NavMenuList>
              <NavMenuLink to="/calendar">Calendar</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/Contact">Contact</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/salesdetail">Sales Detail</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/performance">Performence</NavMenuLink>
            </NavMenuList>
          </NavMenu>
        </NavElement>
      </NavBox>
    )
  );
}

export default Nav;

export const NavBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  background-color: rebeccapurple;
  margin-bottom: 2rem;
`;

export const NavElement = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  max-width: 1200px;
  width: 100%;
`;
export const NavMenu = styled.ul`
  ${({ theme }) => theme.flex('flex-end', 'center', null)}
  width: 100%;
`;
export const NavMenuList = styled.li`
  margin: 1rem 0 1rem 2rem;
  list-style: none;
`;
export const NavMenuLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
`;
