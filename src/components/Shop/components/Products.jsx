import Item from "./Item";
import styles from "./Products.module.css";
import PropTypes from "prop-types";
Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default function Products({ products, setProducts }) {
  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <Item product={item} setProducts={setProducts} key={item.id} />
      ))}
    </div>
  );
}
