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
  cuisines: { [s: string]: string };
}
interface RestaurantProps {
  restaurantObj: RestaurantObj;
  onClick: (rest: RestaurantObj) => void;
}

const Restaurant: React.FC<RestaurantProps> = props => {
  const rest = props.restaurantObj;
  return (
    <div className="restaurant-item" onClick={() => props.onClick(rest)}>
      <div className="row">
        <div className="col-sm-8">
          <h4>
            <a href={rest.url} target="_blank" rel="noopener noreferrer">
              {rest.name}
            </a>{" "}
          </h4>
          <div className="cuisines">
            {Object.keys(rest.cuisines).join(", ")}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="reviews">
            <span className="star">★</span>
            <span className="rating">{rest.rating}</span>
            <span className="rating-out-of">/10</span>
            <div className="num-of-reviews">{`${rest.numOfReviews} reviews`}</div>
          </div>
        </div>
      </div>
      <div className="address mt-2">{rest.address}</div>
    </div>
  );
};

export default Restaurant;
