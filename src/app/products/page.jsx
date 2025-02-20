"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";

const designCatalogs = [
  { id: 1, src: "/design1.png", title: "Design Catalog" },
  { id: 2, src: "/design1.png", title: "Design Catalog" },
  { id: 3, src: "/design1.png", title: "Design Catalog" },
  { id: 4, src: "/design1.png", title: "Design Catalog" },
];

export default function Product() {
  const [showUI, setShowUI] = useState(null);

  return (
    <div className="bg-gray-50 w-full text-black font-sans px-24 py-10">
      <div className="flex gap-10">
        <div className="grid grid-cols-4 gap-3 pb-10">
          {designCatalogs.map((item) => (
            <Card
              key={item.id}
              className="bg-white shadow-blue-gray-900/5 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-3 px-4 py-2">
                {/* Image Wrapper */}
                <div className="w-full flex justify-center">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={240}
                    height={120}
                    className="rounded-md shadow-xl object-cover h-40 w-80"
                  />
                </div>
                <h1 className="font-medium text-sm text-center">
                  {item.title}
                </h1>
              </div>
              <Button className=" mx-4 my-2 w-20 bg-yl hover:bg-orange-400">
                View
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
