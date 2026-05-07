import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  hoverable?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  hoverable = false,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : 0,
      x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.72, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={hoverable ? { y: -4, transition: { duration: 0.22, ease: 'easeOut' } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
