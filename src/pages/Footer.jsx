

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Cyclothon. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#/event" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#/event" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#/event" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
