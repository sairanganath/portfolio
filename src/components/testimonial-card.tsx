"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  feedback: string;
  imageUrl?: string;
  avatarUrl?: string;
  initials: string;
}

export function TestimonialCard({
  name,
  title,
  company,
  feedback,
  imageUrl,
  avatarUrl,
  initials,
}: TestimonialCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col h-full border hover:shadow-lg transition-all duration-300 ease-out overflow-hidden">
        {imageUrl && (
          <button
            className="relative w-full overflow-hidden cursor-zoom-in focus:outline-none"
            style={{ height: "200px" }}
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full image from ${name}`}
          >
            <Image
              src={imageUrl}
              alt={`Testimonial from ${name}`}
              fill
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
              style={{
                filter: "contrast(1.05) brightness(1.02) sharpen(1)",
              }}
              loading="lazy"
              unoptimized={imageUrl.endsWith(".svg")}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
              Click to expand
            </div>
          </button>
        )}
        <CardContent className="flex flex-col flex-1 p-4 gap-3">
          <blockquote className="text-sm text-muted-foreground italic leading-relaxed flex-1">
            &ldquo;{feedback}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 pt-2 border-t">
            <Avatar className="size-10 border">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="text-xs font-semibold bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">{name}</span>
              <span className="text-xs text-muted-foreground">{title}</span>
              <span className="text-xs text-muted-foreground">{company}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {lightboxOpen && imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full image testimonial from ${name}`}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-sm hover:text-gray-300 focus:outline-none"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              ✕ Close
            </button>
            <div className="relative w-full" style={{ minHeight: "300px" }}>
              <Image
                src={imageUrl}
                alt={`Full testimonial from ${name}`}
                width={900}
                height={600}
                className="rounded-lg object-contain w-full h-auto"
                style={{
                  filter: "contrast(1.1) brightness(1.05)",
                  imageRendering: "crisp-edges",
                }}
                unoptimized={imageUrl.endsWith(".svg")}
              />
            </div>
            <p className="text-center text-white text-sm mt-2">{name} — {title}</p>
          </div>
        </div>
      )}
    </>
  );
}
