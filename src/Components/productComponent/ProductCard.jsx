
function ProductCard({ product, onClick }) {
  return (
<div 
    key={product.id}
    onClick={onClick}
    className="group bg-neutral-900 rounded-xl p-6 border border-neutral-600 hover:border-red-500 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
  >
    {/* img */}
    <div className="h-80 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-black">
      <img 
        src={product.image} 
        alt={product.name}
        className="max-h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    {/* name */}
    <h3 className="text-lg font-semibold text-white">
      {product.name}
    </h3>

    {/* product shortdescription */}
    <p className="text-sm text-gray-400 mt-1">
      {product.shortDesc}
    </p>

    {/* price */}
    <div className="mt-2 text-xl font-bold text-red-600">
      {product.price}
    </div>
  </div>
  );
}
export default ProductCard;