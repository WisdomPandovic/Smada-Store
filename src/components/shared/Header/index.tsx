// 'use client'
// import { FC, useState } from 'react';
// import Link from 'next/link';
// import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

// const Header: FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="bg-white text-black flex items-center justify-between p-4">
//       <nav className="hidden md:flex items-center space-x-4">
//         <Link href="/" className="text-sm font-bold">
//           Home
//         </Link>
//         <Link href="/" className="text-sm font-bold">
//           Shop
//         </Link>
//         <Link href="/" className="text-sm font-bold">
//           Women
//         </Link>
//         <Link href="/" className="text-sm font-bold">
//           Men
//         </Link>
//         <Link href="/" className="text-sm font-bold">
//           Catalog
//         </Link>
//       </nav>

//       <div className="flex-1 text-center">
//         <Link href="/" className="text-xl font-bold">
//           <span className="text-red-500">SMA</span>DA
//         </Link>
//       </div>

//       <div className="hidden md:flex items-center space-x-4 relative">
//         <Link href="/cart" className="text-sm">
//           <FaShoppingCart />
//         </Link>
//         <div className="relative">
//           <button onClick={toggleDropdown} className="text-sm focus:outline-none">
//             <FaUser />
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
//               <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
//                 Profile
//               </Link>
//               <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
//                 Orders
//               </Link>
//               <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
//                 Settings
//               </Link>
//               <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
//                 Logout
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="md:hidden flex items-center space-x-4">
//         <button onClick={toggleMenu} className="text-xl">
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       <div className={`fixed top-0 left-0 w-full bg-white p-4 space-y-4 md:hidden transition-transform ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
//         <nav className="flex flex-col space-y-4">
//           <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
//             Shop
//           </Link>
//           <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
//             Women
//           </Link>
//           <Link href="/" className="text-sm font-bold" onClick={toggleMenu}>
//             Men
//           </Link>
//           <Link href="/" className="text-sm font-bold">
//           Catalog
//         </Link>
//         </nav>
//         <div className="flex flex-col space-y-4">
//           <Link href="/cart" className="text-sm" onClick={toggleMenu}>
//             <FaShoppingCart />
//           </Link>
//           <div className="relative">
//             <button onClick={toggleDropdown} className="text-sm focus:outline-none">
//               <FaUser />
//             </button>
//             {isDropdownOpen && (
//               <div className="mt-2 w-full bg-white border rounded-lg shadow-lg py-2 z-10">
//                 <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
//                   Profile
//                 </Link>
//                 <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
//                   Orders
//                 </Link>
//                 <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
//                   Settings
//                 </Link>
//                 <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
//                   Logout
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('Eng');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black flex items-center justify-between p-4">
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
        <Link href="/" className="text-sm font-bold">
          Catalog
        </Link>
      </nav>

      <div className="flex-1 text-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-red-500">SMA</span>DA
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 relative">
        {/* Language Dropdown */}
        <div className="relative">
          <button onClick={toggleLanguageDropdown} className="text-sm flex items-center space-x-1 focus:outline-none">
            <span>{language}</span>
            <FaChevronDown />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg py-2 z-10">
              <button onClick={() => handleLanguageChange('Eng')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                English
              </button>
              <button onClick={() => handleLanguageChange('Fre')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                French
              </button>
              <button onClick={() => handleLanguageChange('Arabic')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Arabic
              </button>
            </div>
          )}
        </div>
        <Link href="/cart" className="text-sm">
          <FaShoppingCart />
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-sm focus:outline-none">
            <FaUser />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
              <Link href="/Admin/product-form" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                Admin Portal
              </Link>
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

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

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
          <Link href="/" className="text-sm font-bold">
            Catalog
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
