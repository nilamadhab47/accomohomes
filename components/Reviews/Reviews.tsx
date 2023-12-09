import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
const reviewData = [
  {
    titlt: "Ankit Shukla",
    review:
      "ACOMO is the best Coliving space you'll find in Gurgaon. Here at ACOMO, we get healthy meals.",
  },
  {
    titlt: "Ankit Shukla",
    review:
      "ACOMO is the best Coliving space you'll find in Gurgaon. Here at ACOMO, we get healthy meals.",
  },
];
const Reviews = () => {
  return (
    <div className=" max-w-[1400px] mx-auto my-0 px-28 py-16">
      <div>
        <h2 className=" flex gap-8 mb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M13.1463 20.101H5.52503C5.65503 27.6898 7.15003 28.941 11.8138 31.7035C12.35 32.0285 12.5288 32.711 12.2038 33.2635C11.8788 33.7998 11.1963 33.9787 10.6438 33.6537C5.15128 30.4037 3.23378 28.421 3.23378 18.9635V10.2049C3.23378 7.42614 5.49253 5.18359 8.25503 5.18359H13.13C15.99 5.18359 18.1513 7.34489 18.1513 10.2049V15.0799C18.1675 17.9399 16.0063 20.101 13.1463 20.101Z"
              fill="#000341"
              stroke="#000341"
              stroke-width="1.625"
            />
            <path
              opacity="0.4"
              d="M30.7293 20.101H23.108C23.238 27.6898 24.733 28.941 29.3968 31.7035C29.933 32.0285 30.1118 32.711 29.7868 33.2635C29.4618 33.7998 28.7793 33.9787 28.2268 33.6537C22.7343 30.4037 20.8168 28.421 20.8168 18.9635V10.2049C20.8168 7.42614 23.0755 5.18359 25.838 5.18359H30.713C33.573 5.18359 35.7343 7.34489 35.7343 10.2049V15.0799C35.7505 17.9399 33.5893 20.101 30.7293 20.101Z"
              fill="#000341"
              stroke="#000341"
              stroke-width="1.625"
            />
          </svg>
          {"     "} <span className=" text-[28px] font-bold">What Homies you have to say</span>
        </h2>
      </div>
      <div className=" flex gap-16">
        {reviewData.map((rev, key)=> (
            <div key={key} style={{border:"1px solid black", boxShadow:"12px 12px 2px 1px rgb(0 0 0)"}} className="bg-[#E5e7ff] flex items-center p-8 gap-3">
                <Image
                src={"/images/intersect.png"}
                alt="as" 
                width={112}
                height={112}
                className=" w-[40%]"
                />
                <div>
                    <div className=" flex">
                        {[...Array(5)].map((star,i)=> (
                            <IoStar key={i}/>
                        ))}
                    </div>
                    <div>
                        <h6 className=" font-medium text-xl">{rev.titlt}</h6>
                        <p className=" text-base">{rev.review}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
