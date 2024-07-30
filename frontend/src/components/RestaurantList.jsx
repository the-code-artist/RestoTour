import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RestaurantList.scss';

const RestaurantList = ({ restaurants, onPageChange, currentPage, totalPages }) => {
  // Check if restaurants data is available
  const hasRestaurants = restaurants && restaurants.length > 0;

  return (
    <div className="restaurant-list">
      {/* Render restaurant items if data is available */}
      {hasRestaurants ? (
        <>
          {restaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant._id}`} key={restaurant._id} className='resto'>
              <div className="restaurant-item">
                <h3>{restaurant['Restaurant Name']}</h3>
                <p><strong>City:</strong> {restaurant.City}</p>
                <p><strong>Address:</strong> {restaurant.Address}</p>
                <p><strong>Locality:</strong> {restaurant.Locality}</p>
                <p><strong>Aggregate Rating:</strong> {restaurant['Aggregate rating']} ({restaurant['Rating text']})</p>
              </div>
            </Link>
          ))}

          {/* Render pagination controls only if there are restaurant items */}
          <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="no-data">Loading Restaurants Data.....</div>
      )}
    </div>
  );
};

export default RestaurantList;
