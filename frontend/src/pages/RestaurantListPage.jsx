import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import RestaurantList from '../components/RestaurantList';
import '../styles/RestaurantList.scss';
import Navbar from "../components/Navbar"

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 956;

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axiosInstance.get(`/restaurants/?page=${page}`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="restaurant-list-page">
      <Navbar />
      <RestaurantList 
        restaurants={restaurants} 
        onPageChange={handlePageChange}
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default RestaurantListPage;
