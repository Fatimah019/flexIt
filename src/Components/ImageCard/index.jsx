import React from "react";
import "./index.css";

const ImageCard = ({ image_url, name, location, number_likes }) => {
  return (
    <div className="image-card" style={{ backgroundImage: "url(" + image_url + ")" }}>
      <div className="image-card-content-con">
        <p>
          {name}, {number_likes}
        </p>
        <div className="location-con">
          <i className="fa fa-map-marker"></i>, <span className="user-location">{location || "Planet Earth"} </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
