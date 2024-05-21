import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navigation = () => {
  return (
    <header>
      <Container>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
