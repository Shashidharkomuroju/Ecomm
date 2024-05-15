import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Groceries.css";
import { useCart } from "../Context/CartContext";
import Footer from "../Components/Footer/Footer"

const Groceries = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const { addToCart, cartItem } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({
          key,
          value,
        }));
        setData(dataArray[0].value[number]);
        //console.log(dataArray[0]) // array[0] means data of products and 1 for reviews
        // console.log(dataArray[0].value[number]) // number indicates ProductList(G,E,F)
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };
    fetchData();
  }, [number]);
  //   console.log(data)
  Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key, value]) => {
      console.log(value);
      // Value gives the data list of "G"
      //value.cat_name gives the only list of "G"
    });
  });
  return (
    <>
      <Navbar />
      <div className="groceries">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="list">
            <h1>{key == "cat_name" && value}</h1>
            {Object.entries(value).map(([key, value]) => (
              <>
                {/* <h4>{value.cat_name}</h4> */}
                <div className="groceries-list">
                  {value.products &&
                    value.products.map((item) => (
                      <div className="list-items">
                        <img src={item.catImg} alt="" />
                        <h4>{item.productName}</h4>
                        <p>{item.description}</p>
                        {/* <h4>Rating : {item.rating}</h4> */}
                        <button onClick={() => addToCart(item)}>
                          Add to Cart
                        </button>
                      </div>
                    ))}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Groceries;
