function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-black text-white p-5 rounded-lg cursor-pointer hover:border-red-600 border border-transparent"
    >
      <img src={product.image} className="w-full h-48 object-contain" />
      <h3 className="mt-4 font-bold">{product.name}</h3>
      <p className="text-red-500">{product.price}</p>
    </div>
  );
}

export default ProductCard;
