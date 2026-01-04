const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 font-sans">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 px-4 md:px-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="bg-white p-6 rounded-sm inline-block">
              <img
                src="/logo.png"
                alt="KnowMediQ Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-left">
            <h4 className="font-bold text-[17px] mb-8 tracking-wide text-gray-100">
              Contact Information
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="text-blue-400 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <a
                  href="tel:855-904-5898"
                  className="text-[14px] font-medium text-blue-400 hover:text-blue-300"
                >
                  855-904-5898
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div className="text-blue-400 mt-1 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <p className="text-[14px] font-medium text-gray-300">
                  Montreal, Greater Montreal, Quebec, GTA
                </p>
              </li>

              <li className="flex items-center gap-4">
                <div className="text-blue-400 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@knowmediq.ca"
                  className="text-[14px] font-medium text-blue-400 hover:text-blue-300"
                >
                  info@knowmediq.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Schedules Section */}
          <div className="text-left">
            <h4 className="font-bold text-[17px] mb-8 tracking-wide text-gray-100">
              Schedules
            </h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-blue-400 font-bold text-[14px] mb-2">
                  Customer Service
                </h5>
                <p className="text-gray-300 text-[13px] font-medium leading-relaxed">
                  Monday - Friday: <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h5 className="text-blue-400 font-bold text-[14px] mb-2">
                  Book an appointment
                </h5>
                <p className="text-gray-300 text-[13px] font-medium">
                  24/7 - Confirmation within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Socials & Links Section */}
          <div className="text-left">
            <h4 className="font-bold text-[17px] mb-8 tracking-wide text-gray-100">
              Social Networks
            </h4>
            <div className="flex gap-6 mb-10">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6m5.4 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0 2a4 4 0 100 8 4 4 0 000-8m4.9-.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3 1.1-2.3 2.5v5.5h-2.5v-8.5h2.5v1.2a3 3 0 0 1 2.5-1.5 3.5 3.5 0 0 1 3.5 3.5v5.3h-2.5m-11-8.5h2.5v8.5h-2.5v-8.5m1.25-4.25a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83a2.79 2.79 0 0 1-1.94 2C18.42 19 12 19 12 19s-6.42 0-7.62-.17a2.79 2.79 0 0 1-1.94-2C2.16 15.8 2 14.19 2 12l.06-2.17c.07-.6.1-1.29.16-2.09.07-.8.15-1.43.28-1.9a2.79 2.79 0 0 1 1.94-2C5.58 3.67 12 3.67 12 3.67s6.42 0 7.62.17a2.79 2.79 0 0 1 1.94 2z" />
                </svg>
              </a>
            </div>

            <h4 className="font-bold text-[17px] mb-6 tracking-wide text-gray-100 uppercase">
              Useful links
            </h4>
            <div className="space-y-4 max-w-[280px]">
              <div className="bg-white p-1 rounded-md">
                <a
                  href="https://d2faih2o3rqolw.cloudfront.net/partenariat"
                  className="block bg-[#0f172a] hover:bg-[#74b9ff] text-white py-3 text-center font-bold text-[14px] rounded-md transition-colors"
                >
                  Partnership
                </a>
              </div>
              <div className="bg-white p-1 rounded-md">
                <a
                  href="https://d2faih2o3rqolw.cloudfront.net/devenir-prestataire"
                  className="block bg-[#0f172a] hover:bg-[#74b9ff] text-white py-3 text-center font-bold text-[14px] rounded-md transition-colors whitespace-nowrap"
                >
                  Becoming a service provider
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-400 text-[13px] font-medium">
            <p>© 2025 KnowMediQ, All rights reserved —</p>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span>/</span>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
