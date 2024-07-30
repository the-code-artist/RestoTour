import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import './styles/App.scss';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<RestaurantListPage />,
    },
    {
      path: "/restaurants/:id",
      element: <RestaurantDetailPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
