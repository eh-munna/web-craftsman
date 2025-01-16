import { useNavigate } from 'react-router';

function Product({ product, onAddToCart }) {
  const { id, name, price, brand } = product;
  const navigate = useNavigate();

  const onNavigate = (productId) => {
    // navigate to product detail page with productId
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className="flex flex-col border border-gray-200 p-4 rounded-md space-y-4">
        <div className="flex-grow">
          <h3 className="text-xl">{name}</h3>
          <p className="flex justify-between items-center text-lg">
            <span>Brand: {brand}</span>
            <span>Price: {price}</span>
          </p>
        </div>

        <div className="flex space-x-2 mt-auto">
          <button
            onClick={() => onAddToCart(product)}
            className="border border-gray-200 px-1 rounded-md bg-sky-500 text-white"
          >
            Add To Cart
          </button>

          {/* <Link
            className="border border-gray-200 px-1 rounded-md bg-sky-500 text-white"
            to={`/product/${id}`}
          >
            See Details
          </Link> */}

          <button
            onClick={() => onNavigate(id)}
            className="border border-gray-200 px-1 rounded-md bg-sky-500 text-white"
          >
            See Details
          </button>
        </div>
      </div>
    </>
  );
}
export default Product;
