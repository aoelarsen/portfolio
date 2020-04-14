import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  transition: color 1s ease-in;

  &:hover {
    color: var(--light-green);
    box-shadow: inset 0px -2px 0px 0px var(--light-green);
  }
  &[aria-current="page"] {
    font-weight: 700;
  }
`

export default NavLink
