import React, { useEffect } from "react";
import "./index.css";
import SelectTabs from "../SelectTabs";
import ImageCard from "../ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, getImages } from "../../store/reducers/imageReducer";
import NotificationContainer from "../NotificatonContainer";

const optionTabs = [
  {
    name: "World",
    action: () => console.log("hey"),
  },
  {
    name: "Following",
    action: () => console.log("hey"),
  },
  {
    name: "Popular",
    action: () => console.log("hey"),
  },
  {
    name: "Post",
    action: () => console.log("hey"),
  },
  {
    name: "Gender",
    action: () => console.log("hey"),
  },
  {
    name: "Location",
    action: () => console.log("hey"),
  },
  {
    name: "Profession",
    action: () => console.log("hey"),
  },
  {
    name: "Location",
    action: () => console.log("hey"),
  },
  {
    name: "Profession",
    action: () => console.log("hey"),
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);

  useEffect(() => {
    const fetchAllImages = () => dispatch(fetchImages());
    fetchAllImages();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="option-tabs">
        {optionTabs.map((tab, index) => {
          return (
            <div key={index}>
              <SelectTabs name={tab.name} action={tab.action} />
            </div>
          );
        })}
      </div>
      <div className="image-container">
        {images?.map((item) => {
          return (
            <div key={item.id}>
              <ImageCard
                image_url={item?.user?.profile_image.large}
                name={item.user.name}
                location={item.total_photos}
              />
            </div>
          );
        })}
      </div>
      <div className="notifications">
        <NotificationContainer />
      </div>
    </div>
  );
};

export default Home;
