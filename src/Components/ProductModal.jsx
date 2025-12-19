const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full text-xl transition-colors"
        >
          ✕
        </button>

        {/* Product Image */}
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm mb-2">
                {product.category || 'SUPPLEMENT'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
            </div>
            <div className="text-3xl font-bold text-red-500">{product.price}</div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-300">{product.details}</p>
          </div>

          {/* Benefits */}
          {product.benefits && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Flavor */}
          {product.flavor && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Flavor</h3>
              <span className="px-4 py-2 bg-gray-800 rounded-lg">
                {product.flavor}
              </span>
            </div>
          )}

          {/* Payment Warning */}
          <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg mb-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <h4 className="font-bold">Important Payment Information</h4>
                <p className="text-sm text-gray-300">
                  This product can only be purchased at the gym reception. 
                  <span className="text-red-400 font-semibold"> Cash payment is required.</span>
                  Please bring your membership card for discount.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onAddToCart}
              className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300"
            >
              Add to Cart (Gym Pickup)
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal