import Blogs from "../components/blogs";
import BlogsSidebar from "../components/blogs-sidebar";
import { PageHeroBanner } from "../ui/banner";

export default function BlogPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: number;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = searchParams?.limit || 8;
  return (
    <div>
      <PageHeroBanner title="Blog" />
      <div className="wrapper">
        <div className="grid grid-cols-3  mt-10 mb-20">
          <div className="col-span-2">
            <Blogs page={currentPage} limit={limit} />
          </div>
          <div>
            <BlogsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
