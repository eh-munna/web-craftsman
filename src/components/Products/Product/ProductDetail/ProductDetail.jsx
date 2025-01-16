import { useLoaderData, useNavigate } from 'react-router';

function ProductDetail() {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { name, price, brand, stock } = product;

  const onBack = () => {
    // navigate to previous page
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col border border-gray-200 p-4 rounded-md space-y-4">
        <h3 className="text-xl">{name}</h3>
        <p className="text-lg">Brand: {brand}</p>
        <p className="text-lg">Price: {price}</p>
        <p className="text-lg">Brand: {brand}</p>
        <p className="text-lg">Stock: {stock}</p>
        <button
          onClick={onBack}
          className="w-20 border border-gray-200 px-1 rounded-md bg-sky-500 text-white"
        >
          Go back
        </button>
      </div>
    </>
  );
}
export default ProductDetail;
