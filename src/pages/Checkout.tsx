import { useCartStore } from "../store/cartStore";
import { useEffect } from "react";

const Checkout = () => {
  const { cart, clearCart, loadCart } = useCartStore();

  useEffect(() => {
    loadCart(); 
    console.log("Estado del carrito en Checkout:", cart);
  }, []); 

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
    <div>
      <h2> Resumen del Pedido</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} x{item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total: </strong>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>

      {cart.length > 0 && (
        <>
          <button
            onClick={() => {
              const whatsappLink = generateWhatsAppLink();
              console.log("Enlace de WhatsApp generado:", whatsappLink);
              window.location.href = whatsappLink;
            }}
            style={{ padding: "10px 20px", fontSize: "16px", background: "#25D366", color: "white", border: "none", cursor: "pointer" }}
          >
             Enviar pedido por WhatsApp
          </button>

          <button
            onClick={() => {
              clearCart();
              loadCart(); 
            }}
            style={{ marginLeft: "10px", padding: "10px 20px", fontSize: "16px", background: "red", color: "white", border: "none", cursor: "pointer" }}
          >
             Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
