const Error = ({ error }) => {
  return (
    <p>
      Oops. Something went wrong. Check your internet connection or try again
      later. {error}
    </p>
  );
};

export default Error;
