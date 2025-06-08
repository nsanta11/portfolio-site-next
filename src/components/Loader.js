'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader() {
  const pathname = usePathname();
  const [show, setShow] = useState(true); // Start with true for initial load

  useEffect(() => {
    // Remove static loader and .loading class
    const staticLoader = document.getElementById('initial-loader');
    if (staticLoader) staticLoader.remove();

    document.body.classList.remove('loading');

    // Show loader for route transitions
    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
}
