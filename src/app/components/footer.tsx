import Brands from "./brands";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c]">
      <div className="border-b border-gray-300">
        <div className="wrapper">
          <div>
            <Brands />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="flex justify-between my-10">
          <div>
            <h3 className="text-white font-semibold uppercase text-xl mb-6">
              INFORMATION
            </h3>
            <ul className="text-sm text-gray-300 leading-6">
              <li>About us</li>
              <li>Our stores</li>
              <li>My account</li>
              <li>Order history</li>
              <li>Special info</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold uppercase text-xl mb-6">
              MY ACCOUNT
            </h3>
            <ul className="text-sm text-gray-300 leading-6">
              <li>My orders</li>
              <li>My credit</li>
              <li>My wishlist</li>
              <li>Personal info</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold uppercase text-xl mb-6">
              CUSTOMER
            </h3>
            <ul className="text-sm text-gray-300 leading-6">
              <li>Help and FAQ</li>
              <li>Order and returns</li>
              <li>Shipping info</li>
              <li>Search terms</li>
              <li>Store location</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold uppercase text-xl mb-6">
              CONTACT
            </h3>
            <div className="text-sm text-gray-300 leading-6">
              <p>
                PO Box CT 16122 Collins Street West, Victoria 8007, Australia
              </p>
              <p>Phone: +1 (234) 567-8910</p>
              <p>Fax: +1 (234) 567-8910</p>
              <p>Email Contact@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div>
          <div className="wrapper">
            <div className="flex justify-between pt-8 pb-4">
              <div className="flex justify-between gap-4 items-center text-gray-300">
                <h2 className="text-gray-300 text-2xl font-semibold">
                  SK<span className="text-red-800">-STORE</span>
                </h2>
                <p className="font-normal text-xs">
                  {" "}
                  ©COPYRIGHT 2024. POWERED BY MENDOZA CODING.
                </p>
              </div>
              <div className="flex justify-between gap-4 text-2xl">
                <FaCcVisa className="text-gray-300 hover:text-red-800 cursor-pointer" />
                <FaCcMastercard className="text-gray-300 hover:text-red-800 cursor-pointer" />
                <FaCcPaypal className="text-gray-300 hover:text-red-800 cursor-pointer" />
                <FaCcAmex className="text-gray-300 hover:text-red-800 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
