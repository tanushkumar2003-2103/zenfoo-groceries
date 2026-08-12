import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";

import { getProduct, type Product } from "@/data/products";
import { DELIVERY_FEE, DELIVERY_THRESHOLD, HANDLING_FEE } from "@/lib/format";

type CartLine = { productId: string; qty: number };

export type CartItem = CartLine & { product: Product };

type User = { name: string; email: string; provider: "email" | "google" };

type StoreValue = {
  hydrated: boolean;
  cart: CartItem[];
  cartCount: number;
  totals: {
    itemTotal: number;
    savings: number;
    delivery: number;
    handling: number;
    discount: number;
    grandTotal: number;
  };
  qtyOf: (productId: string) => number;
  addToCart: (product: Product, qty?: number) => void;
  setQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  wishlist: string[];
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  recentlyViewed: string[];
  trackView: (productId: string) => void;
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
  location: string;
  setLocation: (value: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [location, setLocationState] = useState("Hyderabad");

  useEffect(() => {
    setLines(read<CartLine[]>("zenfoo.cart", []));
    setWishlist(read<string[]>("zenfoo.wishlist", []));
    setRecentlyViewed(read<string[]>("zenfoo.recent", []));
    setUser(read<User | null>("zenfoo.user", null));
    setLocationState(read<string>("zenfoo.location", "Hyderabad"));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) write("zenfoo.cart", lines);
  }, [lines, hydrated]);
  useEffect(() => {
    if (hydrated) write("zenfoo.wishlist", wishlist);
  }, [wishlist, hydrated]);
  useEffect(() => {
    if (hydrated) write("zenfoo.recent", recentlyViewed);
  }, [recentlyViewed, hydrated]);

  const cart = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProduct(line.productId);
          return product ? { ...line, product } : null;
        })
        .filter(Boolean) as CartItem[],
    [lines],
  );

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const totals = useMemo(() => {
    const itemTotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
    const savings = cart.reduce((sum, i) => sum + (i.product.mrp - i.product.price) * i.qty, 0);
    const delivery = itemTotal === 0 || itemTotal >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const handling = itemTotal === 0 ? 0 : HANDLING_FEE;
    const discount = itemTotal >= 500 ? 30 : 0;
    return {
      itemTotal,
      savings,
      delivery,
      handling,
      discount,
      grandTotal: Math.max(0, itemTotal + delivery + handling - discount),
    };
  }, [cart]);

  const qtyOf = useCallback(
    (productId: string) => lines.find((l) => l.productId === productId)?.qty ?? 0,
    [lines],
  );

  const addToCart = useCallback((product: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === product.id);
      if (existing) {
        return prev.map((l) =>
          l.productId === product.id ? { ...l, qty: Math.min(20, l.qty + qty) } : l,
        );
      }
      return [...prev, { productId: product.id, qty }];
    });
    toast.success(`${product.name} added to cart`, { description: product.unit });
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.productId !== productId)
        : prev.map((l) => (l.productId === productId ? { ...l, qty: Math.min(20, qty) } : l)),
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
    toast("Removed from cart");
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      const has = prev.includes(product.id);
      toast(has ? "Removed from wishlist" : "Saved to wishlist", {
        description: product.name,
      });
      return has ? prev.filter((id) => id !== product.id) : [product.id, ...prev];
    });
  }, []);

  const trackView = useCallback((productId: string) => {
    setRecentlyViewed((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, 12));
  }, []);

  const signIn = useCallback((next: User) => {
    setUser(next);
    write("zenfoo.user", next);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    write("zenfoo.user", null);
    toast("Signed out");
  }, []);

  const setLocation = useCallback((value: string) => {
    setLocationState(value);
    write("zenfoo.location", value);
  }, []);

  const value: StoreValue = {
    hydrated,
    cart,
    cartCount,
    totals,
    qtyOf,
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    wishlist,
    isWishlisted: (id: string) => wishlist.includes(id),
    toggleWishlist,
    recentlyViewed,
    trackView,
    user,
    signIn,
    signOut,
    location,
    setLocation,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
