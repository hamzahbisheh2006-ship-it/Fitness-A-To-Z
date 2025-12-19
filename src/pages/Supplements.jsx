import { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import ProductModal from '../Components/ProductModal'

const SupplementsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    console.log('Cart updated:', cartItems)
  }, [cartItems])


  const productsData = {
    featured: [
      { id: 1, name: "Premium Protein", price: "550.00 AED", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400" },
      { id: 2, name: "Mass Gainer", price: "520.00 AED", image: "https://informatecdigital.com/wp-content/uploads/2025/05/que-es-Replit-AI-0-scaled.webp" },
      { id: 3, name: "Fat Burner", price: "544.00 AED", image: "https://images.unsplash.com/photo-1594737626072-90d27432f62a?w=400" },
      { id: 4, name: "Recovery Blend", price: "534.00 AED", image: "https://images.unsplash.com/photo-1621430166325-5e54dac6c4f3?w=400" }
    ],
    supplements: [
      {
        id: 5,
        name: "ISOLATE WHEY PROTEIN",
        category: "MUSCLE BUILDING",
        price: "524.00 AED",
        description: "Fast Absorption - 25g Protein per scoop",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400",
        details: "Premium whey protein isolate with 90% protein content. Perfect for post-workout recovery and muscle growth.",
        benefits: ["Muscle Recovery", "Lean Muscle", "Fast Absorption"],
        flavor: "Chocolate"
      },
      {
        id: 6,
        name: "CREATINE MONOHYDRATE",
        category: "PERFORMANCE",
        price: "89.00 AED",
        description: "Increases Strength - Boosts Muscle Hydration",
        image: "https://images.unsplash.com/photo-1594736797933-d155dcdb2e03?w=400",
        details: "Pure creatine monohydrate powder. Increases ATP production for better performance and strength gains.",
        benefits: ["Strength Boost", "Muscle Hydration", "Performance"],
        flavor: "Unflavored"
      },
      {
        id: 7,
        name: "VOLTAGE PRE-WORKOUT",
        category: "ENERGY",
        price: "120.00 AED",
        description: "Explosive Energy - Laser Focus",
        image: "https://images.unsplash.com/photo-1594737626072-90d27432f62a?w=400",
        details: "Advanced pre-workout formula with caffeine, beta-alanine, and citrulline for maximum energy and focus.",
        benefits: ["Energy Boost", "Mental Focus", "Endurance"],
        flavor: "Blue Raspberry"
      },
      {
        id: 8,
        name: "AMINO INTRA-WORKOUT",
        category: "ENDURANCE",
        price: "95.00 AED",
        description: "Prevents Muscle Breakdown - Electrolytes for Hydration",
        image: "https://images.unsplash.com/photo-1621430166325-5e54dac6c4f3?w=400",
        details: "BCAA blend with electrolytes. Supports endurance during workout and reduces muscle fatigue.",
        benefits: ["Muscle Preservation", "Hydration", "Recovery"],
        flavor: "Fruit Punch"
      }
    ]
  }

  const handleAddToCart = (product) => {
    const newItem = {
      ...product,
      quantity: 1,
      addedAt: new Date().toISOString()
    }
    
    setCartItems(prev => [...prev, newItem])
    setCartCount(prev => prev + 1)
    
    // عرض إشعار
    alert(`${product.name} added to cart!\nPayment will be completed at the gym.`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading supplements...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-neutral-900 py-16 border-b border-border border-[#4A4747]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold uppercase text-white mb-4">Forged 
            <span className="text-red-500"> Fuel</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
           High-performance supplementation for the dedicated athlete. Transparent labels. Clinically dosed ingredients. No fillers.
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => alert(`You have ${cartCount} items in cart`)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg flex items-center gap-2"
              >
                🛒 Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productsData.featured.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct({
                ...product,
                description: "Premium supplement for athletes",
                details: "Available at the gym reception. Cash payment only.",
                benefits: ["High Quality", "Fast Results", "Gym Exclusive"]
              })}
              className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="text-2xl font-bold text-red-500">{product.price}</div>
            </div>
          ))}
        </div>

        {/* Main Supplements */}
        <h2 className="text-2xl font-bold mb-8 text-center">Our Premium Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.supplements.map((supplement) => (
            <div key={supplement.id} className="space-y-4">
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">
                  {supplement.category}
                </span>
              </div>
              
              <ProductCard
                product={supplement}
                onClick={() => setSelectedProduct(supplement)}
              />
              
              <div className="space-y-2">
                {supplement.description.split(' - ').map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-red-500">✓</span> {item}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => handleAddToCart(supplement)}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">💵</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Gym Exclusive Purchase</h3>
              <p className="text-gray-300">
                All supplements must be purchased at the gym reception. 
                <span className="text-red-400 font-semibold"> Cash payment only.</span>
                <br />
                Show your membership card for a 15% discount. Orders are prepared upon payment.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-800 rounded-lg">💳 Cash Only</span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg">🏪 Gym Pickup</span>
                <span className="px-4 py-2 bg-gray-800 rounded-lg">🎫 Member Discount</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </div>
  )
}

export default SupplementsPage