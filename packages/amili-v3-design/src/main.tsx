import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomBadge from './components/CustomBadge';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <CustomBadge size="large" color="primary" primary>
        hello
      </CustomBadge>
    </>
  </React.StrictMode>,
);
