import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/slices/sidebarSlice";
import { Link } from "react-router-dom";
import { image } from "../assets";
import { logout } from "../redux/slices/authSlice";
import { logoutUser } from "../api/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const userName = useSelector((state) => state.auth.user.name);
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "U";

  const handleLogout = () => {
    logoutUser();
    dispatch(logout());
  };

  return (
    <>
      <div
        className={`h-full flex flex-col justify-between transition-transform transform bg-green-800 text-white p-4 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-64`}
      >
        <div className="flex flex-col">
          <Link
            to="/app/dashboard"
            className="flex flex-row items-center gap-3"
          >
            <img
              src={image.logo}
              alt="Logo"
              className="w-10 h-10 cursor-pointer"
            />
            <h1 className="text-xl font-bold">To Do</h1>
          </Link>
          {/* <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-black"
          >
            {isOpen ? "Close" : "Open"}
          </button> */}
          <ul className="mt-8">
            <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
              Inbox
            </li>
            <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
              Today
            </li>
            <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
              Upcoming
            </li>
            <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
              Priority
            </li>
          </ul>{" "}
        </div>
        <div className="flex flex-row items-center mb-5">
          <div className="w-10 h-10 mr-2 flex items-center  justify-center rounded-full bg-white  text-green-900 text-lg font-bold">
            {userInitial}
          </div>
          <button
            className="cursor-pointer"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
