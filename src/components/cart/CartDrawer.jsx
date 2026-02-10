// src/components/cart/CartDrawer.jsx
import useCartStore from "../../store/cartStore";

function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCartStore();

  if (!isOpen) return null;

  const subtotal = totalPrice();

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0b0b0b] border-l border-white/10 flex flex-col">
        {/* ================= HEADER ================= */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-white/60 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        {items.length === 0 ? (
          /* ========== EMPTY STATE ========== */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-white/60 mt-2 text-sm">
              Looks like you haven’t added anything yet.
            </p>
            <button
              onClick={closeCart}
              className="
                mt-6
                px-8 py-3
                bg-green-400 text-black
                rounded-full
                font-bold
                shadow-lg shadow-green-400/30
                transition-all duration-300
                hover:bg-green-300 hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
              "
            >
              Start shopping
            </button>
          </div>
        ) : (
          <>
            {/* ================= ITEMS ================= */}
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-white/10 pb-6"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold truncate">{item.name}</h4>
                      <p className="text-green-400 font-bold mt-1">
                        ₹{item.price * item.qty}
                      </p>
                    </div>

                    {/* Qty + Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-7 h-7 rounded-full border border-white/20 hover:bg-white/10 transition"
                        >
                          −
                        </button>

                        <span className="text-sm font-semibold w-6 text-center">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-7 h-7 rounded-full border border-white/20 hover:bg-white/10 transition"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-400 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= PRICE SUMMARY ================= */}
            <div className="px-6 py-5 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-sm text-white/70">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-sm text-white/70">
                <span>Delivery</span>
                <span className="italic">Calculated at checkout</span>
              </div>

              <div className="flex justify-between text-sm text-white/70">
                <span>Taxes</span>
                <span className="italic">Calculated at checkout</span>
              </div>

              <div className="border-t border-white/10 pt-4 mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-bold text-green-400 text-xl">
                  ₹{subtotal}
                </span>
              </div>

              <p className="text-xs text-white/50 mt-1">
                Final charges will be confirmed at checkout.
              </p>

              {/* ================= CTAs ================= */}
              <button
                className="
                  w-full mt-4 py-4
                  bg-green-400 text-black
                  rounded-full
                  font-bold text-lg
                  shadow-lg shadow-green-400/30
                  transition-all duration-300
                  hover:bg-green-300 hover:-translate-y-0.5
                  active:translate-y-0 active:shadow-md
                "
              >
                Checkout
              </button>

              <button
                onClick={closeCart}
                className="
                  w-full mt-3 py-3
                  rounded-full
                  border border-white/20
                  text-white/80
                  font-semibold
                  transition
                  hover:bg-white/5 hover:text-white
                "
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
