import React from "react";
import "./Restaurant.css";

export interface RestaurantObj {
  id: string;
  tenbisId: string;
  name: string;
  url: string;
  rating: number;
  numOfReviews: number;
  address: string;
  latitude: string;
  longitude: string;
  deliveryTime: number;
  phone: string;
  logoUrl: string;
  imgUrl: string;
}
interface RestaurantProps {
  restaurantObj: RestaurantObj;
  onClick: (rest: RestaurantObj) => void;
}

const Restaurant = (props: RestaurantProps) => {
  const rest = props.restaurantObj;
  return (
    <div className="restaurant-item" onClick={() => props.onClick(rest)}>
      <h4>
        <a href={rest.url} target="_blank" rel="noopener noreferrer">
          {rest.name}
        </a>{" "}
      </h4>
      <div>
        <img src={rest.logoUrl} alt="" />
        <div className="address">{rest.address}</div>
        <div className="reviews">
          <div>
            <span className="star">★</span> {`${rest.rating}/10`}
          </div>
          <div>{`${rest.numOfReviews} reviews`}</div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
