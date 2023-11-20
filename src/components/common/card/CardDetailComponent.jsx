import React from "react";
import { Card } from "flowbite-react";

export default function CardDetailComponent({ title, description, image }) {
  return (
    <div className="flex justify-center mt-16">
      <Card className="flex p-8" imgSrc={image} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title || "product title"}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description || "Product description"}
        </p>
      </Card>
    </div>
  );
}
