import { create } from "zustand";

const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product) => {
    const items = get().items;
    const existing = items.find((i) => i.id === product.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        ),
      });
    } else {
      set({
        items: [...items, { ...product, qty: 1 }],
      });
    }
  },

  removeItem: (id) =>
    set({
      items: get().items.filter((i) => i.id !== id),
    }),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.qty, 0),

  totalPrice: () => get().items.reduce((sum, i) => sum + i.qty * i.price, 0),
}));

export default useCartStore;
