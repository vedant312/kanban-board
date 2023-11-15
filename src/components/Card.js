import React from 'react';
import { MoreHorizontal } from 'react-feather';
import Tag from './Tag';
import '../css/Card.css'; // Make sure to create and import the CSS file

const Card = ({ ticket, users }) => {
  const tags = ticket.tag || [];

  const findUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  };

  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__id'>
          Assigned to: {findUserName(ticket.userId)}
        </span>
        {/* <img src={avatarUrl} alt='Avatar' className='card__avatar' /> */}
      </div>
      <h2 className='card__title'>{ticket.title}</h2>
      <div className='card__footer'>
        <div className='card__feature-request'>
          <MoreHorizontal color='#808080' size='20' />
        </div>
        {/* <div className="card__feature-request">
          <div className="card__feature-icon"></div>
          {tag}
        </div> */}
        <div>
          {/* {tags &&
            tags.map((tag, index) => (
              <div key={index} className='card__tag'>
                <span className='card__tag-dot'></span>
                {tag}
              </div>
            ))} */}
          <Tag tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default Card;
