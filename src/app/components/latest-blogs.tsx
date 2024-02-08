import { LatestBlogCard } from "../ui/cards";
import SectionHeader from "./section-header";

const latestBlogs = [
  {
    id: 1,
    name: "lorem",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto aperiam laudantium. Alias amet, quasi fugiat repellendus doloremque at harum repellat deleniti quidem optio. Perferendis consequuntur dicta placeat necessitatibus dolores.",
    date: new Date("January 14, 2024 11:13:00").toLocaleString(),
    images: ["/images/blogs/blog-1.jpeg"],
  },
  {
    id: 2,
    name: "Lorem ipsum  amet Perspiciatis",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto aperiam laudantium. Alias amet, quasi fugiat repellendus doloremque at harum repellat deleniti quidem optio. Perferendis consequuntur dicta placeat necessitatibus dolores.",
    date: new Date("January 04, 2024 11:13:00").toLocaleString(),
    images: ["/images/blogs/blog-2.jpeg"],
  },
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet Perspiciatis",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto aperiam laudantium. Alias amet, quasi fugiat repellendus doloremque at harum repellat deleniti quidem optio. Perferendis consequuntur dicta placeat necessitatibus dolores.",
    date: new Date("February 08, 2024 20:13:00").toLocaleString(),
    images: ["/images/blogs/blog-3.jpeg"],
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto aperiam laudantium. Alias amet, quasi fugiat repellendus doloremque at harum repellat deleniti quidem optio. Perferendis consequuntur dicta placeat necessitatibus dolores.",
    date: new Date("March 10, 2023 12:13:00").toLocaleString(),
    images: ["/images/blogs/blog-4.jpeg"],
  },
  {
    id: 5,
    name: "Lorem ipsum dolor",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto aperiam laudantium. Alias amet, quasi fugiat repellendus doloremque at harum repellat deleniti quidem optio. Perferendis consequuntur dicta placeat necessitatibus dolores.",
    date: new Date("September 14, 2022 03:30:00").toLocaleString(),
    images: ["/images/blogs/blog-5.jpeg"],
  },
];

export default function LatestBlogs() {
  return (
    <div className="py-10">
      <div className="wrapper">
        <SectionHeader
          title1="LATEST FROM"
          title2="THE BLOGS"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam aliquid vel, doloribus"
        />
        <div className="grid grid-cols-7 grid-rows-6 mt-10 h-[450px]">
          {latestBlogs.slice(0, 4).map((blog, index) => (
            <LatestBlogCard
              index={index}
              key={blog.id}
              id={blog.id}
              name={blog.name}
              body={blog.body}
              date={blog.date}
              images={blog.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
