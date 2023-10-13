import { NavLink, Outlet } from 'react-router-dom'
import { NavItem } from "./NavItem"
import styled from 'styled-components'

const Container = styled.div`
  width: 900px;
  display: flex;
  background-color: lightblue;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #555;
  padding: 5px;
  background-color: lightblue;
  &.active {
    background-color: dodgerblue;
    color: white;
  }`

export function Navbar() {
  return <>
    <Container>
      <StyledNavLink to="/"><NavItem icon="ti ti-home-2" name="HOME"></NavItem>
      </StyledNavLink>
      <StyledNavLink to="/products"><NavItem icon="ti ti-device-tv" name="MOVIE"></NavItem>
      </StyledNavLink>
      <StyledNavLink to="/dashboard"><NavItem icon="ti ti-user" name="MYPAGE"></NavItem>
      </StyledNavLink>
      <StyledNavLink to="/login"><NavItem icon="ti ti-login" name="LOGIN"></NavItem>
      </StyledNavLink>
      <StyledNavLink to="/cart"><NavItem icon="ti ti-shopping-cart" name="CART"></NavItem>
      </StyledNavLink>      
    </Container>
    <Outlet />
  </>
}