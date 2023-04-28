import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomBadge from './components/CustomBadge';
import CustomButton from './components/CustomButton';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <CustomBadge size="large" color="linkage">
        hello
      </CustomBadge>
      <CustomButton type="dark">button</CustomButton>
    </>
  </React.StrictMode>,
);
