"use client";
import Link from "next/link";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white">
      <div className="wrapper">
        <ul className="flex justify-center items-center gap-6 font-semibold text-sm text-black">
          <div className="flex flex-col">
            <Link href="/">HOME</Link>
            <span
              className={`${
                pathname === "/" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
          <div className="flex flex-col">
            <Link href="/about">ABOUT</Link>
            <span
              className={`${
                pathname === "/about" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
          <div className="flex flex-col">
            <Link href="/products">PRODUCTS</Link>
            <span
              className={`${
                pathname === "/products" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex flex-col">
            <Link href="/featured">FEATURED</Link>
            <span
              className={`${
                pathname === "/featured" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
          <div className="flex flex-col">
            <Link href="/blog">BLOG</Link>
            <span
              className={`${
                pathname === "/blog" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
          <div className="flex flex-col">
            <Link href="/contact">CONTACT</Link>
            <span
              className={`${
                pathname === "/contact" ? "visible" : "invisible"
              } border-2 border-b-2 border-red-800`}
            ></span>
          </div>
        </ul>
      </div>
    </nav>
  );
}
