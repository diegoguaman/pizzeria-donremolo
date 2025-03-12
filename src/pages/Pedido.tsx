import { useCartStore } from "../store/cartStore";
import MainLayout from "../components/layouts/MainLayout";
import { List, ListItem, ListItemText, Button, Typography } from "@mui/material";

export default function Pedido() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Tu Pedido</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemText primary={`${item.name} x ${item.quantity}`} secondary={`$${item.price * item.quantity}`} />
            <Button variant="contained" color="error" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </Typography>
      <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={clearCart}>
        Vaciar Carrito
      </Button>
    </MainLayout>
  );
}
