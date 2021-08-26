import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// STYLES
import styled from 'styled-components';

function Nav() {
  const location = useLocation();

  return (
    location.pathname !== '/' &&
    location.pathname !== '/signup' && (
      <NavBox>
        <NavElement>
          <CompanyName to="/">BToolTek</CompanyName>
          <NavMenu>
            <NavMenuList>
              <NavMenuLink to="/calendar">Calendar</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/salesdetail">Sales Detail</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/Contact">Contact</NavMenuLink>
            </NavMenuList>
            <NavMenuList>
              <NavMenuLink to="/performance">Performance</NavMenuLink>
            </NavMenuList>
          </NavMenu>
        </NavElement>
      </NavBox>
    )
  );
}

export default Nav;

const NavBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  background-color: rebeccapurple;
  margin-bottom: 2rem;
`;

const NavElement = styled.div`
  ${({ theme }) => theme.flex('space-between', 'center', null)}
  max-width: 1200px;
  width: 100%;
`;

const CompanyName = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  ${({ theme }) => theme.flex('flex-end', 'center', null)}
  width: 100%;
`;

const NavMenuList = styled.li`
  margin: 1rem 0 1rem 2rem;
  list-style: none;
`;

const NavMenuLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
`;
