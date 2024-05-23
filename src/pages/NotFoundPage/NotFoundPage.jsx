import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page not found. Please go to home page</h2>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFoundPage;
