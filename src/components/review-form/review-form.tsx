import { ChangeEvent, useState } from 'react';
import RatingInput from '../rating-input/rating-input';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RATINGS } from '../../const';

// ТОЛЬКО ДЛЯ авторизированных пользователей
// показывает 10 последних комментариев
// сохранять STATE в хук отдельно для комментария и рейтинга

function ReviewsForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<string>('');

  const isValid: boolean =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  const handleTextareaChange = (
    evt: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        {comment}
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((ratingItem) => (
          <RatingInput
            key={ratingItem.value}
            rating={ratingItem}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
        minLength={MIN_COMMENT_LENGTH}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_COMMENT_LENGTH} characters
          </b>
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
