import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useCartStore } from "../store/cartStore";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <Card sx={{ maxWidth: 300, margin: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        {cartItem ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
            <Button size="small" variant="contained" color="primary" onClick={() => decreaseQuantity(product.id)}>
              <Remove />
            </Button>
            <Typography variant="body1">{cartItem.quantity}</Typography>
            <Button size="small" variant="contained" color="primary" onClick={() => increaseQuantity(product.id)}>
              <Add />
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }}
            startIcon={<ShoppingCart />}
            onClick={() => addToCart(product)}
          >
            Agregar al Carrito
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
