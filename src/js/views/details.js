import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useLocation, useParams } from "react-router-dom";
import "../../styles/home.css";

export const Details = () => {
    const location= useLocation();
    const {type, id} = useParams();
    const [details, setDetails] = useState(null);
    useEffect(()=>{

        

        console.log(location.pathname)
    },[]
    );
    return (
        <div className="container">
            <Link to={"/home"}>
                <button>Home</button>
            </Link>
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="" className="img-fluid rounded-start"  />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    );
};