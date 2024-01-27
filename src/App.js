import { AnimatePresence, motion } from 'framer-motion';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';

import Navbar, { action as logout } from './components/Navbar.jsx';
import PhotoGallery, { galleryLoader } from './pages/Gallery';
import Blog from './pages/Blog';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage.jsx';
import EventPage from './pages/Event';
import AddCar from './components/gallery/AddCar.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import Authentication, {
  action as loginAction,
} from './components/Authentication.jsx';
import BlogPostDetails from './components/blog/BlogPostDetails.jsx';

import { tokenLoader, checkAuthentication } from './utils/auth';

const router = createBrowserRouter([
  {
    element: <Layout />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { path: '/', Component: Home },

      {
        path: '/blog',
        children: [
          { path: '', element: <Blog /> },
          { path: 'post-details', Component: BlogPostDetails },
        ],
      },

      {
        path: '/authentication',
        action: loginAction,
        Component: Authentication,
      },
      {
        path: '/gallery',
        loader: galleryLoader,
        id: 'gallery',
        children: [
          { path: '', element: <PhotoGallery /> },
          { path: 'add-car', Component: AddCar, loader: checkAuthentication },
        ],
      },
      { path: '/logout', action: logout },
      { path: '/photos', Component: PhotoGrid },
      { path: '/event', Component: EventPage },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen px-2 mx-auto overflow-auto sm:px-4 md:px-10 bg-base-100 lg:px-6">
      <div className="fixed inset-x-0 top-0 left-0 right-0 z-50 w-full mx-auto lg:px-4 lg:top-0">
        <Navbar />
      </div>

      <main className="flex flex-col min-h-screen content-start w-full px-2 xl:px-4 pt-20 lg:pt-24 pb-12 max-w-[1700px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
