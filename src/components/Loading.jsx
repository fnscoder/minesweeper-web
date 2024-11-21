import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Loading = ({ delay = 1000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

Loading.propTypes = {
  delay: PropTypes.number,
};

export default Loading;