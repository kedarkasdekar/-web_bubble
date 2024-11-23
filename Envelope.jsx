import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

function Envelope() {
  const [isJumping, setIsJumping] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 1000);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showModal]);

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="w-64 h-40 relative cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1, 
          rotate: [0, 2, -2, 0],
          y: isJumping ? [-20, 0] : 0 
        }}
        transition={{ 
          scale: { duration: 0.5, type: "spring" },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 0.5, type: "spring" }
        }}
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-yellow-300 rounded-lg shadow-xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-yellow-600/50 transform rotate-45"></div>
              <div className="w-full h-[2px] bg-yellow-600/50 transform -rotate-45"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-8">
              <motion.div 
                className="w-3 h-3 bg-black rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-3 h-3 bg-black rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="mt-3">
              <motion.div 
                className="w-6 h-3 mx-auto relative overflow-hidden"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 border-b-4 border-black rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.button
        onClick={handleClick}
        className="px-6 py-3 bg-yellow-300 rounded-full text-yellow-800 font-bold shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Click me ❤️
      </motion.button>

      <ImageModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        currentImageIndex={imageIndex}
      />
    </div>
  );
}

export default Envelope;