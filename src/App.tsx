import { Component, createSignal } from "solid-js";
import type { Product } from "../product";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import { Header } from "./components/Header";

const App: Component = () => {
  const [search, setSearch] = createSignal("");
  const [cart, setCart] = createSignal<Product[]>([]);
  const [products, setProducts] = createSignal<Product[]>([]);

  return (
      <div>
      <Header
        cart={cart ?? []}
        onClearCart={() => setCart([])}
        search={search}
        onSetSearch={(str) => setSearch(str)}
      />
      <div>{search()}</div>
    </div>
  );
};

export default App;
