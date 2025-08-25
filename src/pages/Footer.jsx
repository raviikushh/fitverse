const Footer = () => {
  return (
   <footer className="bg-black text-gray-400 py-6 ">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="text-sm text-gray-500">
      © {new Date().getFullYear()} FitVerse. All rights reserved.
    </div>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a
        href=""
        className="text-orange-500 hover:text-white transition duration-300"
      >
        Terms of Service
      </a>
      <a
        href=""
        className="text-orange-500 hover:text-white transition duration-300"
      >
        Privacy Policy
      </a>
      <a
        href="#/contact"
        className="text-orange-500 hover:text-white transition duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
