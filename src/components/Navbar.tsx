import { AppBar, Toolbar, Typography, IconButton, Drawer, Badge, List, ListItem, ListItemText, Button, Divider, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

export default function Navbar() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "5491122334455"; 
    let message = "Hola, quiero hacer un pedido:\n";

    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} - $${item.price * item.quantity}\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\n💰 Total: $${total}`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pizzería Don Remolo
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, padding: "20px" }}>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            🛒 Carrito de Compras
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          {cart.length === 0 ? (
            <Typography variant="body1">El carrito está vacío.</Typography>
          ) : (
            <>
              <List>
                {cart.map((item) => (
                  <ListItem key={item.id} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ListItemText primary={`${item.name}`} secondary={`$${item.price * item.quantity}`} />
                    
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="small" 
                      onClick={() => decreaseQuantity(item.id)}
                      sx={{ minWidth: "32px", fontSize: "18px" }}
                    >
                      -
                    </Button>

                    <Typography sx={{ margin: "0 8px", fontWeight: "bold" }}>
                      {item.quantity}
                    </Typography>

                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="small" 
                      onClick={() => increaseQuantity(item.id)}
                      sx={{ minWidth: "32px", fontSize: "18px" }}
                    >
                      +
                    </Button>

                    <IconButton onClick={() => removeFromCart(item.id)} color="error">
                      <DeleteForeverIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </Typography>

              <Button 
                fullWidth 
                variant="contained" 
                color="secondary" 
                onClick={clearCart} 
                sx={{ marginTop: 2 }}
              >
                Vaciar Carrito
              </Button>

              <Button 
                fullWidth 
                variant="contained" 
                color="success" 
                startIcon={<WhatsAppIcon />}
                sx={{ marginTop: 1 }}
                onClick={() => window.location.href = generateWhatsAppLink()}
              >
                Enviar Pedido por WhatsApp
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
