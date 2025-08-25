import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import cartLogo from "../../assets/images/cart_icon.png";
import { Link } from "react-router-dom";
import { shopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const { totalCartItems } = useContext(shopContext);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const menuItems = [
    { id: "shop", lable: "Shop", path: "/" },
    { id: "men", lable: "Men", path: "/men" },
    { id: "women", lable: "Women", path: "/women" },
    { id: "kids", lable: "Kids", path: "/kids" },
  ];

  return (
    <section id="navbar" className="relative">
      <nav className="flex justify-between items-center w-full px-[7vw] md:px-[7vw] lg:px-[12vw] shadow py-2 fixed top-0 left-0 z-50 bg-white">
        <div className="flex jusify-center items-center gap-2">
          <img src={logo} alt="Logo" />
          <h1 className="text-3xl sm:text-5xl font-semibold">DevKart</h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="text-xl text-gray-600">
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(item.id)}
                  className={`cursor-pointer transition duration-300 ease-in-out ${
                    activeMenu == item.id
                      ? "underline underline-offset-6 decoration-2 decoration-red-500 "
                      : ""
                  }`}
                >
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          {localStorage.getItem("auth-token") ? (
            <Link
              onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace('/')}}
              className="flex hidden md:flex justify-center items-center text-xl border border-gray-600 text-gray-600 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-red-500 active:bg-gray-200 ml-2"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex hidden md:flex justify-center items-center text-xl border border-gray-600 text-gray-600 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-red-500 active:bg-gray-200 ml-2"
            >
              Login
            </Link>
          )}
          <Link to="/cart">
            <img src={cartLogo} alt="cart Loog" className="hidden md:flex" />
          </Link>
        </div>
        <div className="h-[20px] w-[20px] bg-red-500 text-white rounded flex justify-center items-center absolute top-4 right-6 sm:top-4 sm:right-45 hidden md:flex">
          {totalCartItems()}
        </div>
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="absolute top-[20px] right-[30px] text-xl md:hidden z-[100] text-red-500 font-bold text-[30px]"
        >
          {openMenu ? "\u274C" : "\u2630"}
        </div>

        {/* mobile menu items on small screen */}
        {openMenu && (
          <div className="absolute top-0 right-0 z-[50] bg-black/40 backdrop-blur-md text-white p-5 w-[60%] h-screen">
            <div className="flex flex-col items-center gap-4 mt-[80px] w-full">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  onClick={() => setOpenMenu(!openMenu)}
                  to={item.path}
                  className="
            text-lg 
            w-full 
            text-center 
            py-3 
            rounded-md 
            transition-all 
            duration-200 
            hover:bg-white/20 
            active:bg-white/30 
            hover:text-yellow-300 
            active:text-red-400
            border "
                >
                  {item.lable}
                </Link>
              ))}
              {localStorage.getItem('auth-token') ? (

                   <Link
                 
                onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/');setOpenMenu(!openMenu)}}
                className="border w-full py-3 rounded text-lg bg-red-500 text-center"
              >
                Logout
              </Link>

              ) :(

<Link
                to={"/login"}
                onClick={() => setOpenMenu(!openMenu)}
                className="border w-full py-3 rounded text-lg bg-red-500 text-center"
              >
                Login/SignUp
              </Link>

              )}
              
              <Link
                to={"/cart"}
                onClick={() => setOpenMenu(!openMenu)}
                className="border w-full py-3 rounded text-lg bg-red-500 text-center"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
