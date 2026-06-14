"use client";

import Image from "next/image";
import ImagePreview from "@/components/ImagePreview";
import introductionData from "@/data/introduction.json";
import { useState } from 'react';

export default function FounderGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = introductionData.images;
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-950 mb-4">Services</h3>
      <div className="relative mx-auto max-w-4xl">
        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
          <ImagePreview src={images[currentIndex]} alt={`Service ${currentIndex + 1}`}>
            <Image
              src={images[currentIndex]}
              alt={`Service ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
          </ImagePreview>
        </div>
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full shadow-md hover:bg-opacity-90">‹</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full shadow-md hover:bg-opacity-90">›</button>
      </div>
    </div>
  );
}
