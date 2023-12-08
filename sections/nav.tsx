import { Button } from "@/components/ui/button";
import React from "react";
type TNavItem = {
  title: string;
  path: string;
};

const Navbar = () => {
  const navItems: TNavItem[] = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "About Us",
      path: "#",
    },
    {
      title: "Why Us",
      path: "#",
    },
    {
      title: "Insights",
      path: "#",
    },
    {
      title: "FAQs",
      path: "#",
    },
  ];
  return (
    <>
      <p className="w-full text-center text-xs py-3 text-[#000341]">
        Coronavirus (COVID-19) Updates: We are actively monitoring the
        coronavirus (COVID-19) situation and are taking steps to help keep our
        communities safe.{" "}
        <span className=" font-extrabold hover:underline">Read More</span>
      </p>
      <nav className="w-full bg-[#000341] text-white py-3 px-10 flex justify-between items-center">
        <h1 className="text-lg">
          <span className="font-extrabold">ACOMO</span>{" "}
          <i className="font-light">homes</i>
        </h1>
        <ul className="lg:flex lg:flex-row lg:justify-between lg:items-center w-[50%] hidden">
          {navItems.map((item) => (
            <li key={item.title} className="font-medium text-sm">
              {item.title}
            </li>
          ))}
          <Button className="text-[#000341] bg-white rounded-none font-bold">
            Request a Call
          </Button>
        </ul>
          <Button className="text-[#000341] bg-white rounded-none font-bold block lg:hidden">
            Request a Call
          </Button>
      </nav>
    </>
  );
};

export { Navbar };
