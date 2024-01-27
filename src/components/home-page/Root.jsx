import { FadeIn } from '../../utils/animations';
import Banner from './Banner';
import Socials from './Socials';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import { latestUploads } from '../../data';

export default function Root() {
  return (
    <FadeIn duration={0.5} delay={0.1}>
      <div className="relative flex flex-col w-full h-auto pt-1 mx-auto mt-2 overflow-auto z-1 no-scrollbar ">
        <div className="flex flex-col gap-2 mx-auto text-center lg:gap-4">
          {/* <Link to={'event'}>
            <div className="p-4 font-bold text-center text-white rounded-lg bg-secondary hover:underline">
              INSCRIE-TE LA SAISHO FEST 2024 !
            </div>
          </Link> */}
          <div className="grid grid-cols-1 grid-rows-3 gap-y-2 xs:grid-rows-2 md:grid-rows-5 lg:grid-rows-1 xl:gap-y-0 xl:gap-x-4 xl:grid-cols-6">
            <FadeIn
              delay={0.35}
              duration={0.3}
              className="relative flex row-span-1 overflow-hidden rounded-lg cursor-pointer xl:col-span-4 md:row-span-3 xs:row-span-1"
            >
              <Banner text={'Album - Saisho Meet 2023'} link={'photos'} />
            </FadeIn>

            <FadeIn
              delay={0.5}
              duration={0.3}
              className="grid content-between w-full row-span-2 gap-4 p-4 rounded-lg xl:col-span-2 lg:p-6 xs:row-span-1 md:row-span-2 lg:row-span-1 xl:mt-0 bg-neutral"
            >
              <AboutUs />
            </FadeIn>
          </div>

          <div className="relative grid grid-rows-3 gap-3 lg:gap-0 lg:gap-x-4 lg:grid-rows-1 lg:grid-cols-6">
            <FadeIn
              delay={0.65}
              duration={0.3}
              className="overflow-hidden rounded-lg lg:col-span-2"
            >
              <Socials />
            </FadeIn>

            <FadeIn
              delay={0.8}
              duration={0.3}
              className="relative grid content-between grid-cols-3 grid-rows-2 row-span-2 overflow-hidden rounded-lg gap-y-1 md:gap-y-0 gap-x-1 md:grid-rows-1 md:grid-cols-6 h-fit lg:col-span-4 "
            >
              {latestUploads.map((photo) => (
                <div
                  key={photo}
                  className="grid w-full overflow-hidden rounded-lg md:rounded-none"
                >
                  <img
                    src={photo}
                    alt="gallery-preview"
                    className="object-cover object-bottom w-full h-40 xl:h-48"
                  />
                </div>
              ))}

              <Link to={'gallery'}>
                <button className="absolute top-0 bottom-0 left-0 right-0 z-50 m-auto uppercase rounded-sm hover:btn-accent bg-base-200 btn w-fit">
                  Tablele din România
                  <i className="text-lg fa-regular fa-image"></i>
                </button>
              </Link>

              <div className="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-base-100"></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
