import React from 'react';
import Tag from './Tag';
import '../css/Card.css'; // Make sure to create and import the CSS file
import { statusIcons, priorityIcons } from './icon';

const Card = ({ grouping, ticket, users }) => {
  const tags = ticket.tag || [];
  console.log(ticket.status);
  const showStatusIcon = grouping !== 'Status';
  const showPriorityIcon = grouping !== 'Priority';
  const showImage = grouping !== 'User';

  // Generate the user image URL based on the user ID
  const userId = ticket.userId ? ticket.userId.match(/\d+/)[0] : 'default'; // Assuming the user ID is available in the ticket data
  const randomNum = 1000 * Number(userId);
  const userImageUrl = `https://avatars.githubusercontent.com/u/${randomNum}?v=4`;

  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__id'>{ticket.id}</span>
        {showImage && (
          <img src={userImageUrl} alt='Avatar' className='card__avatar' />
        )}
      </div>
      <h2 className='card__title'>
        {showStatusIcon && statusIcons[ticket.status]} {ticket.title}
      </h2>
      <div className='card__footer'>
        <div className='card__feature-request'>
          {showPriorityIcon && priorityIcons[ticket.priority]}
        </div>
        <div className='card__tag'>
          <Tag tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default Card;
