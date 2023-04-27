import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButton from './components/CustomButton';
import CustomLeftArrow from './icons/LeftArrow';
import CustomBell from './icons/Bell';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <CustomButton
        prefix={<CustomLeftArrow />}
        suffix={<CustomBell />}
        size="large"
      >
        Button
      </CustomButton>
      <CustomButton
        prefix={<CustomLeftArrow />}
        suffix={<CustomBell />}
        loading
      >
        Button
      </CustomButton>
      <CustomButton
        type="white"
        prefix={<CustomLeftArrow />}
        suffix={<CustomBell />}
        size="small"
      >
        Button
      </CustomButton>
    </>
  </React.StrictMode>,
);
