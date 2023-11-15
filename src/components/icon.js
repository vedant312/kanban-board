import {
  FaRegCircle,
  FaRegCheckCircle /* other icons */,
} from 'react-icons/fa';
import { TbAlertSquareFilled, TbDots } from 'react-icons/tb';
import { BiSignal1, BiSignal2, BiSignal3 } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

export const statusIcons = {
  Backlog: <FaRegCircle />,
  Todo: <FaRegCheckCircle />,
  'In progress': <FaRegCheckCircle />,
  Done: <FaRegCheckCircle />,
  Closed: <MdCancel />,
};

export const priorityIcons = {
  0: <TbDots />, // No Priority
  'No Priority': <TbDots />,
  1: <BiSignal1 />, // Low
  Low: <BiSignal1 />,
  2: <BiSignal2 />, // Medium
  Medium: <BiSignal2 />,
  3: <BiSignal3 />, // High
  High: <BiSignal3 />,
  4: <TbAlertSquareFilled />, // Urgent
  Urgent: <TbAlertSquareFilled />,
};

export const userIcons = {
  'usr-1': <FaRegCircle />,
  'usr-2': <FaRegCheckCircle />,
  // ... other user ID mappings
};
