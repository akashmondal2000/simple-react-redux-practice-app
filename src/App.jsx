import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/Shop/Products.jsx";


const App = () => {
  return (
    <Layout>
      <Cart/>
      <Products/>
    </Layout>
  )
}

export default App;