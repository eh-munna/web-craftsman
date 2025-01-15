function Product({ product, onAddToCart }) {
  const { id, name, price, brand } = product;
  return (
    <>
      <div className="border border-gray-200 p-4 rounded-md space-y-4">
        <h3 className="text-xl">{name}</h3>
        <p className="flex justify-between items-center text-lg">
          <span>Brand: {brand}</span>
          <span>Price: {price}</span>
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="border border-gray-200 px-1 rounded-md bg-sky-500 text-white"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
export default Product;
