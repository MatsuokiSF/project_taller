// src/components/Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-center bg-gray-800 text-white p-4">
      <NavLink
        to={ROUTES.HOME_PATH}
        className={({ isActive }) =>
          `px-4 py-2 mx-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-600'}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.GRAPH_PATH}
        className={({ isActive }) =>
          `px-4 py-2 mx-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-600'}`
        }
      >
        Graph
      </NavLink>
      <NavLink
        to={ROUTES.UPLOAD_PAGE_PATH}
        className={({ isActive }) =>
          `px-4 py-2 mx-2 rounded ${isActive ? 'bg-blue-500' : 'hover:bg-gray-600'}`
        }
      >
        Upload Page
      </NavLink>
    </nav>
  );
};

export default Navigation;
