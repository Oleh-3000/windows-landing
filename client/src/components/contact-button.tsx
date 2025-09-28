import { useState } from "react";
import { Phone } from "lucide-react";
import ContactModal from "./contact-modal";

export default function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 right-6 bg-blue-600 hover:bg-green-600 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-500 z-40 hover:scale-110"
        data-testid="contact-button"
        aria-label="Зв'язатися з нами"
      >
        <Phone className="h-6 w-6 mx-auto" />
      </button>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
