import styles from "./Products.module.css";
import ProductItem from "./ProductItem.jsx";

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
