const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Section */}
          <div>
            <div className="bg-white p-4 inline-block rounded-md mb-6">
              <img
                src="/logo.png"
                alt="KnowMediQ Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Contact Information
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-secondary hover:text-blue-400 transition-colors cursor-pointer">
                  855-904-5898
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Montreal, Greater Montreal, Quebec, GTA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@knowmediq.ca"
                  className="text-secondary hover:text-blue-400 transition-colors"
                >
                  info@knowmediq.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Opening Hours</h4>
            <div className="space-y-6 text-gray-400">
              <div>
                <h5 className="text-secondary font-bold mb-1">
                  Customer Service
                </h5>
                <p>Monday - Friday :</p>
                <p>08:00 AM - 06:00 PM</p>
              </div>
              <div>
                <h5 className="text-secondary font-bold mb-1">
                  Appointment Booking
                </h5>
                <p>24/7 - Confirmation in 24 hours</p>
              </div>
            </div>
          </div>

          {/* Socials & Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Social Networks
            </h4>
            <div className="flex gap-4 mb-10">
              {["instagram", "facebook", "linkedin", "youtube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    {social === "instagram" && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social === "facebook" && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.381c0-4.615 5.116-4.925 5.014 0v8.381h5v-9.921c0-6.97-9.122-5.716-10.046-2.828l.054-3.003z" />
                      </svg>
                    )}
                    {social === "youtube" && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </a>
                )
              )}
            </div>

            <h4 className="font-bold text-lg mb-6 text-white">Useful Links</h4>
            <div className="space-y-3">
              <button className="w-full bg-[#1A1F2B] hover:bg-[#252b3b] text-white py-3 px-4 rounded border border-gray-700 font-bold transition-all text-sm">
                Partnership
              </button>
              <button className="w-full bg-[#1A1F2B] hover:bg-[#252b3b] text-white py-3 px-4 rounded border border-gray-700 font-bold transition-all text-sm">
                Become a Provider
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
            <span>
              &copy; {new Date().getFullYear()} KnowMediQ. All rights reserved.
            </span>
            <span className="hidden md:inline">—</span>
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
