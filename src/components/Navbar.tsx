import { IconButton } from "@mui/material";
// import logo from "../assets/logo.png";
import { Search, Person, Menu } from "@mui/icons-material";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { Link } from "react-router-dom";
// import { setLogout } from "../redux/state";
const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false);
//   const user = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center pt-2 pb-[5px] sm:pt-2 sm:pb-4 relative">
      {/* logo */}
      <div className="ml-2">
        <a href="/">
          <img src="" alt="logo" className="w-[100px] cursor-pointer" />
        </a>
      </div>
      {/* input search bar */}
      <div className="border border-grey-500 rounded-[30px] h-[50px] px-[20px] gap-[40px] items-center hidden md:flex lg:flex xl:flex sm:flex">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none "
        />
        <IconButton>
          <Search sx={{ color: "#F8395A" }} />
        </IconButton>
      </div>
      {/* user navigation  */}
      <div className="flex items-center justify-center gap-[20px] ">
        {user ? (
          <a
            href="/create-listing"
            className="no-underline text-blue-800 font-bold cursor-pointer sm:hidden md:flex lg:flex xl:flex hover:text-[#F8395A]"
          >
            Become a Host
          </a>
        ) : (
          <a
            href="/login"
            className=" no-underline text-blue-800 font-bold cursor-pointer sm:hidden md:flex lg:flex xl:flex hover:text-[#F8395A]"
          >
            Become a Host
          </a>
        )}

        <div className="border-2 border-gray-400 mr-2 flex rounded-ss-2xl shadow-md shadow-gray-400 p-2 relative">
          <button
            className="gap-2 flex outline-none"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            <Menu sx={{ color: "darkgrey" }} />
            {!user ? (
              <Person sx={{ color: "darkgrey" }} />
            ) : (
              <img
                src={`http://localhost:3001/${user.profileImagePath.replace(
                  "public",
                  ""
                )}`}
                alt="profile  photo"
                className="object-cover rounded-[50%]"
              />
            )}
          </button>
        </div>

        {/* User Access8 */}
        {/* <div className="  absolute items-center   mt-32 z-10 ml-24 shadow shadow-gray-700  rounded-lg  ">
          {dropdownMenu && user && (
            <div className="flex flex-col mb-2 gap-2">
              <Link to="/login" className="font-bold hover:bg-slate-400 px-6">
                Log In
              </Link>
              <Link
                to="/register"
                className="font-bold px-6 hover:bg-green-200"
              >
                Sign Up
              </Link>
            </div>
          )} */}
          {/* MenU List  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
