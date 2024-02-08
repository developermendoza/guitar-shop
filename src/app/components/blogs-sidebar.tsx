import { IoIosArrowForward } from "react-icons/io";
import { SidebarBlogCard, SidebarSalesCard } from "../ui/cards";

const categories = [
  {
    id: 1,
    name: "Acoustic Guitars",
  },
  {
    id: 2,
    name: "Electric Guitars",
  },
  {
    id: 3,
    name: "Classical Guitars",
  },
  {
    id: 4,
    name: "Bass Guitars",
  },
  {
    id: 5,
    name: "Specialty Guitars",
  },
];
const blogs = [
  {
    id: 1,
    name: "Essential Maintenance Tips for Guitar Players",
    description:
      "Learn how to properly maintain your guitar to keep it sounding and playing its best.",
    date: "2024-01-15",
    likes: 125,
    comments: 23,
    main_image: "/images/blogs/blog-1.jpeg",
  },
  {
    id: 2,
    name: "Exploring the History of the Stratocaster",
    description:
      "Discover the fascinating story behind one of the most iconic electric guitars of all time.",
    date: "2024-01-20",
    likes: 98,
    comments: 15,
    main_image: "/images/blogs/blog-2.jpeg",
  },
  {
    id: 3,
    name: "Mastering Guitar Scales: A Beginner's Guide",
    description:
      "Unlock the secrets of guitar scales and take your playing to the next level.",
    date: "2024-01-25",
    likes: 154,
    comments: 31,
    main_image: "/images/blogs/blog-3.jpeg",
  },
  {
    id: 4,
    name: "Choosing the Right Amplifier for Your Guitar",
    description:
      "Find out how to select the perfect amplifier to complement your playing style and guitar setup.",
    date: "2024-02-01",
    likes: 87,
    comments: 19,
    main_image: "/images/blogs/blog-4.jpeg",
  },
  {
    id: 5,
    name: "Famous Guitar Riffs Every Guitarist Should Know",
    description:
      "Explore some of the most iconic guitar riffs in music history and learn how to play them.",
    date: "2024-02-05",
    likes: 203,
    comments: 42,
    main_image: "/images/blogs/blog-5.jpeg",
  },
  {
    id: 6,
    name: "The Evolution of Electric Guitar Design",
    description:
      "Trace the evolution of electric guitar design from its early beginnings to modern innovations.",
    date: "2024-02-10",
    likes: 112,
    comments: 28,
    main_image: "/images/blogs/blog-6.jpeg",
  },
  {
    id: 7,
    name: "10 Essential Tips for Buying Your First Guitar",
    description:
      "Discover key factors to consider when purchasing your first guitar to ensure a satisfying experience.",
    date: "2024-02-15",
    likes: 76,
    comments: 12,
    main_image: "/images/blogs/blog-7.jpeg",
  },
  {
    id: 8,
    name: "Exploring Different Guitar Pickup Types",
    description:
      "Learn about the various types of guitar pickups and how they influence tone and playability.",
    date: "2024-02-20",
    likes: 135,
    comments: 19,
    main_image: "/images/blogs/blog-8.jpeg",
  },
  {
    id: 9,
    name: "Tips for Improving Your Guitar Playing Speed",
    description:
      "Discover exercises and techniques to help you increase your guitar playing speed and dexterity.",
    date: "2024-02-25",
    likes: 91,
    comments: 16,
    main_image: "/images/blogs/blog-9.jpeg",
  },
  {
    id: 10,
    name: "The Role of Guitar Effects Pedals in Music Production",
    description:
      "Explore how guitar effects pedals shape the sound of modern music and enhance creative expression.",
    date: "2024-03-01",
    likes: 182,
    comments: 35,
    main_image: "/images/blogs/blog-10.jpeg",
  },
];
export default function BlogsSidebar() {
  return (
    <div>
      <h2 className="font-semibold text-lg text-center">CATEGORY</h2>
      <div className="border-b-2 border-red-800" />
      <div className="mt-2">
        {categories.map((category) => (
          <div
            className="flex justify-between border-b-2 border-gray-300 py-4 px-2 text-gray-500 font-semibold text-sm cursor-pointer"
            key={category.id}
          >
            <p>{category.name}</p>
            <IoIosArrowForward />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-semibold text-lg text-center">LATEST POSTS</h2>
        <div className="border-b-2 border-red-800" />
        <div className="mt-10">
          {blogs.slice(0, 3).map((blog) => (
            <SidebarBlogCard
              key={blog.id}
              main_image={blog.main_image}
              name={blog.name}
              date={blog.date}
            />
          ))}
        </div>
      </div>
      <SidebarSalesCard />
    </div>
  );
}
