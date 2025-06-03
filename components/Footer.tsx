import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600 text-center py-4 border-t mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} UniCareNL. All rights reserved.</p>
    </footer>
  );
}
