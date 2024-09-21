import parse from "html-react-parser";
import PropTypes from "prop-types";

export default function Header({ title, subtitle, className }) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-[48px] dm-sans-600 font-bold text-white mb-2 drop-shadow-white-glow">
        {title}
      </h1>
      {subtitle && <p className="text-[20px] text-white">{parse(subtitle)}</p>}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
