import React from "react";
import Notification from "../Notification";

const notificationMessages = [
  {
    message: "liked You!",
    name: "Micheal",
    time: "20",
    icon: "fa fa-heart",
    color: "#acacac",
    user_img: "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
  },
  {
    message: "liked You!",
    name: "Jack",
    time: "20",
    icon: "fa fa-heart",
    color: "red",
    user_img: "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
  },
  {
    message: "commented on your photo!",
    name: "Martin",
    time: "20",
    icon: "fa fa-envelope",
    color: "var(--secondary-color)",
    user_img: "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
  },
];
const NotificationContainer = () => {
  return (
    <>
      {notificationMessages.map((message, index) => {
        return (
          <div key={index}>
            <Notification
              user_img={message.user_img}
              name={message.name}
              message={message.message}
              time={message.time}
              emotion_icon={message.icon}
              icon_color={message.color}
            />
          </div>
        );
      })}
    </>
  );
};

export default NotificationContainer;
