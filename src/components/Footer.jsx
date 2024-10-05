import logo from "../assets/logo.png";

const SocialIcon = ({ children, href = "" }) => (
  <a className="ml-3 cursor-pointer hover:text-[#003554]" href={href}>
    <svg
      fill="white"
      stroke="#c80774"
      strokeLinecap="round"
      strokeLinejoin="round"
      //   strokeWidth="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  </a>
);

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#c80774] bg-opacity-70">
      <div className="container px-3 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src={logo} alt="" />
          <span className="ml-3 text-xl">SPARK-A-THON</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
          © 2024 ECELL-FCRIT —
          <a
            href="https://www.instagram.com/ecellfcrit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="text-white ml-1 cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ecellfcrit
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcon>
            <path
              stroke="none"
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            ></path>
          </SocialIcon>
          <SocialIcon>
            <path
              stroke="none"
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            ></path>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/ecellfcrit/">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/fcrit-entrepreneurship-cell/">
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </SocialIcon>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
