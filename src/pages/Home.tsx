import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import MainLayout from "../layouts/MainLayout";
import { useCartStore } from "../store/cartStore";

const products = [
  { id: 1, name: "Pizza Margarita", price: 10, category: "Pizzas" },
  { id: 2, name: "Empanada de Carne", price: 5, category: "Empanadas" },
  { id: 3, name: "Coca Cola 500ml", price: 3, category: "Bebidas" },
  { id: 4, name: "Pizza Cuatro Quesos", price: 12, category: "Pizzas" },
  { id: 5, name: "Cerveza", price: 4, category: "Bebidas" },
  { id: 6, name: "Postre de Chocolate", price: 6, category: "Postres" },
];

export default function Home() {
  const { cart, loadCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    loadCart();
    console.log("Carrito en Home:", cart);
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>
        Menú de Productos
      </Typography>

      {/* Filtro de categorías */}
      <div style={{ marginBottom: "20px" }}>
        {["Pizzas", "Empanadas", "Bebidas", "Postres"].map((category) => (
        <Button
        key={category}
        variant="outlined"
        onClick={() => setSelectedCategory(category)}
        style={{
          marginRight: "10px", 
          marginBottom: "10px", 
          backgroundColor: selectedCategory === category ? "#ccc" : "transparent",
        }}
      >
        {category}
      </Button>
      
        ))}
        <Button
          variant="outlined"
          onClick={() => setSelectedCategory("")}
          style={{ marginLeft: "10px" }}
        >
          Ver Todo
        </Button>
      </div>

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}
