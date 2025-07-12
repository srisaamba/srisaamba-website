import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Sri Saamba Parmeshwara Industries
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming the food and beverage industry with healthy, natural products. 
              From our Frippy fruit drinks to Dr Fiber prebiotic sodas, we're committed 
              to bringing you the best of nature.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">CIN: U11049KA2024PTC192614</p>
              <p>#1207/343, 9th main, 7th Sector</p>
              <p>HSR Layout, Bangalore, Karnataka – 560102</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Products
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <div className="space-y-2">
              <div className="text-gray-300">
                <div className="font-medium text-orange-400 mb-1">Frippy</div>
                <div className="text-sm">Natural Fruit Drinks</div>
              </div>
              <div className="text-gray-300">
                <div className="font-medium text-blue-400 mb-1">Dr Fiber</div>
                <div className="text-sm">Prebiotic Sodas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sri Saamba Parmeshwara Industries Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}