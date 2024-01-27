// Animated Tabs
// this component will help you animate the title and content between 2 tabs
// the tab array needs to be declared in the parent component in this form:
//
// const tabs = [
//     {label : "first label", content: "first content"},
//     {label : "secont label", content: "second content"}
// ]
// the type of animation can be set via the 'style' prop, which can be either fixed or animatedContainer (default is fixed)
// fixed = the content will take the size of the largest element ad the tabs will simply animate by moving them left or right
// animatedContainer = the container will grow or shrink to fit the content

import { AnimatePresence, motion, easeIn } from 'framer-motion';

import LogInForm from './LogInForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../utils/animations.js';

// functions for animating swithing between tabs for animatedContainer
function FromLeft({ children, duration, delay, ...props }) {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0, scaleY: 0.8 }}
      animate={{ x: 0, opacity: 1, scaleY: 1 }}
      transition={{ duration: duration, delay: delay, ease: 'easeIn' }}
      exit={{ x: '-100%', opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
function FromRight({ children, duration, delay }) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0, scaleY: 0.8 }}
      animate={{ x: 0, opacity: 1, scaleY: 1 }}
      transition={{ duration: duration, delay: delay, ease: 'easeIn' }}
      exit={{ x: '100%', opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

const variants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
  },
  transition: {
    ease: easeIn,
    duration: 1,
  },
};

export default function AnimatedTabs({ bg, error }) {
  const mode = 'animatedContainer';
  const mytabs = [
    {
      label: 'AUTENTIFICARE',
      content: <LogInForm error={error} />,
      mode: 'login',
    },
    { label: 'CONT NOU', content: <SignUpForm />, mode: 'signup' },
  ];
  // make sure there are only 2 tabs
  const tabs = mytabs.slice(0, 2);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <FadeIn delay={0.2} duration={0.1}>
      <motion.div
        layout
        className={
          (bg || 'bg-neutral ') +
          ' overflow-hidden shadow-xl flex flex-col rounded-md bg-opacity-60 w-full sm:min-w-[500px] relative pb-3 gap-y-3'
        }
      >
        <motion.ul
          layout="position"
          key={selectedTab}
          className="z-20 flex flex-row justify-center gap-0 mx-auto overflow-hidden bg-opacity-0 w-fit sm:w-full bg-base-100"
          transition={{ layout: { duration: 0.25, ease: 'easeIn' } }}
        >
          {tabs.map((item) => (
            <Link
              to={`?mode=${item.mode}`}
              key={item.label}
              className="relative z-50 w-full px-10 pt-4 pb-4 text-center cursor-pointer"
              onClick={() => {
                setSelectedTab(item);
              }}
            >
              <li>
                <span
                  className={
                    'z-10 mx-auto relative text-center transition-all duration-300 text-neutral-content whitespace-nowrap  ' +
                    (selectedTab.label === item.label
                      ? ' opacity-100'
                      : ' opacity-30')
                  }
                >
                  {item.label}
                </span>
                {selectedTab.label === item.label && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-0 h-full mx-10 bg-opacity-25 border-b-2 bg-neutral border-accent"
                    layoutId="background"
                    transition={{ layout: { duration: 0.25, ease: 'easeIn' } }}
                  />
                )}
              </li>
            </Link>
          ))}
        </motion.ul>
        {mode === 'animatedContainer' && (
          <AnimatePresence mode="popLayout">
            <motion.div layout="position" key={selectedTab.label}>
              {selectedTab.label === tabs[0].label && (
                <FromLeft delay={0.1} duration={0.5}>
                  {selectedTab.content}
                </FromLeft>
              )}
              {selectedTab.label === tabs[1].label && (
                <FromRight delay={0.1} duration={0.5}>
                  {selectedTab.content}
                </FromRight>
              )}
            </motion.div>
          </AnimatePresence>
        )}
        {mode !== 'animatedContainer' && (
          <motion.div
            key={selectedTab}
            variants={variants}
            initial="initial"
            transition="transition"
            animate={selectedTab === tabs[1] ? 'animate' : 'initial'}
            className="flex flex-row items-center h-fit shrink-0"
          >
            <div className="w-full shrink-0 h-fit">{tabs[1].content}</div>
            <div className="w-full shrink-0 h-fit">{tabs[0].content}</div>
          </motion.div>
        )}
        <span className="py-0 tracking-wide text-center text-rose-600 brightness-75">
          {error && error.message}
        </span>
      </motion.div>
    </FadeIn>
  );
}
