import { Link } from 'react-router-dom';

export default function BlogCard({ image, title, date, content }) {
  return (
    <div className="flex flex-col gap-2 p-4 mx-auto transition-all duration-300 ease-in-out transform rounded-md shadow-lg cursor-pointer lg:max-w-max group bg-neutral hover:scale-102">
      <div className="relative h-full overflow-hidden rounded-lg">
        <img
          className="object-cover w-auto h-full transition-all duration-200 group-hover:shadow-2xl group-hover:scale-102"
          src={image}
          alt="blog-card"
        />
        {/* <p className="absolute top-0 left-0 px-3 py-1 text-gray-200 border-b-4 border-r-4 border-base-300 bg-accent rounded-ee-lg">{date}</p> */}
      </div>

      <div className="relative flex flex-col content-between justify-between gap-2 mx-auto duration-300 rounded-b-lg h-fit bg-neutral bg-opacity-60 transiton-all group-hover:bg-opacity-100">
        <div className="grid gap-1 px-6 pt-4">
          <h1 className="text-xl font-bold leading-tight text-gray-300 uppercase  min-h-[50px] line-clamp-2">
            {title}
          </h1>
          <div className="flex items-center my-2 font-thin leading-tight tracking-tighter">
            <p className="text-sm transition-all duration-300 ease-in-out opacity-50 line-clamp-6 group-hover:opacity-80">
              {content}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-4">
          <p className="rounded-lg text-neutral-content h-fit opacity-20">
            {date}
          </p>
          <Link to={'post-details'}>
            <button className="px-4 py-2 transition-all duration-300 opacity-50 group-hover:text-accent w-fit place-self-end group-hover:opacity-100">
              Citește <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
          {/* <button className="w-full text-sm text-white uppercase transition duration-300 rounded-md shadow-sm btn btn-md border-base-200 bg-base-200 hover:scale-103">Articol complet</button> */}
        </div>
      </div>
    </div>
  );
}
