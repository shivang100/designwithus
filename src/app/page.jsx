import Image from "next/image";
import HomePage from "@/components/HomePage";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Enquiry from "@/components/Enquiry";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      <AboutUs />
      <Products />
      {/* <Enquiry /> */}
      <Contact />
    </div>
  );
}
