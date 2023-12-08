import Image, { StaticImageData } from "next/image";
import React from "react";
import { pic1, pic2, pic3, pic4 } from "./images";

const Community = () => {
  const images: StaticImageData[] = [pic1, pic2, pic3, pic4];
  return (
    <div className="w-full bg-[#E5E7FF] flex flex-col justify-evenly gap-5 items-start pb-16">
      <section className="max-w-[1164px] mx-8 mt-8 px-16 py-12">
        <h1 className="font-extrabold font-[Poppins] text-3xl text-black">
          Community
        </h1>
        <p className="mt-2 text-[#262626] font-medium text-lg">
          We love our Settlrs and want to make their stay as comfortable as
          possible. Collaborate with co-Settlrs in the curated events and bond
          with them in an inclusive and caring community.
        </p>
      </section>
      <section className="w-full my-0 mb-12 p-0 flex flex-col lg:flex-row max-w-[1440px]" style={{margin:'0 auto'}}>
        {images.map((image, i) => (
          <Image src={image} alt="" width={360.801} height={360.801} key={i} />
        ))}
      </section>
    </div>
  );
};

export { Community };
