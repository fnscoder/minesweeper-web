const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded gap-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;