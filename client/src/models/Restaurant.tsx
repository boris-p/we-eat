import { Cuisine, cuisineAdaptor } from "./Cuisine";

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
  cuisines: Cuisine[];
}
export interface RawRestaurant {
  id: string;
  tenbis_id: string;
  name: string;
  url: string;
  rating: number;
  num_of_reviews: number;
  address: string;
  latitude: string;
  longitude: string;
  delivery_time: number;
  phone: string;
  logo_url: string;
  img_url: string;
  cuisines: Cuisine[];
}
export function restaurantAdaptor(rawRestaurant: RawRestaurant): RestaurantObj {
  return {
    id: rawRestaurant.id,
    tenbisId: rawRestaurant.tenbis_id,
    name: rawRestaurant.name,
    url: rawRestaurant.url,
    rating: rawRestaurant.rating,
    numOfReviews: rawRestaurant.num_of_reviews,
    address: rawRestaurant.address,
    latitude: rawRestaurant.latitude,
    longitude: rawRestaurant.longitude,
    deliveryTime: rawRestaurant.delivery_time,
    phone: rawRestaurant.phone,
    logoUrl: rawRestaurant.logo_url,
    imgUrl: rawRestaurant.img_url,
    cuisines: rawRestaurant.cuisines.map(cuisineAdaptor) || {},
  };
}
