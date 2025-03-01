import { Card, CardContent, Typography, Button } from "@mui/material";
import { useCartStore } from "../store/cartStore";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart({ ...product, quantity: 1 })}>
          Agregar al Carrito
        </Button>
      </CardContent>
    </Card>
  );
}