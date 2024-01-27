import { json, useRouteLoaderData } from 'react-router-dom';
import Gallery from '../components/gallery/Gallery';

function GalleryPage() {
  const gallery = useRouteLoaderData('gallery');
  return <Gallery cars={gallery} />;
}

export default GalleryPage;

export async function galleryLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
