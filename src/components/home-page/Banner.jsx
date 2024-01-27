import { Link } from 'react-router-dom';

const image = 'homepage/banner1.jpg';

export default function Banner({ text, link }) {
  return (
    <Link to={link} state={{ title: text }}>
      <img
        src={`http://localhost:8080/photos/${image}`}
        alt="banner"
        className="object-cover w-full h-full transition duration-300 "
      />
      <div className="absolute px-3 py-2 overflow-hidden text-center transition-all duration-300 rounded-sm group bottom-2 right-2 lg:px-5 lg:py-3 bg-base-200 hover:bg-accent w-fit h-fit">
        <h1 className="text-xs font-semibold tracking-wide uppercase group-hover:text-white text-base-content sm:text-sm md:text-md xl:text-lg">
          {text}
          <i className="ml-3 fa-solid fa-caret-right"></i>
        </h1>
      </div>
    </Link>
  );
}
