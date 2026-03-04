"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";

interface AwardCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  points?: string;
  category: string;
}

export function AwardCard({
  title,
  date,
  description,
  imageUrl,
  points,
  category,
}: AwardCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col h-full border hover:shadow-lg transition-all duration-300 ease-out overflow-hidden">
        {imageUrl && (
          <button
            className="relative w-full overflow-hidden cursor-zoom-in focus:outline-none"
            style={{ height: "200px" }}
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full image of ${title}`}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
              style={{
                filter: "contrast(1.05) brightness(1.03)",
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
        <CardHeader className="pb-2 px-4 pt-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-sm font-semibold leading-tight">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs shrink-0">
              {category}
            </Badge>
          </div>
          <time className="text-xs text-muted-foreground">{date}</time>
        </CardHeader>
        <CardContent className="px-4 pb-4 flex flex-col flex-1 gap-2">
          <p className="text-xs text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>
          {points && (
            <div className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <span>⭐</span>
              <span>{points}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {lightboxOpen && imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full image of ${title}`}
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
                alt={`Full view of ${title}`}
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
            <p className="text-center text-white text-sm mt-2">{title} — {date}</p>
          </div>
        </div>
      )}
    </>
  );
}
