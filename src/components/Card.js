import React from 'react';
import { MoreHorizontal, Plus } from 'react-feather';
import '../css/Card.css'; // Make sure to create and import the CSS file

const Card = ({ id, title, tags, avatarUrl }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__id'>{id}</span>
        <img src={avatarUrl} alt='Avatar' className='card__avatar' />
      </div>
      <h2 className='card__title'>{title}</h2>
      <div className='card__footer'>
        <div className='card__feature-request'>
          <MoreHorizontal color='#808080' size='20' />
        </div>
        {/* <div className="card__feature-request">
          <div className="card__feature-icon"></div>
          {tag}
        </div> */}
        <div>
          {tags.map((tag, index) => (
            <div key={index} className='card__tag'>
              <span className='card__tag-dot'></span>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
