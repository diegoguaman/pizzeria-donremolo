import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, removeAll?: boolean) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id, removeAll = false) =>
    set((state) => {
      if (removeAll) {
        return { cart: state.cart.filter((item) => item.id !== id) };
      }
      return {
        cart: state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      };
    }),

  clearCart: () => set({ cart: [] }),
}));
