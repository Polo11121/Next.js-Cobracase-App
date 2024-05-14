import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type StarsProps = {
  numOfStars: number;
  className?: string;
};

export const Stars = ({ numOfStars, className }: StarsProps) =>
  Array.from({ length: numOfStars }, (_, i) => (
    <Star
      key={i}
      className={cn("w-5 h-5 text-green-600 fill-green-600", className)}
    />
  ));
