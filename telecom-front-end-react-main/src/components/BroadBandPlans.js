import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PlanCard from "./PlanCard";
import {useNavigate} from "react-router";
import { addToCart } from "../features/cartSlice";


export default function BroadBandPlans() {
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:8004/broadband/all")
      .then((response) => response.json())
      .then((data) => {
        setPlan(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const handleAddToCart = (element)=>{

    dispatch(addToCart(element));
    localStorage.setItem('planName',"Broadband")
    localStorage.setItem('price', element.price)
    localStorage.setItem('validity', element.validity)
    localStorage.setItem('data', element.data)
    navigate("/cart")

  }
  return (
    <div className="container my-3">
      <div className="row">
        {plan.map((element) => {
          return (
            <div className="col-md-4"  key={element.price}>
             <div className="card my-3" style={{width: "20rem"}}>
                <div className="card-body">
                <h2 className="card-title">@ ₹{element.price}</h2>
                <h5 className="card-title">{element.data} GB/day, {element.validity} days validity</h5>
                <p className="card-text"> Enjoy Unlimited Calling with {element.data} GB/day and 100 SMS/day for only {element.price}rs.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(element)} >Buy</button>
              </div>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
