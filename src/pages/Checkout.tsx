import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Address */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="First & Last Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Address 1
              </label>
              <input
                type="text"
                placeholder="412, Dubai St"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                Address 2
              </label>
              <input
                type="text"
                placeholder="23rd, Boulevard Ave"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                State
              </label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                <option>Select State</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Zip
              </label>
              <input
                type="text"
                placeholder="Zip code"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </form>
        </div>

        {/* Payment Method */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow mt-6 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="flex justify-between mb-6">
            <button
              className={`flex-1 p-3 rounded-lg text-center border ${
                paymentMethod === "card"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              Card
            </button>
            <button
              className={`flex-1 p-3 rounded-lg text-center border ${
                paymentMethod === "wallet"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              } mx-4`}
              onClick={() => setPaymentMethod("wallet")}
            >
              Wallet
            </button>
            <button
              className={`flex-1 p-3 rounded-lg text-center border ${
                paymentMethod === "bank"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              Bank Transfer
            </button>
          </div>

          {paymentMethod === "card" && (
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600">
                  Name on card
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600">
                  Card number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Expiry
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                    <option>MM</option>
                    {[...Array(12).keys()].map((m) => (
                      <option key={m}>{m + 1}</option>
                    ))}
                  </select>
                  <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                    <option>YYYY</option>
                    {[...Array(10).keys()].map((y) => (
                      <option key={y}>{2024 + y}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </form>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="/assets/img/Burberry_Shine.png"
              alt="Burberry shine"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-sm font-medium">Burberry shine</h3>
              <p className="text-sm text-gray-500">FENDI</p>
            </div>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$150</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$5</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>$165</span>
          </div>
          <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-md shadow-sm hover:bg-orange-600">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
