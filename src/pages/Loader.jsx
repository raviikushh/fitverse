import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Loader = ({ duration = 2800, onFinish }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isReload = window.performance
      ? performance.getEntriesByType("navigation")[0].type === "reload"
      : false;

    if (isReload || !sessionStorage.getItem("appLoaded")) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("appLoaded", "true");
        if (onFinish) onFinish(); // notify App that loading is done
      }, duration);
      return () => clearTimeout(timer);
    } else {
      if (onFinish) onFinish();
    }
  }, [duration, onFinish]);

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
  onFinish: PropTypes.func,
};

export default Loader;
