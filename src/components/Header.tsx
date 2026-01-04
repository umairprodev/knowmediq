import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    "Home care",
    "Mental health",
    "Well-being",
    "Blood analyses",
    "Drug delivery",
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-6 sm:px-10 lg:px-16">
        <div className="max-w-screen-2xl mx-auto flex justify-end gap-6 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-primary transition-colors">
            Provider Area
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Customer Area
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md relative">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <img
                src="/logo.png"
                alt="KnowMediQ Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#"
                className="text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors"
              >
                WELCOME
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors focus:outline-none">
                  SERVICES +
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-sm border border-gray-100 py-2 transition-all duration-200 transform origin-top-left ${
                    isServicesOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary text-[13px] font-medium transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors"
              >
                SOLUTIONS
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors"
              >
                BLOG
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors"
              >
                CONTACT
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-primary font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-colors"
              >
                ENGLISH
              </a>

              <button className="bg-secondary hover:bg-blue-700 text-white px-8 py-3 rounded-none font-bold text-[11px] xl:text-[13px] tracking-widest uppercase transition-all">
                JOIN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-500 p-2"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 8h16M4 12h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          {/* Close Button & Logo */}
          <div className="flex justify-between items-center mb-12">
            <div className="w-10"></div> {/* Spacer */}
            <img
              src="/logo.png"
              alt="KnowMediQ Logo"
              className="h-10 w-auto mx-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 p-2"
            >
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
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-8 grow">
            <a
              href="#"
              className="text-primary font-medium text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Welcome
            </a>

            <div className="w-full text-center">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-center w-full text-gray-600 font-medium text-2xl focus:outline-none"
              >
                Services
                <svg
                  className={`ml-2 h-6 w-6 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Submenu Accordion */}
              <div
                className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-[400px] pb-4" : "max-h-0"
                }`}
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-500 text-lg hover:text-primary transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="text-gray-600 font-medium text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>

            <a
              href="#"
              className="text-gray-600 font-medium text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>

            <a
              href="#"
              className="text-gray-600 font-medium text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            <a
              href="#"
              className="text-gray-600 font-medium text-2xl"
              onClick={() => setIsOpen(false)}
            >
              English
            </a>

            <div className="pt-4 w-full px-8 pb-12">
              <button className="w-full bg-secondary text-white py-4 font-bold text-sm tracking-widest uppercase shadow-lg">
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
