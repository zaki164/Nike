const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  fullWidth,
  borderColor,
}) => {
  return (
    <a
      className={`flex_center rounded-full py-2 md:py-3 px-4 md:px-6 gap-3 md:gap-6  w-fit
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${textColor ? textColor : "text-white"}
      ${fullWidth && "w-full"}
      ${borderColor && `border-2 ${borderColor}`}`}
      href="/"
    >
      {label}{" "}
      {iconURL && (
        <img
          src={iconURL}
          alt="button"
          className="bg-white rounded-full w-5 h-5"
        />
      )}
    </a>
  );
};

export default Button;
