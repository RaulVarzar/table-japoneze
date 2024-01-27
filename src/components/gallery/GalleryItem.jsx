import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

export default function GalleryItem({
  item,
  item: { image, brand, model, year, displacement, power, added, drive },
}) {
  const [viewDetails, setViewDetails] = useState(false);

  function handleToggle() {
    setViewDetails(!viewDetails);
  }

  // const variants = {
  //     initial: {
  //       opacity: 0
  //     },
  //     animate: {
  //       opacity:1
  //     },
  //     exit: {
  //         opacity:0
  //       },
  //     transition: {
  //         duration:0.3,
  //         ease: easeIn
  //       }
  //   };

  return (
    <>
      <div className="relative flex-col max-w-sm overflow-hidden rounded-md shadow-lg group bg-opacity-80">
        <img
          src={`http://localhost:8080/photos/${image}`}
          className="grid justify-center object-cover object-bottom w-full h-80"
          alt="car"
        />
        <LayoutGroup>
          <motion.div
            layout
            className="absolute left-0 flex flex-col items-center content-start w-full rounded-none -bottom-14 h-fit bg-base-200"
          >
            <motion.div
              layout
              className="relative left-0 right-0 flex flex-row items-center gap-4 px-4 py-2 mx-auto overflow-hidden rounded-t-lg cursor-pointer group -top-14 h-14 w-fit bg-base-200"
              onClick={() => handleToggle()}
            >
              <motion.div
                layout="position"
                className="flex flex-col items-center content-center mx-auto text-center w-fit"
              >
                <h3 className="overflow-hidden font-bold leading-none tracking-wider text-neutral-content text-md sm:text-lg ">
                  {brand} {model}
                </h3>
                <span className="font-semibold leading-none text-gray-600 opacity-70">
                  {year}
                </span>
              </motion.div>
              <i
                className={
                  'fa-solid fa-caret-up text-xl opacity-75 transition duration-300 group-hover:text-accent ' +
                  (viewDetails && ' rotate-180 text-accent')
                }
              ></i>
            </motion.div>

            <AnimatePresence mode="wait">
              {viewDetails && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative grid w-full gap-3 py-4 -top-14"
                >
                  <h3 className="mx-auto text-2xl font-semibold w-fit">
                    DETAILS
                  </h3>
                  <div className="w-full text-xs text-center bg-transparent stats md:text-sm stats-horizontal text-accent-content">
                    <div className="gap-1 px-3 py-1 stat xl:px-4">
                      <div className="opacity-60 stat-title text-base-content">
                        Power
                      </div>
                      <div className="text-lg stat-value text-neutral-content">
                        {power}
                      </div>
                    </div>
                    <div className="gap-1 px-3 py-1 xl:px-4 stat">
                      <div className="stat-title text-base-content opacity-60">
                        Displacement
                      </div>
                      <div className="text-lg stat-value text-neutral-content">
                        {displacement}
                      </div>
                    </div>
                    <div className="gap-1 px-3 py-1 stat xl:px-4">
                      <div className="stat-title text-base-content opacity-60">
                        Drivetrain
                      </div>
                      <div className="text-lg stat-value text-neutral-content">
                        {drive}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 mx-auto text-center w-fit">
                    <h3 className="text-lg font-semibold ">OWNER:</h3>
                    <button className="italic btn btn-outline btn-accent btn-sm text-md">
                      @raulvarzar
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </>
  );
}
