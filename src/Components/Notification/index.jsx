import React from "react";
import "./index.css";

export const Notification = ({ name, user_img, message, action, time, emotion_icon, icon_color }) => {
  return (
    <div className="notification-card">
      <div className="left">
        <img src={user_img} alt="user-img" />
        <div>
          <p>
            {name} {message} {action}
          </p>
          <p className="time">About {time} minutes ago</p>
        </div>
      </div>
      <div className="right">
        <i className={emotion_icon} style={{ color: icon_color }}></i>
      </div>
    </div>
  );
};

export default Notification;
