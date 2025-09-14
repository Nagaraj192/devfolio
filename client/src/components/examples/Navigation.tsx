import { useState } from 'react';
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [activeSection, setActiveSection] = useState('hero');
  
  return (
    <div className="h-20">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}