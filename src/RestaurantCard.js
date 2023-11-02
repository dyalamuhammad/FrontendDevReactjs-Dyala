// src/components/RestaurantCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CardBody } from "react-bootstrap";


const RestaurantCard = ({ restaurants, setRestaurants }) => {
  // const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleRestaurants, setVisibleRestaurants] = useState(3);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://api.kontenbase.com/query/api/v1/bff65377-efbd-44b4-9b0b-2b5bf71350ab/Restaurants?$lookup=*&$limit=5&$skip=0');
        const restaurantData = response.data.map((data) => ({
          name: data.name,
          rating: data.rating,
          picture: data.url,
          categories: data.categories[0].name,
          price: data.price,
          open: data.isopen,
          id: data._id,
        }));
        setRestaurants(restaurantData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const handleLoadMore = () => {
    // Tambahkan 8 lagi ke jumlah data yang ditampilkan
    setVisibleRestaurants(visibleRestaurants + 8);
  };
  const getStatusText = (open) => (open ? 'Buka' : 'Tutup');
  const printDollar = (price) => (
    '$'.repeat(price)
  )
  const printStar = (rating) => (
    '★'.repeat(rating)
  )
  return (
    <div className="restaurant-container" >
      {loading ? (
        <p>Loading...</p>
      ) : (
        restaurants.slice(0, visibleRestaurants).map((restaurant, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={restaurant.picture} className="imgResto"/>
            <Card.Body className="restaurant-card">
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text className="text-primary">{printStar(restaurant.rating)}</Card.Text>
              <Card.Text>{restaurant.categories} • {printDollar(restaurant.price)}</Card.Text>
              <Card.Text>{getStatusText(restaurant.open)}</Card.Text>
              <CardBody className="text-center">
                <Link className="text-center" to={`/detail/${restaurant.id}`}><Button className='bg-primary px-5'>Learn More</Button></Link>

              </CardBody>
              {/* <Button variant="dark">Learn More</Button> */}
            </Card.Body>
          </Card>
          //   <div className="restaurant-card" key={index}>
          //     <img className='imgResto' src={restaurant.picture} alt="Restaurant" />
          //     <h2 className='namaResto'>{restaurant.name}</h2>
          //     <p className='ratingResto'>Rating: {restaurant.rating} stars</p>
          //     <Button type="submit">Learn more</Button>{' '}
          //   </div>
        ))
      )}
       {visibleRestaurants < restaurants.length && (
        <div className="btn_load mb-5">
            
            <Button variant="outline-dark" onClick={handleLoadMore} className="px-5">Load More</Button>
        </div>

      )}
    </div>
  );
};

export default RestaurantCard;
