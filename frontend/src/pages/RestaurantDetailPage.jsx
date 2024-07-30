import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import { useParams } from 'react-router-dom';
import RestaurantDetail from '../components/RestaurantDetail';
import '../styles/RestaurantDetail.scss';
import Navbar from "../components/Navbar"

const RestaurantDetailPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams(); // Extract id from URL params
  const restaurantId = decodeURIComponent(id); // Decode URL-encoded ID

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axiosInstance.get(`/restaurants/${restaurantId}`);
        console.log('API Response:', response.data); // Debugging statement
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };
    fetchRestaurant();
  }, [restaurantId]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="restaurant-detail-page">
      <Navbar />
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
};

export default RestaurantDetailPage;
  


