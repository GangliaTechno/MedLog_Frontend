// import React from "react";
// // import "../styles/Sidebar.css";
// import { IoLogOutOutline } from "react-icons/io5";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="logo">Medical Logbook</div>
//       <ul className="sidebar-menu">
//         <li>📖 Primary logbook</li>
//         <li>💼 Jobs</li>
//         <li>📊 Analysis</li>
//         <li>🎯 Goal progression</li>
//         <li> <a href="\reports">📜 Reports</a></li>
//         <li>⚙️ Account</li>
//         <li>❓ Support</li>
//         <li> <IoLogOutOutline className="icon logout-icon" />Log out</li>
//       </ul>
//       {/* <div className="night-mode">
//         <label>
//           <input type="checkbox" id="check-box"/>
//           Night mode
//         </label>
//       </div> */}
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoLogOutOutline } from "react-icons/io5";
// import { 
//   BiBook, BiBriefcase, BiBarChart, BiTargetLock, 
//   BiFile, BiCog, BiSupport 
// } from "react-icons/bi"; 

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear session storage or authentication tokens (if any)
//     localStorage.removeItem("user"); // Adjust based on auth method
//     sessionStorage.removeItem("authToken"); // Example storage cleanup
//     navigate("/"); // Redirect to login page
//   };

//   return (
//     <div className="sidebar">
//       <div className="logo">Medical Logbook</div>
//       <ul className="sidebar-menu">
//         <li>
//           <Link to="/primary-logbook">
//             <BiBook className="icon" /> Primary Logbook
//           </Link>
//         </li>
//         <li>
//           <Link to="/jobs">
//             <BiBriefcase className="icon" /> Jobs
//           </Link>
//         </li>
//         <li>
//           <Link to="/analysis">
//             <BiBarChart className="icon" /> Analysis
//           </Link>
//         </li>
//         <li>
//           <Link to="/goal-progression">
//             <BiTargetLock className="icon" /> Goal Progression
//           </Link>
//         </li>
//         <li>
//           <Link to="/reports">
//             <BiFile className="icon" /> Reports
//           </Link>
//         </li>
//         <li>
//           <Link to="/account">
//             <BiCog className="icon" /> Account
//           </Link>
//         </li>
//         <li>
//           <Link to="/support">
//             <BiSupport className="icon" /> Support
//           </Link>
//         </li>
//         <li className="logout" onClick={handleLogout}>
//           <IoLogOutOutline className="icon logout-icon" /> Log Out
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose, IoLogOutOutline, IoMenu } from "react-icons/io5";
import { FaBook, FaBriefcase, FaChartBar, FaBullseye, FaFileAlt, FaCog, FaQuestionCircle } from "react-icons/fa";
import ReportsPage from "../pages/ReportsPage";


const Sidebar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  // Logout function
  const handleLogout = () => {
    // Clear user session (if using localStorage or sessionStorage)
    localStorage.removeItem("user");

    // Redirect to Login Page
    navigate("/");
  };

  return (
    <>
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <IoClose className="ml-50 -mt-4" /> : <IoMenu />}
        </button>
      </div>
      <div
        className={`bg-[#008080] w-[250px] h-screen text-white flex flex-col pt-5 fixed top-0 z-40 transition-transform duration-300 shadow-lg
        ${isOpen ? "left-0" : "-left-[250px]"} md:left-0`}
      >
        <div className="pl-5 text-[22px] font-bold mb-5 text-gray-100">Medical Logbook</div>
        <ul className="*:px-6 *:py-5 *:flex *:gap-3 *:items-center *:cursor-pointer *:rounded-md *:transition-all *:duration-300 *:hover:bg-white/20 *:hover:border-l-[4px] *:hover:border-[#3498db] *:hover:pl-[16px]">
          <li onClick={() => navigate("/logbookpage")}>
            <FaBook className="icon" /> Primary Logbook
          </li>
          <li onClick={() => navigate("/jobs")}>
            <FaBriefcase className="icon" /> Jobs
          </li>
          <li onClick={() => navigate("/analysis")}>
            <FaChartBar className="icon" /> Analysis
          </li>
          <li onClick={() => navigate("/goal-progression")}>
            <FaBullseye className="icon" /> Goal Progression
          </li>
          <li onClick={() => navigate("/reports")}>
            <FaFileAlt className="icon" /> Reports
          </li>
          <li onClick={() => navigate("/account")}>
            <FaCog className="icon" /> Account
          </li>
          <li onClick={() => navigate("/support")}>
            <FaQuestionCircle className="icon" /> Support
          </li>
          <li className="hover:!bg-[#154f4e]" onClick={handleLogout}>
            <IoLogOutOutline className="icon" /> Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

