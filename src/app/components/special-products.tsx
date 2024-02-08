import { SpecialCard } from "../ui/cards";
import SectionHeader from "./section-header";

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
const special_products = [
  {
    id: 1,
    name: "Electric Guitar 1",
    category: categories[0],
    images: ["images/products/electric-guitar-1.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    isOnSale: true,
    // Add other properties as needed
  },

  {
    id: 5,
    name: "Electric Guitar 2",
    category: categories[0],
    images: ["images/products/electric-guitar-2.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 11,
    name: "Guitar Amp 3",
    category: categories[2],
    images: ["images/products/guitar-amp-3.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 12,
    name: "Guitar Pedal 3",
    category: categories[3],
    images: ["images/products/guitar-pedal-3.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    isOnSale: true,
    // Add other properties as needed
  },
  {
    id: 13,
    name: "Electric Guitar 4",
    category: categories[0],
    images: ["images/products/electric-guitar-4.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 14,
    name: "Acoustic Guitar 4",
    category: categories[1],
    images: ["images/products/acoustic-guitar-4.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 15,
    name: "Guitar Amp 4",
    category: categories[2],
    images: ["images/products/guitar-amp-4.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    isOnSale: true,
    // Add other properties as needed
  },
  {
    id: 16,
    name: "Guitar Pedal 4",
    category: categories[3],
    images: ["images/products/guitar-pedal-4.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    isOnSale: true,
    // Add other properties as needed
  },
  {
    id: 17,
    name: "Electric Guitar 5",
    category: categories[0],
    images: ["images/products/electric-guitar-5.png"],
    price: 999.99,
    description: "High-quality electric guitar with various features.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 18,
    name: "Acoustic Guitar 5",
    category: categories[1],
    images: ["images/products/acoustic-guitar-5.png"],
    price: 799.99,
    description: "Beautiful acoustic guitar with a warm tone.",
    isOnSale: false,
    // Add other properties as needed
  },
  {
    id: 19,
    name: "Guitar Amp 5",
    category: categories[2],
    images: ["images/products/guitar-amp-5.png"],
    price: 499.99,
    description: "Powerful guitar amp for various genres.",
    isOnSale: true,
    // Add other properties as needed
  },
  {
    id: 20,
    name: "Guitar Pedal 5",
    category: categories[3],
    images: ["images/products/guitar-pedal-5.png"],
    price: 89.99,
    description: "Classic distortion pedal for rock enthusiasts.",
    isOnSale: true,
    // Add other properties as needed
  },
];
export default function SpecialProducts() {
  return (
    <section className="py-20">
      <SectionHeader
        title1="popular"
        title2="products"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          praesentium amet nulla eaque deserunt nesciunt quis, eveniet est
          aperiam, sed ab, alias molestias!"
      />
      <div className="wrapper">
        <div className="grid md:grid-rows-2 md:grid-flow-col gap-4 mt-10">
          {special_products.slice(0, 5).map((product, index) => (
            <SpecialCard
              index={index}
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
              isOnSale={product.isOnSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
