"use client";
import { PopularCard } from "../ui/cards";
import { ProductsSalesBanner } from "../ui/banner";
import { Pagination, Dropdown } from "flowbite-react";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    id: 1,
    name: "Electric Guitars",
    description:
      "Explore a wide range of electric guitars for different playing styles.",
    // Add other properties as needed
  },
  {
    id: 2,
    name: "Acoustic Guitars",
    description:
      "Discover high-quality acoustic guitars known for their rich and warm tones.",
    // Add other properties as needed
  },
  {
    id: 3,
    name: "Guitar Amps",
    description:
      "Find powerful guitar amps to enhance your sound and performance.",
    // Add other properties as needed
  },
  {
    id: 4,
    name: "Guitar Pedals",
    description:
      "Explore a variety of guitar pedals for adding unique effects to your music.",
    // Add other properties as needed
  },
];

const products = [
  {
    id: 1,
    name: "Electric Guitar 1",
    category: categories[0],
    images: ["images/products/electric-guitar-1.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    date: new Date("January 14, 2024 11:13:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 2,
    name: "Acoustic Guitar 1",
    category: categories[1],
    images: ["images/products/acoustic-guitar-1.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    date: new Date("January 04, 2024 11:13:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 3,
    name: "Guitar Amp 1",
    category: categories[2],
    images: ["images/products/guitar-amp-1.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    date: new Date("February 08, 2024 20:13:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 4,
    name: "Guitar Pedal 1",
    category: categories[3],
    images: ["images/products/guitar-pedal-1.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    date: new Date("March 10, 2023 12:13:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 5,
    name: "Electric Guitar 2",
    category: categories[0],
    images: ["images/products/electric-guitar-2.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    date: new Date("September 14, 2022 03:30:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 6,
    name: "Acoustic Guitar 2",
    category: categories[1],
    images: ["images/products/acoustic-guitar-2.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    date: new Date("January 10, 2020 03:30:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 7,
    name: "Guitar Amp 2",
    category: categories[2],
    images: ["images/products/guitar-amp-2.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    date: new Date("February 20, 2023 03:30:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 8,
    name: "Guitar Pedal 2",
    category: categories[3],
    images: ["images/products/guitar-pedal-2.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    date: new Date("November 18, 2022 02:35:03").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 9,
    name: "Electric Guitar 3",
    category: categories[0],
    images: ["images/products/electric-guitar-3.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    date: new Date("September 14, 2022 03:30:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 10,
    name: "Acoustic Guitar 3",
    category: categories[1],
    images: ["images/products/acoustic-guitar-3.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    date: new Date("October 21, 2022 08:15:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 11,
    name: "Guitar Amp 3",
    category: categories[2],
    images: ["images/products/guitar-amp-3.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    date: new Date("November 8, 2022 12:45:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 12,
    name: "Guitar Pedal 3",
    category: categories[3],
    images: ["images/products/guitar-pedal-3.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    date: new Date("December 5, 2022 16:20:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 13,
    name: "Electric Guitar 4",
    category: categories[0],
    images: ["images/products/electric-guitar-4.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    date: new Date("January 12, 2023 09:55:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 14,
    name: "Acoustic Guitar 4",
    category: categories[1],
    images: ["images/products/acoustic-guitar-4.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    date: new Date("February 18, 2023 14:30:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 15,
    name: "Guitar Amp 4",
    category: categories[2],
    images: ["images/products/guitar-amp-4.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    date: new Date("March 24, 2023 20:10:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 16,
    name: "Guitar Pedal 4",
    category: categories[3],
    images: ["images/products/guitar-pedal-4.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    date: new Date("April 9, 2023 05:40:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 17,
    name: "Electric Guitar 5",
    category: categories[0],
    images: ["images/products/electric-guitar-5.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    date: new Date("May 17, 2023 18:25:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 18,
    name: "Acoustic Guitar 5",
    category: categories[1],
    images: ["images/products/acoustic-guitar-5.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    date: new Date("June 28, 2023 22:50:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 19,
    name: "Guitar Amp 5",
    category: categories[2],
    images: ["images/products/guitar-amp-5.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    date: new Date("July 7, 2023 07:07:00").toLocaleString(),
    // Add other properties as needed
  },
  {
    id: 20,
    name: "Guitar Pedal 5",
    category: categories[3],
    images: ["images/products/guitar-pedal-5.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    date: new Date("August 15, 2023 15:45:00").toLocaleString(),
    // Add other properties as needed
  },
];
export default function Products({
  page,
  limit,
  order,
}: {
  page: number;
  limit: number;
  order: string;
}) {
  const [sort, setSort] = useState(order);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const [currentPage, setCurrentPage] = useState(page);
  const [start, setStart] = useState((page - 1) * limit);
  const [end, setEnd] = useState(currentPage * limit);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setStart((page - 1) * currentLimit);
    setEnd(page * currentLimit);
    router.push(pathname + "?" + createQueryString("page", page.toString()));
  };

  const handleProductView = (productLimit: number) => {
    setCurrentLimit(productLimit);
    setStart((currentPage - 1) * productLimit);
    setEnd(currentPage * productLimit);
    router.push(
      pathname + "?" + createQueryString("limit", productLimit.toString())
    );
  };

  const handleSort = (val: string) => {
    setSort(val);
    router.push(pathname + "?" + createQueryString("sort", val));
  };

  return (
    <div>
      <div className="wrapper">
        <ProductsSalesBanner />
        <div className="text-sm font-normal text-gray-800 flex justify-between items-center border-gray-100 border-y mb-4 py-2">
          <div className="flex">
            <p>
              Showing {start + 1} - {end} of {products.length} products
            </p>
            <p className="pl-4">
              view
              <span
                className="cursor-pointer ml-2"
                onClick={() => handleProductView(8)}
              >
                8
              </span>{" "}
              /{" "}
              <span
                className="cursor-pointer"
                onClick={() => handleProductView(12)}
              >
                12
              </span>{" "}
              /{" "}
              <span
                className="cursor-pointer"
                onClick={() => handleProductView(24)}
              >
                24
              </span>{" "}
              /{" "}
              <span
                className="cursor-pointer"
                onClick={() => handleProductView(products.length)}
              >
                All
              </span>
            </p>
          </div>
          <Dropdown
            label={sort === "desc" ? "Sort by newest" : "Sort by oldest"}
            size="sm"
            inline
            className="text-gray-800 "
          >
            <Dropdown.Item onClick={() => handleSort("desc")} value="desc">
              Newest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("asc")} value="asc">
              Oldest
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {products
            .slice(start, end)
            .sort((a, b) => {
              const dateA = new Date(a.date).getTime(); // Convert to milliseconds since Unix epoch
              const dateB = new Date(b.date).getTime(); // Convert to milliseconds since Unix epoch
              if (sort === "asc") return dateA - dateB;
              return dateB - dateA;
            })
            .map((product) => (
              <PopularCard
                key={product.id}
                id={product.id}
                images={product.images}
                name={product.name}
                price={product.price}
              />
            ))}
        </div>
        <div className="flex overflow-x-auto sm:justify-end my-12">
          <Pagination
            className="text-[#1c1c1c]"
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / currentLimit)}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
}
