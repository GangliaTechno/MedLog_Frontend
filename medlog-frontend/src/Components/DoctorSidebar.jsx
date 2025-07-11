// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IoLogOutOutline, IoMenu, IoClose } from "react-icons/io5";
// import { FaHome, FaUserGraduate } from "react-icons/fa";

// const DoctorSidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const getLinkStyle = (path) => {
//     const isActive = location.pathname === path;
//     return `px-6 py-4 flex gap-3 items-center cursor-pointer rounded-lg transition-all duration-300
//       ${isActive ? "bg-teal-800 font-semibold" : "hover:bg-white/20 hover:border-l-[4px] hover:border-[#3498db] hover:pl-[16px]"}`;
//   };

//   return (
//     <>
//       {/* Burger Icon */}
//       <div className="md:hidden p-4 fixed top-0 left-0 z-50">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
//           {isOpen ? <IoClose className="ml-50 -mt-4" /> : <IoMenu />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-[#008080] w-[250px] h-screen text-white flex flex-col pt-5 fixed top-0 z-40 transition-transform duration-300 shadow-lg
//         ${isOpen ? "left-0" : "-left-[250px]"} md:left-0`}
//       >
//         <div className="pl-5 text-[22px] font-bold mb-5 text-gray-100">Doctor Logbook</div>
//         <ul>
//           <li
//             className={getLinkStyle("/doctor-home")}
//             onClick={() => {
//               navigate("/doctor-home");
//               setIsOpen(false);
//             }}
//           >
//             <FaHome className="icon" /> Home
//           </li>
//           <li
//             className={getLinkStyle("/doctor-logbook")}
//             onClick={() => {
//               navigate("/doctor-logbook");
//               setIsOpen(false);
//             }}
//           >
//             <FaUserGraduate className="icon" /> View Students
//           </li>

//           <li onClick={() => { navigate("/doctor-student-analysis"); setIsOpen(false); }}>
//     <FaUserGraduate className="icon" /> Analysis
//   </li>
//   <li onClick={() => { navigate("/assign-task"); setIsOpen(false); }}>
//   <FaUserGraduate className="icon" /> Assign Task
// </li>

//           <li onClick={() => { navigate("/account"); setIsOpen(false); }}>

//           <li
//             className={getLinkStyle("/account")}
//             onClick={() => {
//               navigate("/account");
//               setIsOpen(false);
//             }}
//           >

//             <FaUserGraduate className="icon" /> Account
//           </li>
//           <li
//             className="px-6 py-5 flex gap-3 items-center cursor-pointer rounded-md transition-all duration-300 hover:bg-[#154f4e]"
//             onClick={() => {
//               handleLogout();
//               setIsOpen(false);
//             }}
//           >
//             <IoLogOutOutline className="icon" /> Log Out
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default DoctorSidebar;
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoLogOutOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaHome, FaUserGraduate } from "react-icons/fa";

const DoctorSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return `px-6 py-4 flex gap-3 items-center cursor-pointer rounded-lg transition-all duration-300
      ${isActive ? "bg-teal-800 font-semibold" : "hover:bg-white/20 hover:border-l-[4px] hover:border-[#3498db] hover:pl-[16px]"}`;
  };

  return (
    <>
      {/* Burger Icon */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <IoClose className="ml-50 -mt-4" /> : <IoMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-[#008080] w-[250px] h-screen text-white flex flex-col pt-5 fixed top-0 z-40 transition-transform duration-300 shadow-lg
        ${isOpen ? "left-0" : "-left-[250px]"} md:left-0`}
      >
        <div className="pl-5 text-[22px] font-bold mb-5 text-gray-100">Doctor Logbook</div>
        <ul>
          <li
            className={getLinkStyle("/doctor-home")}
            onClick={() => {
              navigate("/doctor-home");
              setIsOpen(false);
            }}
          >
            <FaHome className="icon" /> Home
          </li>
          <li
            className={getLinkStyle("/doctor-logbook")}
            onClick={() => {
              navigate("/doctor-logbook");
              setIsOpen(false);
            }}
          >
            <FaUserGraduate className="icon" /> View Students
          </li>

          {/* ✅ Your Added Routes */}
          <li
            className={getLinkStyle("/doctor-student-analysis")}
            onClick={() => {
              navigate("/doctor-student-analysis");
              setIsOpen(false);
            }}
          >
            <FaUserGraduate className="icon" /> Analysis
          </li>
          <li
            className={getLinkStyle("/assign-task")}
            onClick={() => {
              navigate("/assign-task");
              setIsOpen(false);
            }}
          >
            <FaUserGraduate className="icon" /> Assign Task
          </li>

          {/* ✅ Partner's improved Account style */}
          <li
            className={getLinkStyle("/account")}
            onClick={() => {
              navigate("/account");
              setIsOpen(false);
            }}
          >
            <FaUserGraduate className="icon" /> Account
          </li>

          <li
            className="px-6 py-5 flex gap-3 items-center cursor-pointer rounded-md transition-all duration-300 hover:bg-[#154f4e]"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            <IoLogOutOutline className="icon" /> Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorSidebar;
