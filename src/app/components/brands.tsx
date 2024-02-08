const brands = [
  {
    id: 1,
    name: "fender",
    url: "/images/brands/fender.svg",
  },
  {
    id: 2,
    name: "gibson",
    url: "/images/brands/gibson.svg",
  },
  {
    id: 3,
    name: "ibanez",
    url: "/images/brands/ibanez.svg",
  },
  {
    id: 4,
    name: "marshall",
    url: "/images/brands/marshall.svg",
  },
  {
    id: 5,
    name: "orange",
    url: "/images/brands/orange.svg",
  },
];

export default function Brands() {
  return (
    <div className="flex justify-around items-center py-8">
      {brands.map((brand) => (
        <img key={brand.id} src={brand.url} alt="" className="w-24" />
      ))}
    </div>
  );
}
