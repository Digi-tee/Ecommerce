import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Payment from "./Pages/Payment";
import Cart from "./Pages/Cart";
// import User from "./Pages/User";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Cart" element={<Cart /> } />
        {/* <Route path="/User" element={<User /> } /> */}
      </Routes>
    </>
  );
}

export default App;
