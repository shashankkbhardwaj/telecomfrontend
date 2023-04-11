import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import React from 'react'
import PlanCard from "./PlanCard";
import {useNavigate} from "react-router";
import { addToCart } from "../features/cartSlice";



const MobilePlans = () => {
  const dispatch = useDispatch();
  const {data,error, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();

  const handleAddToCart = (element)=>{

    dispatch(addToCart(element));
    localStorage.setItem('planName',"Mobile")
    localStorage.setItem('price',element.price)
    localStorage.setItem('validity',element.validity)
    localStorage.setItem('data',element.data)
    navigate("/cart")

  }

  return (
    <div className="container my-3">
      <div className="row">
      {isLoading?<p>Loading please wait...</p>: error ? 
    <p> An error occured...</p>:(
        data?.map((element) => {
          return (
            <div className="col-md-4"  key={element.id}>
              <div className="card my-3" style={{width: "20rem"}}>
                <div className="card-body">
                <h2 className="card-title">@ ₹{element.price}</h2>
                <h5 className="card-title">{element.data} GB/day, {element.validity} days validity</h5>
                <p className="card-text"> Enjoy Unlimited Calling with {element.data} GB/day and 100 SMS/day for only {element.price}rs.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(element)} >Recharge</button>
              </div>
             </div>
            </div>
          );
        }))}
      
      </div>
    </div>
  );
}
export default MobilePlans


