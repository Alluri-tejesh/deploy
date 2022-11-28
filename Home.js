import React from "react";
import "./homestyle.css";
import { useState } from "react";
import NumberScroller from "number-scroller";
const Home = () => {
  const [expe, setExpe] = useState(30);
  const [customer, seTcustomer] = useState(10000);
  const [store, setstore] = useState(250);
  const [products, setproducts] = useState(10);

  

  return (
    <div>
      <div className="content1">
        <div className="content1_sub1">
          <div className="content1_text"> Trust us in </div>
          <div className="scroller">
            <span>
              hello <br></br>
              world <br></br>
              tejesh <br></br>
            </span>
          </div>
        </div>

        <div className="content1_sub2">
          <div className="content1_products_box">
            <p>Products</p>
          </div>
          <div className="content1_products_box">Buy/Sell</div>
          <div className="content1_products_box1">Find a store</div>
          <div className=""></div>
        </div>
      </div>
      <div className="content2">
        <div className="content2_numbers">
          <p>
            <NumberScroller to={expe} timeout={1000} />+
          </p>
          <p>Experience</p>
        </div>
        <div className="content2_numbers">
          <p>
            <NumberScroller to={customer} timeout={300000} step={500} />+
          </p>
          <p>Customers</p>
        </div>
        <div className="content2_numbers">
          <p>
            <NumberScroller to={store} timeout={1000} />+
          </p>
          <p>Store</p>
        </div>
        <div className="content2_numbers">
          <p>
            <NumberScroller to={products} timeout={1000} />+
          </p>
          <p>Products</p>
        </div>
      </div>

      <div className="content3">



      </div>
    </div>
  );
};

export default Home;
