export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:underline cursor-pointer">Careers</span></li>
                <li><span className="hover:underline cursor-pointer">Blog</span></li>
                <li><span className="hover:underline cursor-pointer">About AmazonClone</span></li>
                <li><span className="hover:underline cursor-pointer">Investor Relations</span></li>
                <li><span className="hover:underline cursor-pointer">AmazonClone Devices</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:underline cursor-pointer">Sell products on AmazonClone</span></li>
                <li><span className="hover:underline cursor-pointer">Sell on AmazonClone Business</span></li>
                <li><span className="hover:underline cursor-pointer">Sell apps on AmazonClone</span></li>
                <li><span className="hover:underline cursor-pointer">Become an Affiliate</span></li>
                <li><span className="hover:underline cursor-pointer">Advertise Your Products</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">AmazonClone Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:underline cursor-pointer">AmazonClone Business Card</span></li>
                <li><span className="hover:underline cursor-pointer">Shop with Points</span></li>
                <li><span className="hover:underline cursor-pointer">Reload Your Balance</span></li>
                <li><span className="hover:underline cursor-pointer">AmazonClone Currency Converter</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:underline cursor-pointer">AmazonClone and COVID-19</span></li>
                <li><span className="hover:underline cursor-pointer">Your Account</span></li>
                <li><span className="hover:underline cursor-pointer">Your Orders</span></li>
                <li><span className="hover:underline cursor-pointer">Shipping Rates & Policies</span></li>
                <li><span className="hover:underline cursor-pointer">Returns & Replacements</span></li>
                <li><span className="hover:underline cursor-pointer">Help</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <span className="text-2xl font-bold cursor-pointer">AmazonClone</span>
            <p className="mt-2 text-sm">&copy; 2023 AmazonClone-like. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  