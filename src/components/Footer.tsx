const Footer = () => {
  return (
    <footer className="bg-[#0f121a] text-white pt-24 pb-12 font-sans">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 px-4 md:px-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="bg-white p-3 rounded-sm inline-block">
              <img
                src="/logo.png"
                alt="KnowMediQ Logo"
                className="h-24 w-auto"
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
            <h4 className="font-semibold text-[16px] mb-8 tracking-wide text-gray-100">
              Social Networks
            </h4>
            <div className="flex gap-6 mb-10">
              <a
                href="https://www.instagram.com/knowmediq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7cc2f8] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://m.facebook.com/KnowMediQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7cc2f8] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://ca.linkedin.com/company/know-mediq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7cc2f8] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <h4 className="font-bold text-[17px] mb-6 tracking-wide text-gray-100 uppercase">
              Useful links
            </h4>
            <div className="space-y-4 max-w-[280px]">
              <div className="bg-white p-[12px] rounded-md">
                <a
                  href="https://342523833.hs-sites-na3.com/partnership"
                  className="block bg-[#0f121a] hover:bg-[#03a9f4] hover:translate-y-[-2px] duration-300 text-white px-4 py-3 text-center font-semibold text-[14px] rounded-[10px] no-underline transition-all duration-200 ease-in-out"
                >
                  Partnership
                </a>
              </div>
              <div className="bg-white p-[12px] rounded-md">
                <a
                  href="https://d2faih2o3rqolw.cloudfront.net/devenir-prestataire"
                  className="block bg-[#0f121a] hover:bg-[#03a9f4] hover:translate-y-[-2px] duration-300 text-white px-4 py-3 text-center font-semibold text-[14px] rounded-[10px] no-underline transition-all duration-200 ease-in-out whitespace-nowrap"
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
                href="https://d2faih2o3rqolw.cloudfront.net/privacy"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span>/</span>
              <a
                href="https://d2faih2o3rqolw.cloudfront.net/terms"
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
