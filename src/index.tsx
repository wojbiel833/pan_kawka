import React from 'react';
import { createRoot } from 'react-dom/client';

import { WrappedApp } from './App';

import './index.css';

const container = document.getElementById('root');
let root;
if (container !== null) {
  root = createRoot(container);
}

root?.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
