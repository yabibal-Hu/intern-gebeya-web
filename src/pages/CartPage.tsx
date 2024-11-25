import { Link, useParams } from "react-router-dom";
import star from "../assets/icon/star1.png";
import heart from "../assets/icon/gridicons_heart-outline.png";
import delivery from "../assets/icon/iconoir_delivery-truck.png";
import returnPolicy from "../assets/icon/hugeicons_delivery-return-01.png";
import cart from "../assets/icon/bag-2.png";
import data from "../assets/data.json";
import { Item } from "../types";

interface Params {
  productId: string;
  [key: string]: string | undefined;
}

const CartPage = () => {
  const { id } = useParams<Params>();
  const Items: Item[] = data.items;

  const item = Items.find((e) => e.id === parseInt(id || ""));
  return (
    <div className="min-h-screen  max-w-[1584px] mx-auto p-6 lg:p-20">
      {/* Cart Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Details Section */}
        <div
          className="lg:col-span-2 bg-white border 
         rounded-lg p-6"
        >
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="flex-shrink-0 ">
              <img
                src={item?.img}
                alt="Product"
                className="rounded-lg w-full md:w-64 bg-[#F2F2F2]"
              />
              <div className="flex justify-between mt-4 ">
                {item?.relatedImgs && item.relatedImgs.length > 0
                  ? item.relatedImgs.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Thumbnail"
                        className="w-12 h-12 bg-[#F2F2F2] rounded-lg"
                      />
                    ))
                  : [1, 2, 3, 4].map((_, index) => (
                      <img
                        key={index}
                        src="https://via.placeholder.com/50"
                        alt="Thumbnail"
                        className="w-12 h-12 rounded-lg"
                      />
                    ))}
              </div>
            </div>
            {/* Product Info */}
            <div className="flex-grow md:ml-6">
              <h1 className="text-xl font-semibold">{item?.name}</h1>
              <p className="text-sm text-gray-500">Brand: {item?.unique}</p>
              <div className="mt-2">
                <p className="text-lg font-bold text-gray-800">
                  ${item?.price}
                </p>
                <p className="text-sm line-through text-gray-400">$300</p>
                <p className="text-green-600 text-sm font-medium">-50%</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                80 units left + Shipping fee may vary on location
              </p>
              <p className="mt-1 text-sm flex gap-1 text-yellow-500">
                1k+ rating <img src={star} alt="" />
              </p>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center space-x-4">
                <p className="text-sm">Quantity:</p>
                <div className="flex items-center border rounded-lg ">
                  <button className="bg-[#FEA301] rounded-l-lg px-2 py-1 text-lg text-white">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="bg-[#FEA301] rounded-r-lg px-2 py-1 text-lg text-white">
                    +
                  </button>
                </div>
              </div>

              {/* Color and Size */}
              <div className="mt-4 flex items-center space-x-4 ">
                <p className="text-sm">Size:</p>
                <div className="flex space-x-2 mt-2">
                  {[20, 25, 32, 37].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[12px] ml-2 hover:underline cursor-pointer">
                  See all size guides
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <p className="text-sm">Color:</p>
                <div className="flex space-x-2 mt-2">
                  {[
                    "bg-[#EBCDD5]",
                    "bg-[#4444FF]",
                    "bg-[#FF4646]",
                    "bg-[#242425]",
                  ].map((color, i) => (
                    <div className="border border-gray-400 rounded-lg flex p-1">
                      <button
                        key={i}
                        className={`w-8 h-8 rounded-lg  ${color}`}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex space-x-4">
                <button className="flex items-center justify-center border-2 border-gray-500 text-gray-500 font-semibold py-2 rounded-lg w-[226px] h-[68px]">
                  <img src={cart} alt="" className="mr-2 w-[32px]" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#FEA301] text-white font-semibold py-2 rounded-lg w-[226px] h-[68px]">
                  Buy Now
                </button>
              </div>

              <p className="mt-4 text-green-600 text-sm">
                Pickup & Pay on collection available
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="bg-white border border-2 rounded-lg ">
          <h2 className="flex justify-center py-4 text-lg border-b pb-2 font-semibold">
            Delivery & Returns
          </h2>
          <div className="p-6">
            <div className="mt-4">
              <p className="text-sm font-medium">Location</p>
              <select className="mt-2 w-full border rounded-lg px-4 py-2">
                <option>Choose Location</option>
              </select>
              <select className="mt-2 w-full border rounded-lg px-4 py-2">
                <option>Sub Location</option>
              </select>
            </div>
            <div>
              <div className="flex items-start space-x-3 mt-4">
                <img
                  src={delivery}
                  alt="Delivery Icon"
                  className="w-6 h-6 mt-1"
                />
                <div>
                  <p className="text-base font-medium">Delivery</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Estimated delivery time is 1–12 business days.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>For Same-Day-Delivery:</strong> Please place your
                    order before 12pm.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Next-Day-Delivery:</strong> Orders placed after 12pm
                    will be delivered the next day.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Note:</strong> Availability may vary by location.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <img
                  src={returnPolicy}
                  alt="Return Policy Icon"
                  className="w-6 h-6 mt-1"
                />
                <div>
                  <p className="text-base font-medium">Return policy</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Guaranteed 7-day return policy</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    For details about return shipping options, please visit our
                    Contact page .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border border-2 rounded-lg mt-6 px-6 ">
        <div
          className="mt-8 bg-white lg:w-3/4
       rounded-lg"
        >
          <div className="flex gap-4 ">
            {["Overview", "Description", "Warranty", "Reviews"].map(
              (tab, i) => (
                <button
                  key={i}
                  className={`flex-1 py-4 text-center text-sm font-medium border rounded-full w-full ${
                    i === 0 ? "text-white  bg-[#FEA301] " : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
          <div className="p-6">
            <ul className="list-disc pl-4 text-sm text-gray-600">
              <li>
                Available in a wide range of colors, patterns, and themes to
                appeal to kids.
              </li>
              <li>
                Rubber outsoles with good traction to prevent slips and falls.
              </li>
              <li>
                Built-in arch support to help maintain healthy foot development.
              </li>
              <li>
                Soft insoles and adequate padding to support growing feet.
              </li>
            </ul>
          </div>
        </div>

        {/* Similar Items */}
        <div className="m-8">
          <h2 className="text-lg font-semibold">Similar Items You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="border rounded-2xl flex-shrink-0 w-64 lg:w-[435px] md:w-80 bg-white"
              >
                <div className="m-4 flex justify-center relative rounded-2xl h-40 lg:h-[258px] md:h-64 bg-gray-200">
                  <img
                    className="h-full object-contain"
                    src="https://via.placeholder.com/150"
                    alt="item"
                  />
                  <span className="absolute top-4 left-4">
                    <Link to="/">
                      <img
                        className="bg-white rounded-full w-8 md:w-10 p-2"
                        src={heart}
                        alt="Favorite"
                      />
                    </Link>
                  </span>
                  <p className="bg-white rounded-full text-xs px-2 py-1 absolute top-4 right-4">
                    In Stock
                  </p>
                </div>
                <div className="m-4">
                  <span className="text-xs flex justify-between">
                    <p className="border px-2 py-1 rounded-full">
                      example brand
                    </p>
                    <span className="flex items-center gap-1">
                      <img src={star} className="w-5 h-5" alt="Rating" />
                      <p className="text-gray-500">2k+ rating</p>
                    </span>
                  </span>
                  <p className="text-lg font-bold pt-3"> Item Name</p>
                  <p className="text-[18px] text-[#808080] font-[500]">
                   brand
                  </p>
                  <span className="flex justify-between items-center pt-3">
                    <p className="text-xl font-bold">$111</p>
                    <Link
                      to={`/cart`}
                      className="lg:w-[150px] lg:h-[74px ] text-white bg-[#FEA301] p-3  rounded-[16px]"
                    >
                      Add to Cart
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
