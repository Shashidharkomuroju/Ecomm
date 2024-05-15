import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
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
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="landing-page">
        <div className="buttons">
          <button onClick={() => setNumber(0)}>Groceries</button>
          <button onClick={() => setNumber(1)}>Electronics</button>
          <button onClick={() => setNumber(2)}>Fashion</button>
        </div>
        {/* {Object.entries(data).map(([key, value]) => (
        <div key={key} className="slider">
          <h1>{key == "cat_name" && value}</h1>
          {Object.entries(value).map(([key, value]) => (
            <div className="img-slider">
              <h4>{value.cart_name}</h4>
              {value.products &&
                value.products.map((item) => (
                  <Slider {...settings}>
                    <div className="img-list">
                      <img src={item.catImg} alt="" />
                    </div>
                   </Slider>
                ))}
            </div>
          ))}
        </div>
      ))} */}

        {Object.entries(data).map(([key, value]) => (
          <div className="page-slider">
            <Slider {...settings}>
              {Object.entries(value).map(
                ([key, value]) =>
                  value.products &&
                  value.products.map((item) => (
                    <div className="slider">
                      <div className="img-slider">
                        <img src={item.catImg} alt="" />
                      </div>
                    </div>
                  ))
              )}
            </Slider>
          </div>
        ))}
      </div>
    </>
  );
};
export default LandingPage;
