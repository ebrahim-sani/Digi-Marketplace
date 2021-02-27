import React from "react";
import Header from "./Header";
import ProductList from "./inner-component/ProductList";
import "./AdProduct.css";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import Form from "../lib/Form";
import { Button } from "@material-ui/core";
import { enabled } from "../features/formSlice";

function AddProduct() {
  const dispatch = useDispatch();
  return (
    <div
      className="addProduct"
      style={{
        background: "#fff",
        height: "100vh",
      }}
    >
      <div className="form__component">
        <Header />
        <Form />
        <Button
          style={{
            textTransform: "none",
            color: "white",
            position: "fixed",
            top: "96px",
            left: "100px",
          }}
          variant="contained"
          color="primary"
          onClick={() => dispatch(enabled())}
        >
          Add Product
        </Button>
      </div>
      <div className="productComponent">
        <ProductList
          img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
          title="Security Software with Top Grade Security Standards"
          desc="lorem topm lfess joplin aee and leeaddf jtuo naalo na vaae joplin aee and leeaddf jtuo naalo na vaae "
        />
        <ProductList
          img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
          title="Security Software with Top Grade Security Standards"
          desc="lorem topm lfess joplin aee and leeaddf jtuo naalo na vaae joplin aee and leeaddf jtuo naalo na vaae "
        />
        <ProductList
          img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
          title="Security Software with Top Grade Security Standards"
          desc="lorem topm lfess joplin aee and leeaddf jtuo naalo na vaae joplin aee and leeaddf jtuo naalo na vaae "
        />
        <ProductList
          img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
          title="Security Software with Top Grade Security Standards"
          desc="lorem topm lfess joplin aee and leeaddf jtuo naalo na vaae joplin aee and leeaddf jtuo naalo na vaae "
        />
        <ProductList
          img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
          title="Security Software with Top Grade Security Standards"
          desc="lorem topm lfess joplin aee and leeaddf jtuo naalo na vaae joplin aee and leeaddf jtuo naalo na vaae "
        />
      </div>
      <Footer />
    </div>
  );
}

export default AddProduct;
