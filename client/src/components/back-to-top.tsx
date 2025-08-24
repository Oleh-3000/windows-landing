import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-accent transition-all z-40 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      data-testid="back-to-top"
    >
      <ArrowUp className="h-6 w-6 mx-auto" />
    </button>
  );
}
