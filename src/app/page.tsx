import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import FeaturedProducts from "./components/featured-products";
import Sales from "./components/sales";
import PopularProducts from "./components/popular-product";
import SeasonalSale from "./components/seasonal-sale";
import SpecialProducts from "./components/special-products";
import LatestBlogs from "./components/latest-blogs";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Sales />
      <PopularProducts />
      <SeasonalSale />
      <SpecialProducts />
      <LatestBlogs />
      <About />
    </main>
  );
}
