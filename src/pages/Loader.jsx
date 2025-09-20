// src/components/Loader.jsx
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Loader = ({ duration = 2800 }) => {
  const [show, setShow] = useState(() => {
    // Only show on first load / reload
    const hasLoaded = sessionStorage.getItem("appLoaded");
    return !hasLoaded;
  });

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("appLoaded", "true");
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="eyes-loader"></div>
    </motion.div>
  );
};

Loader.propTypes = {
  duration: PropTypes.number,
};

export default Loader;
