import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Menu, PagesLink } from "./Layout.style";

const StyleLink = styled(NavLink)`
  color: #000;
  &.active {
    color: #0ff;
  }
`;

function Layout() {
  return (
    <>
      <Menu>
        <PagesLink>
          <StyleLink to="/">Home</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/genres">Genres</StyleLink>
        </PagesLink>
      </Menu>
      <Outlet />
    </>
  );
}

export default Layout;
