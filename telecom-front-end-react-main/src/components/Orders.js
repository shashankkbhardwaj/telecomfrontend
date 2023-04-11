import React, { useState, useEffect } from "react";
import OrderPlan from "./OrderPlan";
import PlanCard from "./PlanCard";


const Orders = () => {

    const [plan, setPlan] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      setLoading(true);
      fetch(`http://localhost:8010/regplan/all/${localStorage.getItem('username')}`)
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
  return (
    <div className="container my-3">
            <legend>Your active and expired Plans:</legend>
      <div className="row"></div>
    {plan.map((element) => {
        return (
          <div className="col-md-4"  key={element.id}>
            <OrderPlan activation={element.activationDate} expiration={element.expirationDate} price={element.price} 
            validity={element.validity} 
            data={element.data} />
          </div>
        );
      })}
      </div>
  )
}

export default Orders
