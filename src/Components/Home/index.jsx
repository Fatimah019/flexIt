import React, { useEffect } from "react";
import "./index.css";
import SelectTabs from "../SelectTabs";
import ImageCard from "../ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, getImages } from "../../store/reducers/imageReducer";
import Loader from "../Loader";

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
    const fetchAllImages = () => dispatch(fetchImages(1, 20));
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
        <Loader visible={images.loading} />
        {images?.images?.map((item) => {
          return (
            <a href={item.urls.full} key={item.id}>
              <ImageCard
                image_url={item?.user?.profile_image?.large}
                name={item?.user?.name}
                location={item?.user?.location}
                number_likes={item?.likes}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
