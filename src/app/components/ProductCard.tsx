"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import ImageLightbox from "./ImageLightbox";
import type { Brand } from "@/data/brands";

interface ProductCardProps {
  brand: Brand;
}

export default function ProductCard({ brand }: ProductCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Update selected index when carousel scrolls
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? brand.images.length - 1 : prev - 1,
    );
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) =>
      prev === brand.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group">
        {/* Carousel Container */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden">
          {/* Embla Carousel */}
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {brand.images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4"
                >
                  <Image
                    src={image}
                    alt={`${brand.name} - Imagen ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => openLightbox(selectedIndex)}
            className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            style={{ opacity: "var(--mobile-opacity, 1)" }}
            aria-label="Expandir imagen"
          >
            <ArrowsPointingOutIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Navigation Arrows - Only show if more than 1 image */}
          {brand.images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Imagen siguiente"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Dots Indicator - Only show if more than 1 image */}
          {brand.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              {brand.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-primary-600 scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Brand Name */}
        <h3 className="text-2xl font-display font-bold text-primary-900 mb-3 text-center">
          {brand.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed">
          {brand.description}
        </p>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={brand.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={lightboxPrev}
        onNext={lightboxNext}
        altText={brand.name}
      />
    </>
  );
}
