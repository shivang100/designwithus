import Image from "next/image";
export default function HomePage() {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/image/home.jpg')" }}
    >
      <div className="absolute inset-0 bg-black backdrop-blur-md opacity-80"></div>
      <div className="relative lg:flex md:flex lg:items-center lg:justify-center md:justify-center md:items-center justify-center items-center h-full">
        <div className="flex flex-col lg:justify-center md:justify-center md:items-center justify-center items-center py-60">
          <Image
            src="/bglogo.png"
            height={5000}
            width={7000}
            alt="logo"
            className="lg:h-[200px] lg:w-[300px] md:h-[100px] md:w-[150px] h-[150px] w-[175px]"
          />
          <Image
            src="/title2.png"
            height={5000}
            width={7000}
            alt="logo"
            className="lg:h-[200px] lg:w-[300px] md:h-[100px] md:w-[150px] h-[150px] w-[175px] "
          />
        </div>
      </div>
    </div>
  );
}
