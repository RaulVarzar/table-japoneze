import BlogCard from './BlogCard.jsx';
import { blogPosts } from '../../data.js';
import { FadeIn } from '../../utils/animations.js';

export default function Blog() {
  return (
    <FadeIn delay={0.05} duration={0.6}>
      <section>
        <div className="p-2 pt-6 mx-auto">
          <div className=" max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-4">
            {blogPosts.map((item) => (
              <BlogCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
