import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";

const MovieReviewsList = ({ reviewsData }) => {
  return (
    <ul>
      {reviewsData.map((reviewItem) => (
        <li key={reviewItem.id}>
          <MovieReviewCard reviewData={reviewItem} />
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
