import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { stay } from "./images";

type TCard = {
  image: StaticImageData;
  name: string;
  address: string;
  price: string;
  roomType: string;
};

const Stays = () => {
  const cards: TCard[] = [
    {
      image: stay,
      name: "Houser 28 Galleria",
      address: "asdf",
      price: "39,999",
      roomType: "Solo Room",
    },
    {
      image: stay,
      name: "Houser 28 Galleria",
      address: "asdf",
      price: "39,999",
      roomType: "Solo Room",
    },
    {
      image: stay,
      name: "Houser 28 Galleria",
      address: "asdf",
      price: "39,999",
      roomType: "Solo Room",
    },
  ];
  return (
    <div className="w-full bg-[#E5E7FF] p-6 flex flex-col justify-evenly gap-5 items-center">
      <h1 className="text-3xl font-bold font-[Playfair] my-10">
        Available Stays
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-7 mb-14">
        {cards.map((card, i) => (
          <Card className="rounded-2xl" key={i}>
            <CardHeader>
              <CardTitle>
                <Image
                  className="rounded-lg"
                  src={card.image}
                  alt="stay_image"
                  width={316}
                  height={206}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-lg mb-1 mt-4">{card.name}</h1>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1 items-center justify-center">
                  <MapPin size={20} />
                  <p>{card.address}</p>
                </div>
                <div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M12.5491 2.91479L11.7537 3.7102L14.1685 6.125H12.9248C8.89282 6.125 5.6123 9.40552 5.6123 13.4375H6.7373C6.7373 10.0142 9.50147 7.25 12.9248 7.25H14.1685L11.7537 9.66479L12.5491 10.4602L16.3218 6.6875L12.5491 2.91479ZM3.3623 6.6875V15.6875H15.7373V12.3125H14.6123V14.5625H4.4873V6.6875H3.3623Z"
                        fill="black"
                      />
                    </svg>
                    <p>Share</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#000341] w-full mt-10 mb-14 flex flex-row justify-between items-center mx-0 px-2">
                <span>{card.roomType}</span>
                <span className="font-thin">
                  starting at{" "}
                  <span className="font-bold">Rs. {card.price}</span>/mo*
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { Stays };
