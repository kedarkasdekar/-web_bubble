import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ImageModal({ isOpen, onClose, currentImageIndex }) {
  const images = [
    { src: "https://i.imgur.com/XqQZ9jL.png", text: "When I dream about you every night 💕" },
    { src: "https://i.imgur.com/Y8wZGjL.png", text: "When I just wait for your message 🥺" },
    { src: "https://i.imgur.com/2KX9JL5.png", text: "I can't imagine the world without you 💔🥺" },
    { src: "https://i.imgur.com/QZ9X2Lk.png", text: "Me: He's my first priority ❤️👥" },
    { src: "https://i.imgur.com/XZ9X2Lk.png", text: "The best part of my life 💕" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-sm mx-4"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={images[currentImageIndex].src} 
              alt="Cute panda"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-center text-lg font-semibold text-gray-800">
              {images[currentImageIndex].text}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;