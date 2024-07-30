import React from 'react';
import '../styles/RestaurantDetailList.scss';

const RestaurantDetail = ({ restaurant }) => {
  if (!restaurant) return <div>Loading...</div>;

  const restaurantArray = [restaurant]; // Convert the single restaurant object into an array
  const colorMapping={
    "Dark Green":"darkgreen",
    "Green":"green",
    "Yellow":"yellow",
    "Orange":"orange",
    "White":"white",
    "Red":"red",
    
  }
  /*
  1	India
14	Australia
30	Brazil
37	Canada
94	Indonesia
148	New Zealand
162	Phillipines
166	Qatar
184	Singapore
189	South Africa
191	Sri Lanka
208	Turkey
214	UAE
215	United Kingdom
216	United States
*/
  const countryMapping={
    1	:"India",
    14:	"Australia",
    30:	"Brazil",
    37:	"Canada",
    94:	"Indonesia",
    148:	"New Zealand",
    162	:"Phillipines",
    166	:"Qatar",
    184:	"Singapore",
    189	:"South Africa",
    191:	"Sri Lanka",
    208	:"Turkey",
    214	:"UAE",
    215	:"United Kingdom",
    216	:"United States"
  }
  const ratingColor = colorMapping[restaurant['Rating color']] || 'black';
  const country = countryMapping[restaurant['Country Code']] || 0;
  return (
    <div className="restaurant-list">
      {restaurantArray.map((restaurant) => (
        <div className="restaurant-item" key={restaurant._id}>
          <h3>{restaurant['Restaurant Name']}</h3>
          <p><strong>Country:</strong> {country}</p>
          <p><strong>City:</strong> {restaurant.City}</p>
          <p><strong>Address:</strong> {restaurant.Address}</p>
          <p><strong>Locality:</strong> {restaurant.Locality}</p>
          <p><strong>Locality Verbose:</strong> {restaurant['Locality Verbose']}</p>
          <p><strong>Longitude:</strong> {restaurant.Longitude}</p>
          <p><strong>Latitude:</strong> {restaurant.Latitude}</p>
          <p><strong>Cuisines:</strong> {restaurant.Cuisines}</p>
          <p><strong>Average Cost for Two:</strong> {restaurant['Average Cost for two']} {restaurant.Currency}</p>
          <p><strong>Has Table Booking:</strong> {restaurant['Has Table Booking'] ? 'Yes' : 'No'}</p>
          <p><strong>Has Online Delivery:</strong> {restaurant['Has Online delivery'] ? 'Yes' : 'No'}</p>
          <p><strong>Is Delivering Now:</strong> {restaurant['Is delivering now'] ? 'Yes' : 'No'}</p>
          <p><strong>Switch to Order Menu:</strong> {restaurant['Switch to order menu']}</p>
          <p><strong>Price Range:</strong> {restaurant['Price range']}</p>
          <p style={{color:ratingColor}}>
            <strong>Aggregate Rating:</strong> {restaurant['Aggregate rating']} ({restaurant['Rating text']})
          </p>
          <p><strong>Votes:</strong> {restaurant.Votes}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;
