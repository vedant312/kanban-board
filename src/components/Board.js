import React from 'react';
import Column from './Column';
import '../css/Board.css';

function Board({ tickets, users, grouping, sorting }) {
  const getUniqueValues = (data, key) => [
    ...new Set(data.map((item) => item[key])),
  ];

  const groupTickets = () => {
    const groups = {};

    if (grouping === 'User') {
      users.forEach((user) => {
        groups[user.name] = tickets.filter(
          (ticket) => ticket.userId === user.id
        );
      });
    } else if (grouping === 'Priority') {
      const priorityNames = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
      const uniquePriorities = getUniqueValues(tickets, 'priority');
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
        />
      ))}
    </div>
  );
}

export default Board;
