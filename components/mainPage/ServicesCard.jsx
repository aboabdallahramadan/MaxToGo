"usee client";
import { motion } from "framer-motion";

const ServicesCard = ({Icon, title, text}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, translateY: -10 }}
      className="flex-1 min-w-[300px] max-w-[400px]"
    >
      <div className="p-8 h-full flex flex-col items-center justify-start gap-6 
        hover:shadow-2xl hover:shadow-primary/20 border border-gray-700 
        rounded-xl bg-gray-800 transition-all duration-300">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-2"
        >
          <Icon className="text-primary text-4xl"/>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </motion.div>
        <p className="text-center text-gray-300 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  )
}

export default ServicesCard
