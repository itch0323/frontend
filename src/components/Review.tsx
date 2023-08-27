import React from 'react';
import { Review as ReviewType } from '../types';

type Props = {
  review: ReviewType;
};

const Review: React.FC<Props> = ({ review }) => {
  return (
    <div>
      <strong>{review.投稿者名}:</strong>
      <p>{review.内容}</p>
      <div>
        {review.点数.視覚過敏 !== null && <div>視覚過敏: {review.点数.視覚過敏}</div>}
        {review.点数.聴覚過敏 !== null && <div>聴覚過敏: {review.点数.聴覚過敏}</div>}
        {review.点数.嗅覚過敏 !== null && <div>嗅覚過敏: {review.点数.嗅覚過敏}</div>}
        {review.点数.味覚過敏 !== null && <div>味覚過敏: {review.点数.味覚過敏}</div>}
        {review.点数.触覚過敏 !== null && <div>触覚過敏: {review.点数.触覚過敏}</div>}
      </div>
    </div>
  );
};

export default Review;
