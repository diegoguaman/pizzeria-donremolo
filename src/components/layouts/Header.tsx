import { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { ShoppingCart, Remove, Add, Delete } from "@mui/icons-material";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#d32f2f" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Pizzería Don Remolo
            </Link>
          </Typography>

          <IconButton color="inherit" onClick={() => setIsOpen(true)}>
            <Badge badgeContent={totalItems} color="warning">
              <ShoppingCart fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🛒 Drawer del carrito */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ width: "300px", padding: "16px" }}>
          <Typography variant="h6">🛒 Carrito</Typography>
          <Divider />

          {cart.length === 0 ? (
            <Typography style={{ marginTop: "16px" }}>El carrito está vacío</Typography>
          ) : (
            <List>
              {cart.map((item) => (
                <ListItem key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <ListItemText primary={item.name} secondary={`$${item.price} x ${item.quantity}`} />
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <Remove />
                  </IconButton>
                  <IconButton onClick={() => addToCart(item)}>
                    <Add />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item.id, true)} color="error">
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}

          <Divider />
          <Typography variant="h6" style={{ marginTop: "16px" }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>

          <Button variant="contained" color="primary" fullWidth onClick={() => alert("Procesar pedido")}>
            Finalizar Pedido
          </Button>
          <Button variant="outlined" color="secondary" fullWidth onClick={clearCart} style={{ marginTop: "10px" }}>
            Vaciar Carrito
          </Button>
        </div>
      </Drawer>
    </>
  );
}
