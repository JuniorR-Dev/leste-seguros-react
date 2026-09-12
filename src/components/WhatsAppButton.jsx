import { MessageCircle } from "lucide-react";

const number = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}