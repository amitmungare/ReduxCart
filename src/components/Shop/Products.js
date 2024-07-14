import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "a1",
    price: 6,
    title: "My First Book",
    description: "This is the first book"
  },
  {
    id: "a2",
    price: 5,
    title: "My sec Book",
    description: "This is the sec book"
  },
  {
    id: "a3",
    price: 8,
    title: "My third Book",
    description: "This is the third book"
  },
  {
    id: "a4",
    price: 4,
    title: "My fourth Book",
    description: "This is the fourth book"
  },
]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
