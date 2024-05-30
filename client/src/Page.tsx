import { motion } from 'framer-motion';
import WhatsAppAccessComponent from './components/mainContext';

const Page = () => {
  return (
    <section className="flex items-center justify-center">
      <motion.div>
        <div className="">
          <WhatsAppAccessComponent />
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
