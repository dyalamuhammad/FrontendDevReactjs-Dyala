// src/components/DetailView.js
import React from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Card } from "react-bootstrap";

const DetailView = ({ restaurants }) => { // Ganti 'restaurant' menjadi 'restaurants'
  const { id } = useParams();
  const restaurant = restaurants.find((_) => _.id === id);
  
  if (!restaurant) {
    return <div>Data not found.</div>;
  }
  return (
    <div className="detail-view">
      <Card.Img src={restaurant.picture} className="imgResto"/>
      <h2>{restaurant.name}</h2>
      <h5>Harga : {restaurant.price}</h5>
      <p>Rating: {restaurant.rating} stars</p>
      <p>Description: {restaurant.description}</p>
    </div>
  );
};

export default DetailView;
