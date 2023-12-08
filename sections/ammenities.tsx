import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import React from "react";
import {
  cable,
  community,
  help,
  note,
  security,
  sofa,
  wash,
  wifi,
} from "./icons";
import Image from "next/image";

type TAmmenitie = {
  icon: string;
  title: string;
  desc: string;
};

const Ammenities = () => {
  const ammenities: TAmmenitie[] = [
    {
      icon: sofa,
      desc: `Just grab a bag full of
      essentials and step into a fully-
      furnished coliving space home.`,
      title: "Fully Furnished",
    },
    {
      icon: cable,
      desc: `Power-cut’s a nightmare, right?
      Don’t worry, we’ve got you
      covered with 24/7 power
      backup*`,
      title: "24/7 Backup",
    },
    {
      icon: help,
      desc: `Don’t fret over changing the
    bulb or cleaning anymore. We
    are here to take care of regular
    cleaning and maintenance
    needs.`,
      title: "Regular Cleaning & Maintenance",
    },
    {
      icon: wifi,
      desc: `WFH and binge-watching a
    series is a seamless experience
    at Settl. Enjoy high-speed
    internet connection for hassle-
    free video calls and
    presentations.`,
      title: "High Speed Internet",
    },
    {
      icon: wash,
      desc: `Laundry days made easy with
    on-site laundry facilities.
    Access the washing machine
    at any time of the day.`,
      title: "On-Site Laundry",
    },
    {
      icon: community,
      desc: `‘Thou shalt love thy neighbour
    as thyself’ Be a part of the
    ‘Settl.’ community to bond with
    your neighbours over coffee,
    games and more`,
      title: "Settl. Community",
    },
    {
      icon: note,
      desc: `Don’t shell out your money on
    hefty deposits and rents. The
    nominal charges cover all your
    expenses from electricity**,
    water to wifi bills.`,
      title: "All inclusive rent with nominal deposit",
    },
    {
      icon: security,
      desc: `Your sound-sleep is our
    responsibility. Your safety is
    covered by 24/7 tech-enabled
    security.`,
      title: "Tech-enabled 24/7 security",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#000341] text-white p-10 py-12">
      <div className="m-10 flex flex-col items-start justify-evenly gap-3 max-w-[1164px]">
        <h1 className="text-2xl font-bold px-2 mb-2">At your convenience</h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-5">
          {/* #todo: card styling is offbeat */}
          {ammenities.map((ammenitie,i) => (
            <Card key={i} className="rounded-md text-center flex flex-col justify-center items-center py-6 px-3 w-[272.469px] h-[312.904px] shrink-0">
              <CardHeader className="mt-1 pt-0 flex flex-col items-center justify-center w-[40%]">
                <CardTitle className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src={ammenitie.icon}
                    alt="icon"
                    height={20}
                    width={40}
                  />
                  <h4>{ammenitie.title}</h4>
                </CardTitle>
              </CardHeader>
              <CardDescription className="w-[80%]">{ammenitie.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
      <Button className="bg-white text-[#000341] rounded-sm font-extrabold text-base" size={"lg"}>FIND MY SETTL.</Button>
    </div>
  );
};

export default Ammenities;
