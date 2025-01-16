export default async function dataLoader({ params }) {
  const response = await fetch(`/data.json`);
  const data = await response.json();
  const product = data.find((product) => product.id === parseInt(params.id));
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}
