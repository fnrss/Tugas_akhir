// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (isDark) {
//       html.classList.add('dark');
//     } else {
//       html.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//     >
//       {isDark ? 'Light Mode' : 'Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;
