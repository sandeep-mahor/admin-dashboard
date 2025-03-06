import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} My App</p>
    </footer>
  );
};

export default Footer;
