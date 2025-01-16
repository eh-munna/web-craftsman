import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { addToLocalStorage, getItem } from '../../utils/storeInLocalStorage';
import Cart from '../Cart/Cart';
import Product from './Product/Product';

function Products() {
  // const [products, setProducts] = useState([]);
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('/data.json');
  //     const data = await response.json();
  //     setProducts(data);
  //   })();
  // }, []);

  useEffect(() => {
    const storedProductIds = getItem();
    const storedProducts = [];
    if (storedProductIds) {
      for (const productId of storedProductIds) {
        const existedProducts = products.find(
          (product) => product.id === productId
        );
        if (existedProducts) storedProducts.push(existedProducts);
      }
      setCart(storedProducts);
    }
  }, [products]);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     const productIds = cart.map((product) => product.id);
  //     setItem(productIds);
  //   }
  // }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevProducts;
      }

      return [...prevProducts, product];
    });
    addToLocalStorage(product.id);
  };

  return (
    <>
      <h1 className="text-3xl font-bold my-6">
        Loading Products and data integration
      </h1>

      <p>Number of products: {products.length}</p>

      <div className="grid grid-cols-9 gap-6 pt-10">
        <div className="col-span-6 p-4">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 border border-sky-300 p-4">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
}
export default Products;
