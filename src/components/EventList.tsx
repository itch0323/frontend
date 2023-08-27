import React from 'react';
import { Event } from '../types';

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map(event => (
        <div key={event.イベント名}>
          <h2>{event.イベント名}</h2>
          <p>{event.説明}</p>
          <div>
            <h3>口コミ:</h3>
            {event.口コミ.map(review => (
              <div key={review.投稿者名}>
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
