const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-[#242424] border border-white/10 rounded-xl shadow-2xl text-white/90">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-2xl font-bold uppercase">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

          {/* Left - Image */}
          <div className="flex items-center justify-center bg-black rounded-lg p-6 border border-white/10">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover max-h-80"
            />
          </div>

          {/* Right - Info */}
         <div className="flex flex-col gap-4">

            {/* Category */}
            <span className="inline-block w-fit px-3 py-1 bg-red-600 text-sm font-semibold rounded">
              Performance
            </span>

            {/* Price */}
            <div className="text-3xl font-bold text-red-500">
              {product.price}
            </div>

            {/* Description */}
           <p className="text-sm text-gray-300">
           {product.description}
           </p>

            {/* Benefits */}
            <div>
            <h3 className="font-semibold mb-2">KEY BENEFITS</h3>
            <ul className="space-y-2 text-sm text-white/80">
            {product.benefits?.map((benefit, index) => (
              <li key={index}> • {benefit}</li>
            ))}
             </ul>
           </div>

             {/* Usage Box */}
            <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-4">
             <h4 className="font-semibold mb-1">USAGE</h4>
               <p className="text-sm text-gray-300">
             {product.usage}
               </p>
            </div>


            {/* Button */}
            <button
           onClick={() => {
              window.open(
                "https://wa.me/972569096285?text=Hello%20I%20want%20to%20check%20availability%20of%20this%20product:%20%20" +
                encodeURIComponent(product.name),
                  
                "_blank"
             )
             }}
           className="mt-4 w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-lg transition"
          > 
           ORDER VIA WHATSAPP
           </button>

            {/* Cash Note */}
            <p className="text-xs text-gray-400 text-center">
              Payment available at gym reception only (Cash)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
