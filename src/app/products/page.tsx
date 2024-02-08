import Link from "next/link";
import { PageHeroBanner } from "../ui/banner";
import Products from "../components/products";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: number;
    sort?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = searchParams?.limit || 8;
  const order = searchParams?.sort || "desc";
  return (
    <div>
      <PageHeroBanner title="products" />
      <Products page={currentPage} limit={limit} order={order} />
    </div>
  );
}
