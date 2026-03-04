"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  feedback: string;
  highlight: string;
  initials: string;
}

export function TestimonialCard({
  name,
  title,
  feedback,
  highlight,
  initials,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="flex flex-col h-full border hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col gap-4 pt-6">
          <div className="flex items-center gap-3">
            <Quote className="size-5 text-muted-foreground shrink-0" />
            <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 line-clamp-1">
              {highlight}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            &ldquo;{feedback}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-2 border-t">
            <Avatar className="size-10 border">
              <AvatarFallback className="text-xs font-semibold bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold leading-none">{name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
