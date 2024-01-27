import mainLogo from '../images/logo.webp';
import profilePic from '../images/profile.jpg';
import {
  Link,
  useRouteLoaderData,
  Form,
  redirect,
  useLocation,
} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const isLoggedIn = useRouteLoaderData('root');
  const location = useLocation();

  return (
    <>
      <nav id="test" className="test">
        <motion.div
          layout
          className="relative z-50 w-full grid-cols-3 px-1 py-3 mx-auto bg-base-100 xl:px-12 h-fit navbar "
        >
          <div className=" w-fit dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="z-50 gap-4 p-24 mt-3 font-semibold shadow w-96 menu dropdown-content bg-base-200 rounded-box"
            >
              <li>
                <Link
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-accent rounded mx-1 text-base-100 px-6 '
                      : 'px-6 mx-1 rounded '
                  }
                >
                  <i className="px-4 fa-solid fa-house"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-accent rounded mx-1 text-base-100 px-6 '
                      : 'px-6 mx-1 rounded '
                  }
                >
                  GALERIE
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-accent rounded mx-1 text-base-100 px-6'
                      : 'mx-1 rounded px-6'
                  }
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="event"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-accent rounded mx-1 text-base-100 px-6'
                      : 'mx-1 px-6 rounded'
                  }
                >
                  SAISHO FEST 2024
                  <div className="badge badge-warning">NEW</div>
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/">
            <motion.div layout="position" className="w-10 mx-4 lg:w-12 lg:mx-8">
              <img
                className="object-contain w-full h-full "
                src={mainLogo}
                alt="main-logo"
              ></img>
            </motion.div>
          </Link>

          <motion.div
            layout="position"
            className="flex flex-row justify-end w-full lg:justify-between"
          >
            <motion.div
              layout="position"
              className="z-50 hidden mx-auto navbar-center lg:flex"
            >
              <motion.ul
                layout="position"
                className="flex flex-row gap-3 py-2 font-medium xl:gap-6"
              >
                <Link to="/">
                  <li className="relative z-50 px-4 m-0 py-1.5 cursor-pointer w-fit ">
                    <span
                      className={
                        ' mx-auto relative text-center transition-all duration-300 text-neutral-content w-fit  ' +
                        (location.pathname === '/' && ' text-base-200')
                      }
                    >
                      <i className="px-3 fa-solid fa-house"></i>
                    </span>
                    {location.pathname === '/' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-full border-b-2 -z-10 bg-accent border-accent"
                        layoutId="background"
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          },
                        }}
                      />
                    )}
                  </li>
                </Link>

                <li className="relative z-50 px-4 m-0 py-1.5 cursor-pointer w-fit ">
                  <Link to={'/gallery'} reloadDocument>
                    <span
                      className={
                        ' mx-auto relative text-center transition-all duration-300 text-neutral-content w-fit  ' +
                        (location.pathname === '/gallery' && ' text-base-200')
                      }
                    >
                      GALERIE
                    </span>
                    {location.pathname === '/gallery' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-full border-b-2 -z-10 bg-accent border-accent"
                        layoutId="background"
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          },
                        }}
                      />
                    )}
                  </Link>
                </li>

                <li className="relative z-50 px-4 m-0 py-1.5 cursor-pointer w-fit ">
                  <Link to="blog">
                    <span
                      className={
                        ' mx-auto relative text-center transition-all duration-300 text-neutral-content w-fit  ' +
                        (location.pathname === '/blog' && ' text-base-200')
                      }
                    >
                      BLOG
                    </span>
                    {location.pathname === '/blog' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-full border-b-2 -z-10 bg-accent border-accent"
                        layoutId="background"
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          },
                        }}
                      />
                    )}
                  </Link>
                </li>

                <Link to="/event">
                  <li className="relative z-50 px-4 m-0 py-1.5 cursor-pointer w-fit ">
                    <span
                      className={
                        ' mx-auto relative text-center transition-all duration-300 text-neutral-content w-fit  ' +
                        (location.pathname === '/event' && ' text-base-200')
                      }
                    >
                      SAISHO FEST 2024
                      <div className="mt-0 ml-3 bg-white rounded-none badge badge-info">
                        <i className="text-error fa-solid fa-circle"></i>
                      </div>
                    </span>
                    {location.pathname === '/event' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-full border-b-2 -z-10 bg-accent border-accent"
                        layoutId="background"
                        transition={{
                          layout: {
                            duration: 0.25,
                            ease: 'easeIn',
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          },
                        }}
                      />
                    )}
                  </li>
                </Link>
              </motion.ul>
            </motion.div>

            <div className="flex items-center content-end grid-cols-2 gap-2 px-4 w-fit">
              {isLoggedIn ? (
                <div className=" w-fit dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={profilePic} alt="profile-pic" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 z-[1] p-3 gap-4 flex-col flex shadow dropdown-content bg-base-200 rounded-box w-52"
                  >
                    <p className="justify-between p-1 italic">Salut, Raul!</p>
                    <ul className="px-2 border-l-2 border-gray-400 border-opacity-40">
                      <Link to={'/'}>
                        <li className="p-1.5 hover:bg-base-300">Profil</li>
                      </Link>
                      <Link to={'/'}>
                        <li className="p-1.5 hover:bg-base-300">Mașina ta</li>
                      </Link>
                    </ul>
                    <li className="flex justify-center w-full">
                      <Form action="/logout" method="post">
                        <button className="mx-auto uppercase btn btn-outline btn-error btn-sm">
                          Sign out
                        </button>
                      </Form>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/authentication">
                  <button className="uppercase btn btn-accent btn-outline btn-sm text-base-content">
                    Autentificare
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}

export function action() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('expiration');
  localStorage.removeItem('email');
  return redirect('/');
}
