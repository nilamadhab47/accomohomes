import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className=" bg-[#000341] md:px-20 px-4 py-24 flex flex-col md:flex-row justify-around items-baseline text-white">
      <div className=" flex flex-col gap-40  w-[40%]">
        <div className=" ">
        <h1 className=" text-3xl mb-4 ">ACCOMO<span className=" italic font-light">Homes</span></h1>
        <span className=" text-xs font-light">Call us on +91 9090908778</span>
        <div className="icons flex items-center gap-5 mt-4">
            <FaLinkedin/>
            <FaInstagram/>
            <FaFacebookSquare/>
            <BsTwitterX />
        </div>
        </div>
        <div>
            <h3 className="text-2xl italic">#LetsLiveBetter</h3>
        </div>
        
      </div>
      <div className=" flex flex-col md:flex-row gap-12 justify-between items-baseline w-[60%]">
            <div>
                <h6 className=" font-bold mb-7 text-xl">Rent</h6>
                <div className="list">
                    <ul className=" font-light">
                        <li className=" mb-4" >By location</li>
                        <li>by Property types</li>
                    </ul>
                </div>
            </div>
            <div>
                <h6 className=" font-bold mb-7 text-xl">Companies</h6>
                <div className="list">
                    <ul className=" font-light">
                        <li className=" mb-4">About us</li>
                        <li className=" mb-4">Blogs</li>
                        <li className=" mb-4">Careers</li>
                        <li>Partners</li>
                    </ul>
                </div>
            </div>
            <div>
                <h6 className=" font-bold mb-7 text-xl">Services</h6>
                <div className="list">
                    <ul className=" font-light">
                        <li className=" mb-4">Housr Home</li>
                        <li>Housr Coliving types</li>
                    </ul>
                </div>
            </div>
            <div>
                <h6 className=" font-bold mb-7 text-xl">Support</h6>
                <div className="list">
                    <ul>
                        <li className=" mb-4">FAQ</li>
                        <li className=" mb-4">Terms & condition</li>
                        <li className=" mb-4">Privacy policy</li>
                        <li>Cancellation Policy</li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
