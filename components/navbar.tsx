import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Define the navigation links with labels and paths
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Chat', path: '/chat' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b-2 z-50 ${poppins.className}`}
      style={{
        background: 'bg-gradient-to-tr from-gray-900 to-indigo-900', // Background transparent for the header itself to keep gradient consistent
        borderBottomColor: '#384589',
      }}
    >
      <nav className="flex items-center p-10 w-screen max-w-screen-xl mx-auto">
        {/* Mobile Logo and Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={toggleMenu}
            className="text-white text-xl p-2"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 transition-transform hover:scale-110"
          >
            {/* Logo */}
          </Link>

          <div className="invisible">
            {/* Placeholder to balance the menu button */}
            <Menu size={28} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <Link
            href="/"
            className="mr-10 transition-transform transform hover:scale-110"
          >
            {/* Logo */}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="mr-10 text-2xl font-semibold text-white transition-transform transform hover:scale-110"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Dropdown Menu with Gradient Background */}
      {isMenuOpen && (
        <div className="bg-gradient-to-tr from-gray-900 to-indigo-900 text-white shadow-lg">
          <div className="flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold"></span>
              <button
                onClick={toggleMenu}
                className="text-2xl"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="py-2 text-xl font-medium transition-colors duration-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
