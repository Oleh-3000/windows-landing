import React from 'react';

import logo from '@assets/images/logo_transparent.png';

interface LogoProps {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  alt = "Логотип", 
  width = 100, 
  height = 20 
}) => {
  // Здесь вы можете импортировать ваш логотип
  
  
  return (
    <div className={`logo ${className}`}>
      {/* Замените src на путь к вашему логотипу */}
      <img 
        src={logo}  // Замените на @assets/images/your-logo.png
        alt={alt}
        width={width}
        height={height}
        className="h-[50px] w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
