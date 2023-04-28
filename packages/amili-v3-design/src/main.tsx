import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButton from './components/CustomButton';
import CustomLeftArrow from './icons/LeftArrow';
import CustomBell from './icons/Bell';
import CustomBadge from './components/CustomBadge';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <CustomBadge>hello</CustomBadge>
    </>
  </React.StrictMode>,
);
