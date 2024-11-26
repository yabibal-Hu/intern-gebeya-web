import { useState } from "react";
import up from "../../public/assets/icon/up.png";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import down from "../../public/assets/icon/down.png";
import victor from "../../public/assets/icon/Vector.png";
import search from "../../public/assets/icon/search.png";
import search2 from "../../public/assets/icon/search-2.png";
import uk from "../../public/assets/icon/uk.png";
import cart from "../../public/assets/icon/bag-3.png";
import menu from "../../public/assets/icon/menu.png";
import SidBar from "./SidBar";

export default function Header() {
  const { cartItems } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = (e: any) => {
    e(true);
  };

  const handleMouseLeave = (e: any) => {
    e(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 px-2 md:px-8 lg:px-4 xl:px-16">
      <nav className="bg-white  px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center ">
          {/* mobile */}
          <ul className="flex lg:hidden items-center gap-4 font-medium w-full justify-between">
            <li>
              <button onClick={() => setIsSidebarOpen(true)}>
                <img src={menu} alt="" />
              </button>
            </li>
            <li>
              <Link to="/">
                {/* align center */}
                <p className="font-bold text-3xl pb-3">ገ</p>
              </Link>
            </li>
            <li>
              <div className="relative ml-auto ">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full border rounded-2xl py-1 pl-10  focus:outline-none"
                />

                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img
                    className="h-3 w-3 text-gray-400"
                    src={search}
                    alt="Search Icon"
                  />
                </div>
              </div>
            </li>
            <li className="relative">
              <Link to="/cart">
                <img
                  className="h-8 w-8 p-2 rounded-full bg-[#882BEC]"
                  src={cart}
                  alt=""
                />
                {Object.keys(cartItems).length > 0 && (
                  <p className="absolute -top-0.5 -right-0.5 bg-[#FF0000] rounded-full w-3 h-3 flex justify-center items-center text-xs text-white">
                    {Object.keys(cartItems).length}
                  </p>
                )}
              </Link>
            </li>
          </ul>
          {isSidebarOpen && <SidBar setIsSidebarOpen={setIsSidebarOpen} />}
          {/* desktop */}
          <ul className="hidden lg:flex items-center w-full justify-between font-medium">
            <li>
              <Link to="/">
                <p className="font-bold text-7xl pb-4">ገ</p>
              </Link>
            </li>
            <li>
              <span
                className="relative"
                onMouseLeave={() => handleMouseLeave(setIsDropdownOpen)}
                onMouseEnter={() => handleMouseEnter(setIsDropdownOpen)}
              >
                <button className="flex items-center gap-2">
                  <img src={victor} alt="" />
                  Register/Sign Ini
                  <img src={isDropdownOpen ? up : down} alt="" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 bg-white w-40 z-10">
                    <ul className="font-bold bg-white flex flex-col gap-2 items-center border">
                      <li className=" border-b py-2">
                        <Link to="/">Register</Link>
                      </li>
                      <li className=" pb-3">
                        <Link to="/">Sin In</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/">Man</Link>
            </li>
            <li>
              <Link to="/">Woman</Link>
            </li>
            <li>
              <Link to="/">Kids</Link>
            </li>
            <li>
              <Link to="/">Accessories</Link>
            </li>
            <li>
              <span
                onMouseEnter={() => handleMouseEnter(setIsDropdownOpen2)}
                onMouseLeave={() => handleMouseLeave(setIsDropdownOpen2)}
                className="relative"
              >
                <button className="flex items-center">
                  More
                  <img src={isDropdownOpen2 ? up : down} alt="" />
                </button>
                {isDropdownOpen2 && (
                  <div className="absolute bg-white w-40 z-10">
                    <ul className="bg-white mt-3 flex flex-col gap-2 font-bold border">
                      <li className=" border-b p-1">
                        <Link to="/"> Perfumes</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Jewelries</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Gym wears</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Vintage wears</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Sport wear</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Pyjamas</Link>
                      </li>
                      <li className="border-b p-1">
                        <Link to="/">Slipers</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </li>
            <li>
              <div className="relative ml-auto rounded-2xl w-full max-w-md">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full border rounded-2xl py-2 pl-10 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img
                    className="h-5 w-5 text-gray-400"
                    src={search}
                    alt="Search Icon"
                  />
                </div>

                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center w-20 h-full bg-[#882BEC] rounded-r-2xl text-white hover:bg-[#6e23b3] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onClick={() => alert("Search button clicked!")}
                >
                  <img className="h-5 w-5" src={search2} alt="Search Icon" />
                </button>
              </div>
            </li>
            <li>
              <span className="flex items-center gap-2">
                <img className="h-5 w-5 text-gray-400" src={uk} alt="" />{" "}
                /Currency <img src={down} alt="" />
              </span>
            </li>
            <li>
              <Link to="/cart" className="relative">
                <img
                  className="h-10 w-10 p-2 rounded-full bg-[#882BEC]"
                  src={cart}
                  alt=""
                />
                {Object.keys(cartItems).length > 0 && (
                  <p className="absolute -top-1.5 -right-1.5 bg-[#FF0000] rounded-full w-5 h-5 flex justify-center items-center text-white">
                    {Object.keys(cartItems).length}
                  </p>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
