import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-icon">
          <CheckSquare size={32} />
        </div>
        <h1 className="header-title">TaskMaster</h1>
        <p className="header-subtitle">Organize your life, one task at a time</p>
      </div>
    </header>
  );
};

export default Header;
