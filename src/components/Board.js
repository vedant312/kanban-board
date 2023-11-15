import React from 'react';
import { MoreHorizontal, Plus } from 'react-feather';
import Card from './Card';
import '../css/Board.css';
import { statusIcons, priorityIcons, userIcons } from './icon';

function Board({ status, tickets, users }) {
  const getUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  };

  const getTitle = () => {
    let icon;
    let titleText;
    if (typeof status === 'number') {
      // Assuming you want to convert priority numbers to priority names
      const priorityNames = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
      titleText = `${priorityNames[status]}`;
      icon = priorityIcons[status];
    } else if (typeof status === 'string' && status.startsWith('usr-')) {
      titleText = getUser(status);
      icon = userIcons[status];
    } else {
      titleText = status;
      icon = statusIcons[status];
    }

    return { icon, titleText };
  };

  const avatarUrl = 'https://avatars.githubusercontent.com/u/82332572?v=4';
  const { icon, titleText } = getTitle();

  return (
    <div className='board'>
      <div className='board_top'>
        <p className='board_top_title'>
          {icon}
          {titleText} <span>{tickets.length}</span>
        </p>
        <p>
          <Plus color='#808080' size='20' />
          <MoreHorizontal color='#808080' size='20' />
        </p>
      </div>
      <div className='board_cards'>
        {tickets.map(
          (ticket) =>
            ticket && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tags={ticket.tag}
                avatarUrl={avatarUrl}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Board;
