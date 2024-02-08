import { IoCarSportOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Services() {
  return (
    <div className="bg-gray-100 h-40 w-full">
      <div className="wrapper">
        <div className="grid grid-cols-3 gap-2 pt-8">
          <div className="grid grid-cols-4 items-center">
            <div className="border-4 border-red-800 w-20 h-20 col-span-1 rounded-full flex items-center justify-center">
              <IoCarSportOutline className="text-[30px] text-gray-500" />
            </div>
            <div className="col-span-3">
              <h3 className="font-bold">FREE SHIP ALL ORDER</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quis aspernatur nesciunt!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="border-4 border-red-800 w-20 h-20 rounded-full col-span-1 flex items-center justify-center">
              <GiReceiveMoney className="text-[30px] text-gray-500" />
            </div>
            <div className="col-span-3">
              <h3 className="font-bold">FREE SHIP ALL ORDER</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quis aspernatur nesciunt!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="border-4 border-red-800 w-20 h-20 rounded-full col-span-1 flex items-center justify-center">
              <MdOutlineSupportAgent className="text-[30px] text-gray-500" />
            </div>
            <div className="col-span-3">
              <h3 className="font-bold">FREE SHIP ALL ORDER</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quis aspernatur nesciunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
