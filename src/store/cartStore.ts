import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  loadCart: () => void; // 🔥 Se agrega loadCart
};

export const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    return { cart: [] };
  },

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      let updatedCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  loadCart: () =>
    set(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      return { cart: savedCart };
    }),
}));
