"use client";
import { useState, useEffect } from "react";

const InformationBar: React.FC = () => {
  const sentences: string[] = [
    "Up to 50% off on selected items, only this month!",
    "Discover our curated collection of best sellers– explore now!",
    "Step into timeless elegance with our classics selection.",
    "Explore our new arrivals & be the first to seize the freshest looks of the season!",
  ];

  const [sentence, setSentence] = useState<string>(sentences[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setSentence(sentences[randomIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-6 w-full pt-1">
      <p className="text-information md:text-xs text-center">{sentence}</p>
    </div>
  );
};
export default InformationBar;
