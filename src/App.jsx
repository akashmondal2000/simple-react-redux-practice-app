import { useSelector } from "react-redux";

import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/Shop/Products.jsx";

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
