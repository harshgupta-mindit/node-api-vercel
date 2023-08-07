import axios from "axios";

const Box = ({ name, price, id, whichComponent, quantity }) => {
  const productDeleteFunc = () => {
    axios
      .delete(`https://puzzled-fly-waders.cyclic.cloud/products/${id}`)
      .then(() => {
        alert("Product Delete Success !!!");
      })
      .catch((err) => {
        alert("An error occcred !");
      });
  };

  const productAddToOrder = () => {
    axios
      .post("https://puzzled-fly-waders.cyclic.cloud/orders", {
        name: name,
        price: price,
        quantity: 1
      })
      .then((data) => {
        alert("Added to orders !");
        console.log(data);
      })
      .catch((err) => {
        alert("an error ocurred !");
        console.log(err);
      });
  };

  const deleteFromOrder = () => {
    console.log(id);
    axios
      .delete(`https://puzzled-fly-waders.cyclic.cloud/orders/${id}`)
      .then((data) => {
        console.log("deleteFromOrder", data);
        alert("Order deleted success");
      })
      .catch((err) => {
        console.log("deleteFromOrder", err);
        alert("An error ocurred !");
      });
  };

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #321E1E",
        padding: "5px",
        textAlign: "center",
        margin: "20px"
      }}
    >
      <p style={{ marginBottom: "20px" }}>Name: {name}</p>
      <i>Price: {price}</i>
      <br />
      <i>Quantity: {quantity}</i>

      <div style={{ width: "100%" }}>
        {whichComponent === "products" && (
          <button
            style={{
              width: "50%",
              padding: "5px",
              margin: "5px 0",
              backgroundColor: "#3b5998",
              border: "none"
            }}
          >
            Edit
          </button>
        )}
        {whichComponent === "products" && (
          <button
            style={{
              width: "50%",
              padding: "5px",
              margin: "5px 0",
              backgroundColor: "#e43b3b",
              border: "none"
            }}
            onClick={productDeleteFunc}
          >
            Delete
          </button>
        )}

        {whichComponent === "home" && (
          <button
            style={{
              width: "50%",
              padding: "5px",
              margin: "5px 0",
              backgroundColor: "#116D6E",
              border: "none"
            }}
            onClick={productAddToOrder}
          >
            Add to orders
          </button>
        )}

        {whichComponent === "order" && (
          <button
            style={{
              width: "50%",
              padding: "5px",
              margin: "5px 0",
              backgroundColor: "#CD1818",
              border: "none"
            }}
            onClick={deleteFromOrder}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Box;
