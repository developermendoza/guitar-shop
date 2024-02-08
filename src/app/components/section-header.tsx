import { MdOutlineLibraryMusic } from "react-icons/md";
export default function SectionHeader({
  title1,
  title2,
  subtitle,
}: {
  title1: string;
  title2: string;
  subtitle: string;
}) {
  return (
    <div className="wrapper flex justify-center">
      <div className="max-w-md flex flex-col justify-center items-center">
        <MdOutlineLibraryMusic className="text-[30px]" />
        <h2 className="text-lg font-bold text-black pt-2 pb-4 uppercase">
          {title1}
          <span className="text-red-800"> {title2}</span>
        </h2>
        <p className="text-center text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
