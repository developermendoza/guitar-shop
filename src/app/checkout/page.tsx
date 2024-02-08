"use client";
import { PageHeroBanner } from "../ui/banner";

import { Label, TextInput, Textarea, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { PrimaryButton } from "../ui/buttons";

const cart = [
  {
    name: "Electric Guitar 1",
    id: 1,
    quantity: 1,
    price: 999.99,
  },
  {
    name: "Acoustic Guitar 1",
    id: 2,
    quantity: 3,
    price: 799.99,
  },
];

let total = 0;

const productPricesTotals = cart.map(
  (product) => product.price * product.quantity
);

productPricesTotals.map((price) => (total += Number(price)));

export default function CheckoutPage() {
  return (
    <div>
      <PageHeroBanner title="checkout" />
      <div className="wrapper">
        <div className="grid grid-cols-2 mt-10 mb-20 gap-6">
          <div>
            <h2 className="font-semibold text-md mb-2">BILLING DETAILS</h2>
            <div className="border border-b-1 border-red-800 w-20" />
            <div className="mt-6">
              <div className="flex gap-2 mb-2">
                <TextInput
                  id="firstName"
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full"
                />
                <TextInput
                  id="lastName"
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="w-full"
                />
              </div>
              <TextInput
                id="email"
                type="email"
                rightIcon={HiMail}
                placeholder="name@flowbite.com"
                required
                className="mb-2"
              />
              <TextInput
                id="phone"
                type="phone"
                rightIcon={MdOutlinePhoneIphone}
                placeholder="Your Phone *"
                className="mb-2"
                required
              />
              <div className="flex gap-2 mb-2">
                <TextInput
                  id="city"
                  type="text"
                  placeholder="Town / City *"
                  required
                  className="w-full"
                />
                <TextInput
                  id="zipcode"
                  type="text"
                  pattern="[0-9]{5}"
                  placeholder="Postcode / Zip"
                  required
                  className="w-full"
                />
              </div>
              <TextInput
                id="address1"
                type="text"
                placeholder="Address 1 *"
                required
                rightIcon={LuMapPin}
                className="w-full mb-2"
              />
              <TextInput
                id="address2"
                type="text"
                placeholder="Address 2 *"
                required
                rightIcon={LuMapPin}
                className="w-full"
              />
              <div className="flex items-center gap-2 my-8">
                <Checkbox id="accept" defaultChecked />
                <Label
                  htmlFor="accept"
                  className="flex font-thin italic font-serif"
                >
                  Create an account?
                </Label>
              </div>
              <div className="my-8">
                <div className="flex items-center gap-2 mb-2">
                  <Label
                    htmlFor="differentAddress"
                    className="flex font-semibold"
                  >
                    SHIP TO A DIFFERENT ADDRESS?
                  </Label>
                  <Checkbox id="differentAddress" />
                </div>
                <div className="border border-b-1 border-red-800 w-20" />
              </div>
              <Textarea
                id="comment"
                placeholder="Order Notes"
                required
                rows={8}
              />
            </div>
          </div>
          <div className="bg-gray-100 ">
            <div className="p-10">
              <h2 className="font-semibold text-md mb-2">YOUR ORDER</h2>
              <div className="border border-b-1 border-red-800 w-20"></div>
              <div className="flex justify-between mt-8 mb-4 text-sm font-semibold text-gray-600">
                <h2>PRODUCT</h2>
                <h2>TOTAL</h2>
              </div>
              <hr />
              <div className="text-sm font-normal text-gray-600">
                {cart.map((product) => (
                  <div key={product.id}>
                    <div className="flex justify-between pt-4 pb-2">
                      <h2>
                        {product.name} x{" "}
                        <span className="font-semibold">
                          {product.quantity}
                        </span>
                      </h2>
                      <h2>${(product.price * product.quantity).toFixed(2)}</h2>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between py-4">
                  <h2>Subtotal</h2>
                  <p>${total}</p>
                </div>
                <div className="flex justify-between py-4">
                  <h2>Shipping fee</h2>
                  <p>Free</p>
                </div>
                <div className="flex justify-between py-4">
                  <h2>Coupon</h2>
                  <p>No</p>
                </div>
                <hr />
                <div className="flex justify-between py-4 font-bold">
                  <h2>TOTAL</h2>
                  <p>${total}</p>
                </div>
              </div>
            </div>
            <div className="border border-dashed border-b-2 border-gray-300"></div>
            <div className="p-10">
              <PrimaryButton name="place order" url="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
