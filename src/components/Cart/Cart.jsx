function Cart({ cart }) {
  return (
    <>
      <h2 className="text-lg font-bold">Cart</h2>
      <ul className="">
        {cart.map((product) => {
          const { id, name, price } = product;
          return (
            <li
              className=" flex justify-between items-center border border-b-blue-300 border-t-0 border-l-0 border-r-0 pt-2"
              key={product.id}
            >
              <span>{name}</span>
              <span>${price}</span>
            </li>
          );
        })}
      </ul>
      {/* <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p> */}
    </>
  );
}
export default Cart;
