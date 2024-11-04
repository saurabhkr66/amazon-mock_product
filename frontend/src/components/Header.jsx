import React from "react";
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold mr-6">Mock eCommerce</Link>
            <button className="text-sm flex items-center">
              <Menu className="mr-2 h-4 w-4" />
              All
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search AmazonClone"
                className="w-full py-2 pl-4 pr-10 rounded-md bg-white text-gray-900"
              />
              <button className="absolute right-0 top-0 bottom-0 px-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-r-md">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-yellow-400">
              <div>Hello, Sign in</div>
              <div className="font-bold">
                Account & Lists <ChevronDown className="inline h-4 w-4" />
              </div>
            </a>
            <a href="#" className="text-sm hover:text-yellow-400">
              <div>Returns</div>
              <div className="font-bold">& Orders</div>
            </a>
            <nav>
      <Link to="/cart" className="flex items-center hover:text-yellow-400 ml-4">
        <ShoppingCart className="h-8 w-8" />
        <span className="ml-1 font-bold">Cart</span>
      </Link>
    </nav>
          </div>
        </div>

        {/* Sub-menu */}
        <nav className="flex space-x-4 mt-2 text-sm">
      <span className="hover:text-yellow-400 cursor-pointer">Today's Deals</span>
      <span className="hover:text-yellow-400 cursor-pointer">Customer Service</span>
      <span className="hover:text-yellow-400 cursor-pointer">Registry</span>
      <span className="hover:text-yellow-400 cursor-pointer">Gift Cards</span>
      <span className="hover:text-yellow-400 cursor-pointer">Sell</span>
    </nav>
      </div>
    </header>
  );
}
