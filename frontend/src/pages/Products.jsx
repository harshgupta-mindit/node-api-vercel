import { useEffect, useState } from "react";
import axios from "axios";
import Box from "../components/Box";

const Products = () => {
  const [productData, setProductData] = useState([]);

  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

  const [addProductData, setAddProductData] = useState({});

  const productAddFunc = async () => {
    try {
      await axios.post("https://puzzled-fly-waders.cyclic.cloud/products", {
        name: productName,
        price: productPrice
      });

      alert("Success...");
    } catch (e) {
      alert(e.message);
    }

    setProductName("");
    setProductPrice("");
    getData();
  };
  const getData = async () => {
    const response = await axios.get(
      "https://puzzled-fly-waders.cyclic.cloud/products"
    );
    setProductData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(productData);

  return (
    <>
      <div
        style={{
          backgroundColor: "#321E1E",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px"
        }}
      >
        <div
          style={{
            width: "70%",
            backgroundColor: "#4E3636",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px"
          }}
        >
          <input
            style={{
              padding: "10px",
              margin: "30px",
              outline: "none",
              width: "90%"
            }}
            type="text"
            placeholder="Search for product"
          />

          <div
            style={{
              width: "90%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              overflowY: "scroll"
            }}
          >
            {productData?.map((data, key) => {
              return (
                <Box
                  name={data.name}
                  price={data.price}
                  id={data.id}
                  whichComponent="products"
                  key={key}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "25%",
            backgroundColor: "#4E3636",
            borderRadius: "20px",
            padding: "20px"
          }}
        >
          <p style={{ margin: "30px 10px" }}>Add Product</p>
          <input
            style={{
              width: "90%",
              outline: "none",
              marginBottom: "20px",
              padding: "5px"
            }}
            type="text"
            value={productName}
            placeholder="Product Name"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <input
            style={{
              width: "90%",
              outline: "none",
              marginBottom: "10px",
              padding: "5px"
            }}
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
          <button
            style={{
              width: "90%",
              outline: "none",
              backgroundColor: "#116D6E",
              color: "#fff",
              padding: "10px",
              border: "none"
            }}
            onClick={productAddFunc}
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
