import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { fetchSearchedImages } from "../../store/reducers/imageReducer";
import { useHistory } from "react-router";

const Header = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/?search=${inputVal}`);
    if (inputVal.length < 1) {
      alert("You Must Enter A Search Word");
    } else {
      dispatch(fetchSearchedImages(inputVal));
    }
  };
  return (
    <div className="header">
      <header>
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Find Something"
              className="search-input"
              onChange={handleChange}
              value={inputVal}
            />
            <button type="submit" className="search-send-btn">
              Search
            </button>
          </form>
        </div>

        <div className="header-right">
          <i className="fa fa-bell">
            <span>3</span>
          </i>
          <div className="user">
            <img
              src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
              alt="profile-pic"
            />
            <span></span>
          </div>

          <label>
            Abigail <i className="fa fa-angle-down"></i>
          </label>
        </div>
      </header>
    </div>
  );
};
export default Header;
