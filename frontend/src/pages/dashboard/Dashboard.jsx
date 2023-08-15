import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../store/reducers/userReducer";
import { NavData } from "../../components/NavData";

const Dashboard = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("logged out successfully");
    navigate("/");
  };

  return (
    <>
      <div className="relative">
        <div className=" bg-slate-100 flex">
          <div
            className={`${
              open ? "w-1/12 " : "w-[20%] "
            } hidden  bg-gray-600 md-lg:flex justify-center z-0 min-h-[100vh]`}
          >
            {/* for learge device */}
            {open ? (
              <>
                <div className=" md-lg:flex hidden  flex-col gap-4 items-center justify-center text-center ">
                  {NavData.map((t, i) => {
                    return (
                      <>
                        <NavLink
                          className={`${
                            pathname === `${t.path}` ? "bg-orange-300  " : " "
                          }  bashboard-nav-responsive`}
                          to={`${t.path}`}
                        >
                          {t.icon}
                        </NavLink>
                      </>
                    );
                  })}
                  <button onClick={handleLogout} className={`hover:bg-red-400 bashboard-nav-responsive`}>
                    <MdLogout />
                  </button>
                </div>
              </>
            ) : (
              <div className=" flex flex-col gap-4 items-center justify-center text-center ">
                {NavData.map((t, i) => {
                  return (
                    <>
                      <NavLink
                        className={`${pathname === `${t.path}` ? "bg-orange-300  " : " "}  bashboard-nav`}
                        to={`${t.path}`}
                      >
                        {t.icon} {t.title}
                      </NavLink>
                    </>
                  );
                })}
                <button onClick={handleLogout} className={`hover:bg-red-400 bashboard-nav`}>
                  <MdLogout /> Logout
                </button>
              </div>
            )}
          </div>
          {/* for mrdium device responsive */}
          {open && (
            <div className="md-lg:hidden z-50 absolute top-[63px] py-5 left-0 right-0 bg-gray-600  flex">
              <div className="w-full flex flex-col gap-4 items-center justify-center text-center ">
                {NavData.map((t, i) => {
                  return (
                    <>
                      <NavLink
                        className={`${pathname === `${t.path}` ? "bg-orange-300  " : " "}  bashboard-nav`}
                        to={`${t.path}`}
                      >
                        {t.icon} {t.title}
                      </NavLink>
                    </>
                  );
                })}
                <button onClick={handleLogout} className={`hover:bg-red-400 bashboard-nav`}>
                  <MdLogout /> Logout
                </button>
              </div>
            </div>
          )}
          <div className={`w-full md-lg:mx-5 mx-2 mt-[80px]`}>
            <Outlet />
          </div>
        </div>
        <div
          className={`${open ? "w-full md-lg:w-[93%]" : "md-lg:w-[84%] w-full"} absolute top-0 right-0 z-0`}
        >
          <div className="bg-gray-600 py-4 text-white">
            <div className="px-8 flex justify-between">
              <button onClick={() => setOpen(!open)} className="bg-white py-2 px-3 text-slate-700">
                <AiOutlineMenuFold />
              </button>
              <button>Hi! Admin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
