import BlogsSidebar from "@/app/components/blogs-sidebar";
import moment from "moment";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PageHeroBanner } from "@/app/ui/banner";

// Define types/interfaces for the params object
interface BlogParams {
  id: number;
  slug: string;
}

// Define props interface for the BlogPost component
interface BlogPostProps {
  params: BlogParams;
}

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
export default function BlogDetailPage({ params }: BlogPostProps) {
  const { id, slug } = params;
  const blogId = Number(id); // Accessing the dynamic parameters
  const blogFound = blogs.find((blog) => blog.id === blogId);

  return (
    <div>
      <PageHeroBanner title={blogFound?.name || ""} />
      <div className="wrapper">
        <div className="grid grid-cols-3 gap-6 py-10">
          <div className="col-span-2">
            <div className="relative w-auto h-[500px]">
              <Image fill alt="" src={blogFound?.main_image || ""} />
            </div>
            <h1 className="text-3xl font-bold py-4">{blogFound?.name}</h1>
            <div className="flex justify-between text-gray-700">
              <p className="text-sm">
                {moment(blogFound?.date).format("MMM DD YYYY")}
              </p>
              <div className="flex gap-2 text-sm">
                <p className="flex items-center gap-1">
                  <FaRegComment />
                  {blogFound?.comments}
                </p>
                <p className="flex items-center gap-1">
                  <FaRegHeart />
                  {blogFound?.likes}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm py-4">
              {blogFound?.description}
            </p>
          </div>
          <div>
            <BlogsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
