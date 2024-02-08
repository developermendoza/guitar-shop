import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

export const PhoneIcon = ({ color }: { color: string }) => {
  return <FaPhoneAlt className={`text-[${color}]`} />;
};
export const MailIcon = ({ color }: { color: string }) => {
  return <IoMdMail className={`text-[${color}]`} />;
};
export const UserIcon = ({ color }: { color: string }) => {
  return <FaRegUser className={`text-[${color}]`} />;
};
export const CartIcon = ({ color }: { color: string }) => {
  return <LuShoppingCart className={`text-[${color}] hover:text-red-800`} />;
};
export const SearchIcon = ({ color }: { color: string }) => {
  return <IoSearchSharp className={`text-[${color}]`} />;
};
export const HeartIcon = ({ color }: { color: string }) => {
  return <FaRegHeart className={`text-[${color}] hover:text-red-800`} />;
};
export const EyeIcon = ({ color }: { color: string }) => {
  return <IoMdEye className={`text-[${color}] hover:text-red-800 text-2xl`} />;
};
