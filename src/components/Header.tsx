import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="KnowMediQ Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide uppercase transition-colors"
            >
              Welcome
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-primary font-medium text-sm tracking-wide uppercase transition-colors focus:outline-none"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <span className="ml-1 text-xs">+</span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 transform origin-top-left ${
                  isServicesOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-primary text-sm"
                >
                  For Clinicians
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-primary text-sm"
                >
                  For Patients
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-primary text-sm"
                >
                  For Caregivers
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide uppercase transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide uppercase transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide uppercase transition-colors"
            >
              English
            </a>

            <button className="bg-secondary hover:bg-secondary cursor-pointer text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide transition-all shadow-md">
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-purple-50"
            >
              Welcome
            </a>
            <div className="px-3 py-3">
              <div className="font-medium text-gray-700 mb-2">Services</div>
              <div className="pl-4 space-y-2 border-l-2 border-purple-100">
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-primary"
                >
                  For Clinicians
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-primary"
                >
                  For Patients
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-primary"
                >
                  For Caregivers
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-purple-50"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-purple-50"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-purple-50"
            >
              English
            </a>
            <div className="pt-4">
              <button className="w-full bg-secondary text-white px-6 py-3 rounded-sm font-bold shadow-md uppercase">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
