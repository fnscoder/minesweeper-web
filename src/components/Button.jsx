import propTypes from "prop-types";

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded gap-2 ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default Button;