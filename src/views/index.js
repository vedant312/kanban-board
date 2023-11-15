import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Board from '../components/Board';
import { ChevronDown } from 'react-feather';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');
  const [tickets, setTickets] = useState([]); // State to store tickets
  const [users, setUsers] = useState([]); // State to store users

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.quicksell.co/v1/internal/frontend-assignment'
        );
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangeOrdering = (e) => setOrdering(e?.target?.value);

  // Helper function to get unique values for a given key
  const getUniqueValues = (data, key) => [
    ...new Set(data.map((item) => item[key])),
  ];

  // Sorting helper functions
  const sortByPriority = (a, b) => b.priority - a.priority;
  const sortByTitle = (a, b) => a.title.localeCompare(b.title);

  // Function to apply sorting based on the selected ordering
  const applySorting = (tickets) => {
    if (ordering === 'Priority') {
      return tickets.sort(sortByPriority);
    } else if (ordering === 'Title') {
      return tickets.sort(sortByTitle);
    }
    return tickets;
  };

  // Determine which grouping to use
  let categories;
  let groupFunction;
  switch (grouping) {
    case 'User':
      categories = users.map((u) => u.name).sort();
      groupFunction = (userName) => {
        const userId = users.find((u) => u.name === userName)?.id;
        let filteredTickets = tickets.filter(
          (ticket) => ticket.userId === userId
        );
        return applySorting(filteredTickets);
      };
      break;
    case 'Priority':
      categories = getUniqueValues(tickets, 'priority').sort((a, b) => a - b);
      groupFunction = (priorityLevel) => {
        let filteredTickets = tickets.filter(
          (ticket) => ticket.priority === priorityLevel
        );
        return applySorting(filteredTickets);
      };
      break;
    default: // 'Status'
      categories = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
      // groupFunction = ticketsByStatus;
      groupFunction = (status) => {
        let filteredTickets = tickets.filter(
          (ticket) => ticket.status === status
        );
        return applySorting(filteredTickets);
      };
      break;
  }

  return (
    <div className='app'>
      <div className='app_navbar'>
        <div className='dropdown'>
          <button
            className='dropbtn'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Display <ChevronDown size={20} />
          </button>
          {showDropdown && (
            <div className='dropdown-content'>
              <div className='dropdown-section'>
                <span>Grouping </span>
                <div className='select-container'>
                  <select
                    value={grouping}
                    onChange={(e) => setGrouping(e.target.value)}
                  >
                    <option value='Status'>Status</option>
                    <option value='User'>User</option>
                    <option value='Priority'>Priority</option>
                  </select>
                  <ChevronDown className='select-arrow' size={20} />
                </div>
              </div>
              <div className='dropdown-section'>
                <span>Ordering</span>
                <div className='select-container'>
                  <select value={ordering} onChange={handleChangeOrdering}>
                    <option value='Priority'>Priority</option>
                    <option value='Title'>Title</option>
                  </select>
                  <ChevronDown className='select-arrow' size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          {categories.map((category) => (
            <Board
              key={category}
              status={category}
              tickets={groupFunction(category)}
              users={users}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
