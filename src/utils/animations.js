import { cubicBezier, motion } from 'framer-motion';

const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

export function JumpIn({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ scale: 0.2, y: -40, opacity: 1 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0, opacity: 1, y: 40 }}
      transition={{ duration: duration, delay: delay, ease: 'anticipate' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration, delay: delay, ease: easing }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FromTop({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ translateY: '-100%' }}
      animate={{ translateY: 0 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FromBottom({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ translateY: '100%', opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      exit={{ opacity: 0, translateY: '100%' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FromLeft({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay, ease: 'easeIn' }}
      exit={{ x: '-100%', opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FromRight({ children, duration, delay }) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay, ease: 'easeIn' }}
      exit={{ x: '100%', opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeOut({ children, duration, delay }) {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ShrinkOut({ children, duration, delay }) {
  return (
    <motion.div
      exit={{
        opacity: 0,
        scale: 0.2,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
