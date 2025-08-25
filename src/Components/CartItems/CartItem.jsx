import React, { useContext } from "react";
import { shopContext } from "../../Context/ShopContext";

const CartItem = () => {
  const { all_product, cartItems, removeFromCart, totalCartAmount } =
    useContext(shopContext);

  return (
    <section className="px-[5vw] lg:px-[12vw] py-10">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      {/* Items */}
      <div className="flex flex-col gap-6">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div
                key={e.id}
                className="relative flex flex-col sm:flex-row items-start gap-4 bg-white border rounded-xl shadow-sm p-4"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(e.id)}
                  className="absolute top-2 right-2 text-red-500 text-lg hover:text-red-700 transition"
                  aria-label="Remove item"
                >
                  ✕
                </button>

                {/* Product Image */}
                <div className="w-28 h-28 flex-shrink-0">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <h2 className="text-lg font-semibold">{e.name}</h2>
                  <p className="text-gray-600">Price: ${e.new_price}</p>

                  <div className="mt-2 flex items-center gap-4">
                    <input
                      type="number"
                      value={cartItems[e.id]}
                      readOnly
                      className="w-16 border rounded-md text-center py-1"
                    />
                    <p className="font-semibold">
                      Total: ${e.new_price * cartItems[e.id]}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Bottom Section: Cart Total + Promo */}
      <div className="flex flex-col lg:flex-row justify-between py-10 w-full gap-10">
        {/* Cart total section */}
        <div className="flex flex-col justify-start w-full lg:w-[50%] gap-5 px-3 bg-white border rounded-xl shadow-sm p-5">
          <h1 className="text-xl font-semibold mb-3">Cart Summary</h1>
          <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <p>Sub Total</p>
            <p>${totalCartAmount()}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <p>Shipping Fee</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between items-center font-bold py-2">
            <p>Total</p>
            <p>${totalCartAmount()}</p>
          </div>
          <button className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4">
            Proceed to Checkout
          </button>
        </div>

        {/* Promo code section */}
        <div className="w-full lg:w-[50%] px-3 flex flex-col justify-start bg-white border rounded-xl shadow-sm p-5">
          <p className="mb-2">If you have a promo code, enter it here:</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full sm:w-[300px] py-3 px-4 border rounded-lg bg-gray-100"
            />
            <button className="text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
