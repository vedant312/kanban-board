import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Board from '../components/Board';
import { ChevronDown } from 'react-feather';

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [showDropdown, setShowDropdown] = useState(false);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'Status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'Priority');

  useEffect(() => {
    // Save the current grouping and sorting preferences to localStorage
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleChangeOrdering = (e) => setOrdering(e?.target?.value);

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
          <Board
            tickets={data.tickets}
            users={data.users}
            grouping={grouping}
            sorting={ordering}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
