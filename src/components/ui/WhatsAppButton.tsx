import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

export default function WhatsAppButton() {
  const { cart } = useCartStore();
  const [showBot, setShowBot] = useState(false);

  const mensaje = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n` +
      cart.map((item) => `- ${item.quantity} ${item.name}`).join("\n") +
      `\nTotal: $${cart.reduce((total, item) => total + item.price * item.quantity, 0)}`
  );

  const whatsappURL = `https://wa.me/5124234234234234?text=${mensaje}`;

  return (
    <>
      {/* Botón flotante */}
      <button className="whatsapp-button" onClick={() => setShowBot(!showBot)}>
        💬
      </button>

      {/* Bot flotante de WhatsApp */}
      {showBot && (
        <div className="whatsapp-bot">
          <p>🤖 ¿Listo para tu pedido?</p>
          <button onClick={() => window.open(whatsappURL, "_blank")}>Enviar Pedido</button>
          <button onClick={() => setShowBot(false)}>Cerrar</button>
        </div>
      )}
    </>
  );
}
