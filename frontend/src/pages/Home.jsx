import { useEffect, useState } from "react";
import axios from "axios";
import Box from "../components/Box";

const Home = () => {
  const [productData, setProductData] = useState();

  const getData = async () => {
    const response = await axios.get(
      "https://puzzled-fly-waders.cyclic.cloud/products"
    );
    setProductData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
            width: "80%",
            height: "100%",
            backgroundColor: "#4E3636",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            margin: "auto"
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
              display: "flex",
              flexWrap: "wrap",
              overflowY: "scroll"
            }}
          >
            {productData
              ? productData?.map((data, key) => {
                  return (
                    <Box
                      name={data.name}
                      price={data.price}
                      whichComponent="home"
                      key={key}
                    />
                  );
                })
              : "loading..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
