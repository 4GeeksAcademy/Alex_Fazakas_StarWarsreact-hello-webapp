import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  const handleLike = () => {
    props.onLike(props.name);
  };

  return (
    <div className="text-center m-2">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-start p-2">{props.name}</h5>
            <div className="d-flex justify-content-around">
              <Link to="/details">
                <button className="btn btn-primary">Learn More</button>
              </Link>
              <button className="btn btn-success" onClick={handleLike}>
              <i className="fa-solid fa-heart"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
