import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#116D6E",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center"
        }}
      >
        <h1>Rest API Test</h1>

        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to="/">
            <li
              style={{
                padding: "5px 10px",
                border: "1px solid #321E1E",
                marginRight: "10px",
                borderRadius: "10px"
              }}
            >
              Home
            </li>
          </Link>

          <Link to="/products">
            <li
              style={{
                padding: "5px 10px",
                border: "1px solid #321E1E",
                marginRight: "10px",
                borderRadius: "10px"
              }}
            >
              Products
            </li>
          </Link>

          <Link to="/order">
            <li
              style={{
                padding: "5px 10px",
                border: "1px solid #321E1E",
                marginRight: "10px",
                borderRadius: "10px"
              }}
            >
              Order
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
