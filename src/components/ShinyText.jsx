import PropTypes from 'prop-types';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-white bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.1) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  ShinyText.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    speed: PropTypes.number,
    className: PropTypes.string,
  };
  
  export default ShinyText;
  
