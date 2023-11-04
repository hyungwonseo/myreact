import { NavLink, Outlet } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "./GameShop";

const Container = styled.div`
  display: flex;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 5px;
  background-color: lightblue;
  &.active {
    background-color: dodgerblue;
    color: white;
  }
`;

export function NavBar() {
  const { loginState } = useContext(GameContext);

  return (
    <>
      <Container>
        <StyledNavLink to="/home">
          <NavItem icon="ti ti-home-2" name="HOME" />
        </StyledNavLink>
        <StyledNavLink to="/products">
          <NavItem icon="ti ti-building-store" name="SHOP" />
        </StyledNavLink>
        <StyledNavLink to="/dashboard">
          <NavItem icon="ti ti-user" name="MyPage" />
        </StyledNavLink>
        {loginState?.id ? (
          <StyledNavLink to="/logout">
            <NavItem icon="ti ti-logout" name="logout" />
          </StyledNavLink>
        ) : (
          <StyledNavLink to="/login">
            <NavItem icon="ti ti-login" name="Login" />
          </StyledNavLink>
        )}
        <StyledNavLink to="/cart">
          <NavItem icon="ti ti-shopping-cart" name="Cart" />
        </StyledNavLink>
      </Container>
      <Outlet />
    </>
  );
}
