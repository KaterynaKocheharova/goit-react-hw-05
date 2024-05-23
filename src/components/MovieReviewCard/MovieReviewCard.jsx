const MovieReviewCard = ({ reviewData: { author, content } }) => {
  return (
    <>
      <h3>{author}</h3>
      <p>{content}</p>
    </>
  );
};

export default MovieReviewCard;
