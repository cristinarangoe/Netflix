import React from "react";

export default function MediaItem({ name, image }) {
  return (
    <div className="transition-all w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 outline-none focus-visible:outline-none visited:outline-none">
      <img
        src={image}
        className="w-full h-auto block visited:outline-none focus-visible:outline-none"
        alt={name}
      />
    </div>
  );
}
