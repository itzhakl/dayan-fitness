import React from 'react';
import { motion } from 'framer-motion'

type Props = {
  pageNumber: number;
  color: string;
  setSelectedPage: (page: number) => void;
}

const Page = ({ pageNumber, color, setSelectedPage }: Props) => {
  return (
    <section
      id={`${pageNumber}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: color,
        height: '100vh',
        width: '100vw',
        fontSize: '70px'
      }}
    >
      <motion.div onViewportEnter={() => setSelectedPage(pageNumber)}>
        Page {pageNumber}
      </motion.div>
    </section>
  );
}

export default Page;
