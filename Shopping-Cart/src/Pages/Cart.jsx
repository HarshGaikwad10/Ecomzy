import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing cart");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-white">
      {cart?.length > 0 ? (
        <div className="flex justify-center items-start gap-x-28  mt-28 mb-16 w-[100%]">
          <div className="h-fit flex flex-col gap-20 w-[33%]">
            {cart?.map((item, index) => (
              <CartItem
                key={item.id}
                itemIndex={index}
                item={item}
                length={cart?.length}
              />
            ))}
          </div>
          <div className="sticky top-0">
                <div className="flex flex-col items-start justify-between h-[480px] mt-20 ">
                    <div>
                    <div className="text-green-700 text-[14px] font-semibold">
                        Your Cart
                    </div>
                    <div className="font-semibold text-[25px] uppercase text-green-700 mb-3">
                        Summary
                    </div>

                    <p className="text-[13px] text-green-700 font-semibold">
                        <span>Total Item: {cart?.length}</span>
                    </p>
                    </div>

                    <div className="flex flex-col items-start gap-y-4">
                    <p className="text-[12px]">
                        Total Amount:
                        <span className="font-semibold ml-1">${totalAmount}</span>
                    </p>
                    <button className="bg-green-700 text-white px-20 py-2 rounded-md">
                        Checkout Now
                    </button>
                    </div>
                </div>
        </div>
    </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-screen h-screen gap-20">
          <h1 className="text-2xl ">Cart Empty</h1>
          <NavLink to="/home">
            <button className="bg-green-700 text-white px-4 py-2 rounded-md">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;