import { useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useCartStore } from "../store/cartStore";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  return (
    <Card sx={{ maxWidth: 300, margin: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 2 }}>
          <Button variant="contained" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Button>
          <Typography>{quantity}</Typography>
          <Button variant="contained" onClick={() => setQuantity((q) => q + 1)}>+</Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => addToCart({ ...product, quantity })}
        >
          Agregar al Carrito
        </Button>
      </CardContent>
    </Card>
  );
}
