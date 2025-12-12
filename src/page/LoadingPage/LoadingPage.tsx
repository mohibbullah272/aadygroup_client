import React from 'react';
import { motion} from 'motion/react';

const LoadingPage: React.FC = () => {



  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50"> 
      <motion.p 
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading.........
      </motion.p>
      
      <motion.div 
        className="mt-8 w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '12rem' }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-red-600 dark:bg-blue-400"
          initial={{ width: 0 }}
          animate={{ 
            width: ['0%', '100%', '0%'],
            x: ['0%', '100%', '0%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingPage;