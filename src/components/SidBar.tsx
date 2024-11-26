import React from "react";
import close from "../../public/assets/icon/close.png";
import { Link } from "react-router-dom";
import down from "../../public/assets/icon/down.png";
import uk from "../../public/assets/icon/uk.png";

interface Props {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ setIsSidebarOpen }: Props) {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        onClick={closeSidebar}
        className="absolute inset-0 bg-black bg-opacity-50"
      ></div>

      <div className="relative w-1/2 bg-white text-sm z-50">
        <ul>
          <li className="border-b pl-5 px-5">
            <span className="flex justify-between">
              <button onClick={closeSidebar}>
                <img src={close} alt="Close" />
              </button>
              <Link to="/">
                <p className="font-bold text-3xl pr-10 pb-3">ገ</p>
              </Link>
            </span>
          </li>
          <li className="py-2 pl-5 flex gap-2 border-b">
            Register/Sign up
            <img className="-rotate-90" src={down} alt="Dropdown" />
          </li>
          <li className="pl-5 py-2">
            <Link to="/">
              <p>Our Categories</p>
            </Link>
          </li>
          <li className="pl-5 py-2">
            <Link to="/">
              <p>Men</p>
            </Link>
          </li>
          <li className="pl-5 py-2">
            <Link to="/">
              <p>Women</p>
            </Link>
          </li>
          <li className="pl-5 py-2">
            <Link to="/">
              <p>Kids</p>
            </Link>
          </li>
          <li className="pl-5 py-2">
            <Link to="/">
              <p>Accessories</p>
            </Link>
          </li>
          <li className="pl-5 py-2 border-b">
            <button className="flex gap-2">
              More <img src={down} alt="Dropdown" />
            </button>
          </li>
          <li className="pl-5 py-2">
            <button className="flex gap-2">
              <img src={uk} alt="Language" />
              EN/Currency{" "}
              <img className="-rotate-90" src={down} alt="Dropdown" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
