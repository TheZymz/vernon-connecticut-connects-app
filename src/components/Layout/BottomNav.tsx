
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, School, Calendar, MapPin, Info, Phone } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Schools', path: '/schools', icon: School },
    { name: 'Parks', path: '/parks', icon: MapPin },
    { name: 'Tax', path: '/tax', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center ${
              isActive(item.path)
                ? 'text-vernon-blue'
                : 'text-gray-500 hover:text-vernon-blue'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
