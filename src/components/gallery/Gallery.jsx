import GalleryItem from './GalleryItem.jsx';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Filters from './Filters.jsx';
import { Link } from 'react-router-dom';

const demoVariants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.2,
      ease: [0.32, 0.23, 0.4, 0.9],
    },
  },
};

export default function Gallery({ cars }) {
  const [brandFilter, setBrandFilter] = useState('');

  const handleSelectChange = (e) => {
    setBrandFilter(e.target.value);
  };

  //  filtering
  const filteredData = brandFilter
    ? cars.filter(
        (car) => car.brand.toLowerCase() === brandFilter.toLowerCase()
      )
    : cars;

  return (
    <>
      <div className="relative flex flex-row justify-between w-full px-6 pt-1 mx-auto overflow-auto ">
        <Filters brandFilter={brandFilter} onChange={handleSelectChange} />
        <Link to="/gallery/add-car" className="w-fit ">
          <button className="uppercase btn-neutral btn-md">
            <i className="mr-2 fa-solid fa-plus"></i>
            ADD YOUR CAR
          </button>
        </Link>
      </div>

      {filteredData && (
        <motion.div
          initial="hidden"
          animate="animate"
          variants={demoVariants}
          className="grid gap-4 p-8 mx-auto place-content-center xl:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 "
        >
          {filteredData.map((item) => (
            <motion.div variants={demoVariants} key={item.id}>
              <GalleryItem key={item.id} item={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
