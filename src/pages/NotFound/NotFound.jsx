import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page nor found. Please got to home page</h2>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound;
