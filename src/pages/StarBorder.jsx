const StarBorder = ({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "6s",
    children,
    ...rest
  }) => {
    return (
      <Component className={`relative inline-block py-[1px] overflow-hidden rounded-[10px] ${className}`} {...rest}>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-md animate-star-movement-top z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div className="relative z-1 bg-gradient-to-r from-orange-600 to-orange-800 border border-gray-800  text-white text-center text-[14px] py-[10px] px-[20px] ">
          {children}
        </div>
      </Component>
    );
  };
  
  export default StarBorder;
  
  