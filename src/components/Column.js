import React from 'react';
import Card from './Card';
import { MoreHorizontal, Plus } from 'react-feather';
import '../css/Board.css';
import { statusIcons, priorityIcons } from './icon'; // Import the statusIcons and priorityIcons


function Column({ group, tickets, sorting, users, grouping }) {
  // Sorting logic
  const sortTickets = (tickets) => {
    if (sorting === 'Priority') {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    } else {
      // Default to sorting by title
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
  };
  console.log(group);

  const sortedTickets = sortTickets(tickets);

  return (
    <div className='board'>
      <div className='board_top'>
        <p className='board_top_title'>
        {statusIcons[group] && statusIcons[group]} {priorityIcons[group] && priorityIcons[group]} {group}
          <span>{tickets.length}</span>
        </p>
        <p>
          <Plus color='#808080' size='20' />
          <MoreHorizontal color='#808080' size='20' />
        </p>
      </div>
      <div className='board_cards'>
        {sortedTickets.map((ticket) => (
          <Card
            key={ticket.id}
            grouping={grouping}
            ticket={ticket}
            users={users}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
