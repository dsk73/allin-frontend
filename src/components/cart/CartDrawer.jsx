import useCartStore from "../../store/cartStore";

function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, totalPrice } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0b0b0b] border-l border-white/10 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-white/60 hover:text-white"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-white/60">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-white/10 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-white/60">Qty: {item.qty}</p>
                    <p className="text-green-400 font-bold">
                      ₹{item.price * item.qty}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold text-green-400">
                  ₹{totalPrice()}
                </span>
              </div>

              <button className="w-full py-3 bg-green-400 text-black rounded-full font-semibold hover:bg-green-300 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
