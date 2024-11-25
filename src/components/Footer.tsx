import insta from "../assets/icon/insta.png";
import whatsapp from "../assets/icon/whatsapp.png";
import x from "../assets/icon/x.png";
import logo from "../assets/icon/logo.png";
import next from "../assets/icon/next.png";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Footer() {
  const [about, setAbout] = useState(false);
  const [product, setProduct] = useState(false);
  const [discover, setDiscover] = useState(false);
 
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center lg:h-[423px] h-[280px] bg-[#882BEC]">
        <div className="flex flex-col mb-[24px] justify-between items-center lg:ml-[80px] ">
          <img className="w-[40px] lg:w-[221px] mb-[20px]" src={logo} alt="" />
          <div className="flex gap-5 w-[120px] h-[24px]">
            <Link to="/">
              <img src={insta} alt="" />
            </Link>
            <Link to="/">
              {" "}
              <img src={whatsapp} alt="" />
            </Link>
            <Link to="/">
              <img src={x} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:border-none border-b-2 border-white pb-[18px] gap-[18px] lg:mr-[80px] w-[382px] lg:w-fit mt-[24px] lg:mt-0  text-white text-[16px] lg:text-[28px] font-[600] lg:font-[700] ">
          <div className="flex lg:flex-col lg:items-start  justify-between">
            <button onClick={() => setAbout(!about)}>About</button>
            <button>
              <img src={next} className="lg:hidden" alt="" />
            </button>
            <ul className="hidden lg:flex flex-col gap-[8px] text-[24px] font-[400]">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">News & Blog</Link>
              </li>
              <li>
                <Link to="/">Location</Link>
              </li>
            </ul>
          </div>
          <div className="flex lg:flex-col lg:items-start justify-between">
            <button onClick={() => setProduct(!product)}>Products</button>
            <button>
              <img src={next} className="lg:hidden" alt="" />
            </button>
            <ul className="hidden lg:flex flex-col gap-[8px] text-[24px] font-[400]">
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Stor</Link>
              </li>
              <li>
                <Link to="/">Feature</Link>
              </li>
            </ul>
          </div>
          <div className="flex lg:flex-col lg:items-start justify-between">
            <button onClick={() => setDiscover(!discover)}>Discover</button>
            <button>
              <img src={next} className="lg:hidden" alt="" />
            </button>
            <ul className="hidden lg:flex flex-col gap-[8px] text-[24px] font-[400]">
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Customer</Link>
              </li>
              <li>
                <Link to="/">Affiliate</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
