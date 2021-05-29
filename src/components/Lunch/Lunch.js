import React from 'react';
import { Card } from "react-bootstrap";
import './Lunch.css';
import { Link } from 'react-router-dom';

const Lunch = (props) => {
  const {lunchImg,lunchName,lunchPrice,id} = props.foodL
    return (
        <div className="mt-5 lunch team ml-5 mb-4 col-md-4">
        <Link style={{textDecoration:"none",color:"black"}} to={`/foodDetails/${id}`}>
        <Card
          style={{ width: "17rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="lunchBody"
           
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={lunchImg}
            />
            <Card.Title className="mt-3 text-center">
              {lunchName}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "black" }}>$ {lunchPrice}</h4>
            </div>
          </Card.Body>
        </Card>
        </Link>
      </div>
    );
};

export default Lunch;