import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-300 via-blue-400 to-sky-950 text-white shadow-lg">
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <a
            href="https://www.upwork.com/freelancers/~0144664f70febd1d18"
            className="hover:opacity-80 transition-opacity"
            target="_blank"
          >
            Cridtick
          </a>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-gray-200 hover:underline transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-gray-200 hover:underline transition-all"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-200 hover:underline transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl hover:opacity-80 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
