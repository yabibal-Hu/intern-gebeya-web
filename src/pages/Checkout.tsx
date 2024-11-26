import { useState } from "react";
import data from "../../public/assets/data.json";
import { useCart } from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bank from "../../public/assets/icon/bank.png";
import card from "../../public/assets/icon/card.png";
import wallet from "../../public/assets/icon/wallet.png";
import { Item } from "../types";

const Checkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const Items: Item[] = data.items;
  const { cartItems, removeItem } = useCart();

  const parsedId = parseInt(id || "", 10);

  if (!parsedId || !cartItems[parsedId]) {
    return null;
  }

  const cartItem = Items.find((item) => item.id === parsedId);

  if (!cartItem) {
    return null;
  }


  const Quantity = cartItems[parsedId];
  const [paymentMethod, setPaymentMethod] = useState("card");

  const tax = cartItem?.price * 0.15;
  const shipping = cartItem?.price * 0.05;

  const subtotal = cartItem?.price * Quantity;
  const total = subtotal + tax + shipping;

  const handlePayment = () => {
    // process payment
    removeItem(parsedId);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 gap-0 md:gap-8">
        <div className="flex flex-col md:flex-row-reverse justify-end gap-0 md:gap-8">
          {/* Order Summary */}
          <div className="bg-white p-6 md:rounded-[16px]  rounded-t-[8px] border relative lg:w-96">
            <h2 className="text-lg  font-semibold mb-4">Order Summary</h2>
            <div className=" border-b mb-4 w-full left-0 absolute"></div>
            <div className="flex pt-6 space-x-6 mb-6">
              <div className="w-24 h-24 bg-[#F2F2F2] rounded-md flex items-center justify-center">
                <img
                  src={cartItem?.img}
                  alt="Burberry shine"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">Burberry shine</h3>
                <p className="text-sm text-gray-500">FENDI</p>
              </div>
            </div>
            <div className="text-sm space-y-3 text-gray-500 text-lg font-medium ">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-gray-900  text-lg font-medium">
                  ${subtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-gray-900  text-lg font-medium">
                  ${shipping}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-gray-900  text-lg font-medium">
                  ${tax}
                </span>
              </div>
            </div>
            <div className=" border-b my-4 w-full left-0 absolute"></div>
            <div className="flex justify-between font-semibold text-lg pt-4 mt-4">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              onClick={handlePayment}
              className="flex justify-center mt-6 w-5/6 mx-auto bg-[#FEA301] text-white py-3 rounded-md"
            >
              Place order
            </button>
          </div>

          {/* Shipping Address */}
          <div className="md:w-2/3 bg-white p-6 border md:rounded-[16px]  ">
            <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-3 col-span-2">
                <label className="block text-lg font-medium ">Name</label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="mt-1 block w-full border border-gray-300 p-3 rounded-md  focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="md:col-span-3 col-span-2">
                <label className="block text-lg mt-2 font-medium">
                  Address 1
                </label>
                <input
                  type="text"
                  placeholder="412, Dubai St"
                  className="mt-1 block w-full border p-3 border-gray-300 rounded-md  focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="md:col-span-3 col-span-2">
                <label className="block text-lg mt-2 font-medium">
                  Address 2
                </label>
                <input
                  type="text"
                  placeholder="23rd, Boulevard Ave"
                  className="mt-1 block w-full border p-3 border-gray-300 rounded-md  focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="">
                <label className="block text-lg mt-2 font-medium">City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="mt-1 block w-full border p-3 border-gray-300 rounded-md  focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="">
                <label className="block text-lg mt-2 font-medium">State</label>
                <select className="mt-1 block w-full border p-3 border-gray-300 rounded-md  focus:ring-orange-500 focus:border-orange-500">
                  <option>Select State</option>
                  <option>test-1</option>
                  <option>test-2</option>
                </select>
              </div>
              <div className="">
                <label className="block text-lg mt-2 font-medium">Zip</label>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="mt-1 block w-full border p-3 border-gray-300 rounded-md  focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Payment Method */}
        <div className="md:w-2/3 w-full bg-white p-6 border border-2xl md:rounded-[16px] rounded-b-[8px] md:mt-6 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="flex justify-between mb-6">
            <button
              className={`flex flex-col  w-1/3 justify-center items-center py-5 rounded-lg text-center border ${
                paymentMethod === "card"
                  ? "bg-[#FEA301] text-white border-orange-500"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <img src={card} alt="" />
              Card
            </button>
            <button
              className={`flex flex-col gap-2 w-1/3 justify-center items-center p-3 rounded-lg text-center border ${
                paymentMethod === "wallet"
                  ? "bg-[#FEA301] text-white border-orange-500"
                  : "border-gray-300"
              } mx-4`}
              onClick={() => setPaymentMethod("wallet")}
            >
              <img src={wallet} alt="" />
              Wallet
            </button>
            <button
              className={`flex flex-col gap-2 w-1/3 justify-center items-center  p-3 rounded-lg text-center border ${
                paymentMethod === "bank"
                  ? "bg-[#FEA301] text-white border-orange-500"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              <img src={bank} alt="" />
              Bank Transfer
            </button>
          </div>

          {paymentMethod === "card" && (
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-3">
                <label className="block text-md font-medium text-gray-900 my-3">
                  Name on card
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="col-span-3">
                <label className="block text-md font-medium text-gray-900 my-3">
                  Card number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-md font-medium text-gray-900 my-3">
                  Expiry
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select className="block w-full border border-gray-300 p-3 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>MM</option>
                    {[...Array(12).keys()].map((m) => (
                      <option key={m}>{m + 1}</option>
                    ))}
                  </select>
                  <select className="block w-full border border-gray-300 p-3 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>YYYY</option>
                    {[...Array(10).keys()].map((y) => (
                      <option key={y}>{2024 + y}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-900 my-3">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="mt-1 block w-full border border-gray-300 p-3  rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
