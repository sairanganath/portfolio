import { Card, CardContent } from "@/components/ui/card";

interface AwardCardProps {
  title: string;
  date: string;
  description: string;
  icon: string;
  category: string;
  points?: string;
}

export function AwardCard({
  title,
  date,
  description,
  icon,
  category,
  points,
}: AwardCardProps) {
  return (
    <Card className="flex flex-col border hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1">
      <CardContent className="flex flex-col gap-3 pt-6">
        <div className="flex items-start justify-between gap-2">
          <span className="text-3xl" role="img" aria-label={title}>
            {icon}
          </span>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-muted-foreground tabular-nums">
              {date}
            </span>
            {points && (
              <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                {points}
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{category}</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
