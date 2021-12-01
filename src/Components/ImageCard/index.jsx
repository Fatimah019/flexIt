import React from "react";
import "./index.css";

const ImageCard = ({ image_url, name, location }) => {
  return (
    <div className="image-card" style={{ backgroundImage: "url(" + image_url + ")" }}>
      <div className="image-card-content-con">
        <p>{name}</p>
        <div>
          <i className="fa fa-bell"></i>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
