import React from 'react';
import Column from './Column';
import '../css/Board.css';

function Board({ tickets, users, grouping, sorting }) {

  const groupTickets = () => {
    const groups = {};

    if (grouping === 'User') {
      users.forEach((user) => {
        groups[user.name] = tickets.filter(
          (ticket) => ticket.userId === user.id
        );
      });
    } else if (grouping === 'Priority') {
      const priorityNames = ['No Priority', 'Urgent', 'High', 'Medium', 'Low'];
      const uniquePriorities = [0, 1, 2, 3, 4];
      uniquePriorities.forEach((priority) => {
        const priorityName = priorityNames[priority];
        groups[priorityName] = tickets.filter(
          (ticket) => ticket.priority === priority
        );
      });
    } else {
      // Default to 'Status'
      const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
      statuses.forEach((status) => {
        groups[status] = tickets.filter((ticket) => ticket.status === status);
      });
    }

    return groups;
  };

  const groupedData = groupTickets();

  return (
    <div className='board-container'>
      {Object.entries(groupedData).map(([group, groupedTickets]) => (
        <Column
          key={group}
          group={group}
          tickets={groupedTickets}
          sorting={sorting}
          users={users}
          grouping={grouping}
        />
      ))}
    </div>
  );
}

export default Board;
