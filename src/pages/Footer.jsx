const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-green-100">
          © {new Date().getFullYear()} Cyclothon. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#/event" className="text-green-300 hover:text-white transition duration-300">
            Terms of Service
          </a>
          <a href="#/event" className="text-green-300 hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#/event" className="text-green-300 hover:text-white transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
