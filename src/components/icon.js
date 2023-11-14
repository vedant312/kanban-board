// src/utils/icons.js
import { FaRegCircle, FaRegCheckCircle, /* other icons */ } from 'react-icons/fa';

export const statusIcons = {
  'Backlog': <FaRegCircle />,
  'Todo': <FaRegCheckCircle />,
  // ... other status mappings
};

export const priorityIcons = {
  0: <FaRegCircle />, // No Priority
  1: <FaRegCheckCircle />, // Low
  // ... other priority mappings
};

export const userIcons = {
  'usr-1': <FaRegCircle />,
  'usr-2': <FaRegCheckCircle />,
  // ... other user ID mappings
};
