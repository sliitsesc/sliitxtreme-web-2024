import PropTypes from "prop-types";

function Button({ text, link, color }) {
  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-[#007BFF] hover:bg-[#0069d9] text-white";
      case "orange":
        return "bg-[#EF7226] hover:bg-[#d95f1f] text-white";
      case "white":
        return "bg-white hover:bg-gray-200 text-black";
      default:
        return "bg-[#EF7226] hover:bg-[#d95f1f] text-white";
    }
  };

  return (
    <a href={link} className="inline-block">
      <button
        className={`font-bold text-[18px] py-[14px] px-[20px] rounded-[18px] transition duration-300 ease-in-out ${getColorClasses()}`}
      >
        {text}
      </button>
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["blue", "orange", "white"]),
};

Button.defaultProps = {
  color: "orange", // Default color is orange
};

export default Button;
