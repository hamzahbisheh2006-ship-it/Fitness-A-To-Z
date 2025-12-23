import { useState, useEffect } from 'react'
import ProductCard from '../../Components/productComponent/ProductCard'
import ProductModal from '../../Components/productComponent/ProductModal'

const SupplementsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  // search state
  const [searchTerm, setSearchTerm] = useState("")

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
      { 
        id: 1, 
        name: "Optimum Nutrition Creatine Powder", 
        price: "₪130.00", 
        image: "src/assets/suplplementsImg/cr.on.avif",
        shortDesc: "600 g • monohydrate • flavorless",
        description: "A Optimum Nutrition Product High-quality whey protein for muscle growth",
        benefits: ["Builds Muscle", "Fast Absorption", "Rich in Amino Acids"],
        usage: "Take 5g daily after workout."
      },
      { 
        id: 2, 
        name: "Nutrex 100% Whey Protein", 
        price: "₪360.00", 
        image: "src/assets/suplplementsImg/2025_mnsaward_product_imgs_protein_1.webp",
        shortDesc: "5kg • Vanilla",
        description: "A Nutrex Product 100% Muscle Building Fuel, Exceptional Taste ",
        benefits: ["Weight Gain", "Muscle Recovery", "Energy Boost"],
        usage: "Take 5g daily with milk."
      },
      { 
        id: 3, 
        name: "Creatine 5000 Powder", 
        price: "₪60.00", 
        image: "src/assets/suplplementsImg/creatine5000.avif",
        shortDesc: "300 g • monohydrate • flavorless",
        description: "High-potency creatine for strength & power",
        benefits: ["Burns Fat", "Boosts Metabolism", "Enhances Focus"],
        usage: "Take 5g daily with milk."
      },
      {
        id: 4, 
        name: "MuscleTech Platinum Multivitamin", 
        price: "₪99.00", 
        image: "src/assets/suplplementsImg/mt_platinum_multi_rebrand_1.jpg",
        shortDesc: "90 Tablets • Multivitamin",
        description: "A MuscleTech Product High-Potency Dose of Vitamins, Minerals, and Antioxidants*",
        benefits: ["Burns Fat", "Boosts Metabolism", "Enhances Focus"],
        usage: "Take 1 capsule before workout."
      },
      {
        id: 5, 
        name: "Opti-Men Multivitamin", 
        price: "₪75.00", 
        image: "src/assets/suplplementsImg/opti-men_90tablets_1.webp",
        shortDesc: "90 Tablets • Multivitamin",
        description: "An Optimum Nutrition Product Reach Your Full Potential With Vitamins & Essential Minerals",
        benefits: ["75+ active ingredients", "1000mg of free-form amino acids", "275+mg B-complex vitamins"],
        usage: "Take 1 capsule before workout."
      },
      {
        id: 6, 
        name: "BPI Sports CLA + Carnitine", 
        price: "₪85.00", 
        image: "src/assets/suplplementsImg/cla_carnitine-50_serv-fruit_punch_v2.jpg",
        shortDesc: "370 g • loss formula • flavored",
        description: "A BPI Sports Product Support Lean Muscle While Boosting Energy and Performance",
        benefits: ["Support athletic performance", "2.5g CLA Matrix + 2g Carnitine", "Promote lean muscle mass!"],
        usage: "Take 1 capsule before workout."
      },
      {
        id: 7, 
        name: "MuscleTech Nitro-Tech 100% Whey Gold", 
        price: "₪230.00", 
        image: "src/assets/suplplementsImg/whey_gold_5lb_double_rich_chocolate_3.webp",
        shortDesc: "2.28kg • Double Rich Chocolate",
        description: "A MuscleTech Product Fuels Muscles Quickly So You Can Continue To Perform at a High Level",
        benefits: ["24g of ultra-premium, clean protein", "Microfiltered for less carbs and fat", "5.5g of BCAAs and 4g of glutamine"],
        usage: "Take 1 capsule before workout."
      },
      {
        id: 8, 
        name: "Optimum Nutrition Amino Energy", 
        price: "₪90.00", 
        image: "src/assets/suplplementsImg/2025_mnsaward_product_imgs_eaa_1.jpg",
        shortDesc: "270g • zero sugar",
        description: "An Optimum Nutrition Product Anytime Energy & Muscle Recovery",
        benefits: ["Helps build muscle with BCAAs & amino acids", "100mg of caffeine from coffee bean and/or tea leaf", "5 grams of amino acids per serving"],
        usage: "Take 9g after workout."
      },
      {
        id: 9, 
        name: "BPI Sports Best Protein", 
        price: "₪299.99", 
        image: "src/assets/suplplementsImg/best_protein_-_72_servs_-_vanilla_swirl-new_1.jpg",
        shortDesc: "2.27kg • vanilla swirl",
        description: "A BPI Sports Product Advanced 100% Whey Protein Formula!",
        benefits: ["High-quality 100% whey proteins", "No fillers or maltodextrin", "5.5g BCAAs"],
        usage: "24g protein per serving"
      },
      {
        id: 10, 
        name: "Ronnie Coleman King Carb XS", 
        price: "₪190.00", 
        image: "src/assets/suplplementsImg/rcss_king_carb_30sv_cotton_candy_1.jpg",
        shortDesc: "2.2kg • flavorless",
        description: "A Ronnie Coleman Product Carbs to Fuel Your Gains Every Workout",
        benefits: ["30 grams of carbs per scoop", "Hydration blend of electrolytes", "Maltodextrin + dextrose"],
        usage: "Take 9g after workout."
      },
      {
        id: 11, 
        name: "Optimum Nutrition Micronized Creatine Powder", 
        price: "₪110.00", 
        image: "src/assets/suplplementsImg/us_creatine_60sv_update_1.jpg",
        shortDesc: "300g • monohydrate • flavorless",
        description: "An Optimum Nutrition Product Pure Micronized Creatine Monohydrate Powder",
        benefits: ["Micronized for easy mixing", "Banned substance tested", "100% pure creatine monohydrate"],
        usage: "30 g sevings daily."
      },
      {
        id: 12, 
        name: "Animal 100% Whey Protein", 
        price: "₪265.00", 
        image: "src/assets/suplplementsImg/animal_whey_4lbs_chocolate_1.jpg",
        shortDesc: "1.81kg • chocolate flavor",
        description: "An Animal Product Fast-Digesting Whey Protein From a Concentrate-Isolate Blend",
        benefits: ["4.6g of naturally occurring BCAAs", "No artificial colors and gluten-free", "Mixes easily & available in 2 delicious flavors"],
        usage: "Take 25 ~ 30 g daily."
      },
       {
        id: 13, 
        name: "Perfect Sports Diesel 100% New Zealand Whey Protein Bars", 
        price: "₪80.00", 
        image: "src/assets/suplplementsImg/thunderbolts_us_bars_tray_cookiesncream-angle1_1.jpg",
        shortDesc: "Box of 12 •  • Naturally flavored",
        description: "A Perfect Sports Product Canada's #1 Protein, Now in Bars",
        benefits: ["17-18g of protein, 190-210 calories", "Grass-fed and pasture-raised New Zealand whey protein", "4 mouth-watering flavors (3 peanut free)"],
        usage: "Just take it when needed and enjoy."
      },
       {
        id: 14, 
        name: "Animal Micronized Creatine Powder", 
        price: "₪125.00", 
        image: "src/assets/suplplementsImg/creatine_unflavored_300g_1.jpg",
        shortDesc: "300g • monohydrate • flavorless",
        description: "An Animal ProductPure Micronized Creatine Monohydrate",
        benefits: ["Designed for muscle building and strength", "Supports cognitive health", "Available in 300g and 500g sizes"],
        usage: "take 5 g sevings daily."
      },
       {
        id: 15, 
        name: "Cellucor C4 Performance Energy", 
        price: "₪115.00", 
        image: "src/assets/suplplementsImg/c4_popsicle_12_pack_render_-_cherry-v3_1.jpg",
        shortDesc: "473 ml • BOX of 12",
        description: "A Cellucor Product You'll Be Burstin' With Explosive Energy",
        benefits: ["Clinically studied CarnoSyn® Beta-Alanine", "Fuel performance with 200mg of caffeine", "Formulated with Zero Sugar or Artificial Colors"],
        usage: "Do not consume more than one pack per day !. High caffeine content."
      },
       {
        id: 16, 
        name: "NOW Foods Omega-3 Fish Oil", 
        price: "₪35.00", 
        image: "src/assets/suplplementsImg/2025_mnsaward_product_imgs_wellness_1.jpg",
        shortDesc: "100 softgels • 1000 mg per softgel",
        description: "A NOW Foods Product Molecularly Distilled Fish Oil to Support Cardiovascular Health",
        benefits: ["180 EPA / 120 DHA per softgel", "Easy to Swallow Softgels", "Cardiovascular support"],
        usage: "30 g sevings daily."
      },
    ],
  }

  // filter searched products
  const filteredProducts = productsData.featured.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    const newItem = {
      ...product,
      quantity: 1,
      addedAt: new Date().toISOString()
    }
    
    setCartItems(prev => [...prev, newItem])
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden bg-neutral-900 py-16 border-b border-border border-[#4A4747]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold uppercase text-white mb-4">
            Forged <span className="text-red-600">Fuel</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nutritional supplements and high-performance products for professional athletes, in collaboration with leading global companies. Transparent ingredients. Filler-free.
          </p>
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={() => handleAddToCart(selectedProduct)}
          />
        )}
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white/90">Featured Products</h2>
        </div>

        {/*  search input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-md bg-neutral-900 text-white border border-[#4A4747] focus:outline-none focus:border-red-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
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
