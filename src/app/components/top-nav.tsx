import {
  PhoneIcon,
  MailIcon,
  UserIcon,
  CartIcon,
  SearchIcon,
} from "../ui/icons";

export default function TopNav() {
  return (
    <div className="bg-black text-white py-2">
      <div className="wrapper">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <PhoneIcon color="white" />
            <p className="text-xs font-semibold">(+84) 1556 885 66</p>
            <p className="text-white px-4">|</p>
            <MailIcon color="white" />
            <p className="text-xs font-semibold">Sk@gmail.com</p>
          </div>
          <div className="flex items-center gap-6">
            <UserIcon color="white" />
            <div className="flex">
              <CartIcon color="white" />
              <p className="bg-red-800 -mt-2 -ml-2 text-xs rounded-full h-5 w-5 flex justify-center items-center font-bold text-white">
                3
              </p>
            </div>
            <SearchIcon color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
