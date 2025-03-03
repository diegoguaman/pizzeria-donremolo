import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import MainLayout from "../layouts/MainLayout";
import { useCartStore } from "../store/cartStore";

import { useEffect } from "react";

const products = [
  { id: 1, name: "Pizza Margarita", price: 10, category: "Pizzas" },
  { id: 2, name: "Empanada de Carne", price: 5, category: "Empanadas" },
  { id: 3, name: "Coca Cola 500ml", price: 3, category: "Bebidas" },
];

export default function Home() {
  const { cart, loadCart } = useCartStore();

  
  useEffect(() => {
    loadCart();
    console.log("Carrito en Home:", cart);
  }, []); 
  return (
    <MainLayout>
      <h2>Menú de Productos</h2>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

    
    </MainLayout>
  );
}
