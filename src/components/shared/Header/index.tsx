'use client'
import { FC, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black flex items-center justify-between p-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-sm font-bold">
          Home
        </Link>
        <Link href="/" className="text-sm font-bold">
          Shop
        </Link>
        <Link href="/" className="text-sm font-bold">
          Women
        </Link>
        <Link href="/" className="text-sm font-bold">
          Men
        </Link>
      </nav>

      {/* Logo */}
      <div className="flex-1 text-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-red-500">Sma</span>Da
        </Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center space-x-4 relative">
        <Link href="/cart" className="text-sm">
          <FaShoppingCart />
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-sm focus:outline-none">
            <FaUser />
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Profile
              </Link>
              <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Orders
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Settings
              </Link>
              <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white p-4 space-y-4 md:hidden transition-transform ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Shop
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Women
          </Link>
          <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
            Men
          </Link>
        </nav>
        <div className="flex flex-col space-y-4">
          <Link href="/cart" className="text-sm" onClick={toggleMenu}>
            <FaShoppingCart />
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-sm focus:outline-none">
              <FaUser />
            </button>
            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-white border rounded-lg shadow-lg py-2 z-10">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
                  Profile
                </Link>
                <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
                  Orders
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
                  Settings
                </Link>
                <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
