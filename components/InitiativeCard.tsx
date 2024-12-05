import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Strings } from "@/constants/strings";

const InitiativeCard = ({ initiative }: { initiative: any }) => {
  return (
    <>
      <div className="relative h-48">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {initiative.title}
        </h3>
        <p className="text-gray-600 mb-4">{initiative.description}</p>
        <Button asChild className="w-full bg-rose-500 hover:bg-rose-600">
          <Link href={Strings.DONATE_LINK}>Support This Initiative</Link>
        </Button>
      </div>
    </>
  );
};

export default InitiativeCard;
