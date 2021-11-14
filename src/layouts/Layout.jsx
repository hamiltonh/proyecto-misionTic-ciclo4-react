import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;

// import React from 'react'
// import Sidebar from '../components/Sidebar'

// const Layout = ({children}) => {
//     return (
//         <div>
//             <Sidebar />
//             {children}
//         </div>
//     )
// }

// export default Layout
