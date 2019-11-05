import React from 'react';
import { createPortal } from 'react-dom';

const LOADER_ROOT = document.querySelector('#loader-root');

export default function Loader() {
  return createPortal(<div>Loader</div>, LOADER_ROOT);
}
