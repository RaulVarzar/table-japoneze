import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = require.context('../images/saisho', true);
const imageList = images.keys().map((image) => images(image));

export default function PhotoGrid() {
  const location = useLocation();
  const { title } = location.state;

  return (
    <div className="flex flex-col gap-6 p-2 md:px-4 xl:px-8">
      <h3 className="mx-auto text-2xl font-bold uppercase w-fit">{title}</h3>
      <PhotoProvider>
        <div className="columns-1 gap-1 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-4">
          {imageList.map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: 'anticipate',
              }}
              key={image}
              className="relative transition-all duration-300 cursor-pointer hover:scale-102 group"
            >
              <a
                href={image}
                download={image}
                className="absolute z-10 transition-all duration-200 opacity-0 bottom-1 right-1 group-hover:opacity-100"
              >
                <i className="px-4 py-2 text-xl text-white transition-all duration-200 fa-solid fa-download hover:text-accent"></i>
              </a>
              <PhotoView src={image} key={index}>
                <img src={image} alt="" />
              </PhotoView>
            </motion.div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
