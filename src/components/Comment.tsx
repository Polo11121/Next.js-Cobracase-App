import { ReactNode } from "react";
import { Stars } from "@/components/Stars";
import { Check } from "lucide-react";

type CommentProps = {
  numOfStars: number;
  name: string;
  children: ReactNode;
  imgSrc: string;
};

export const Comment = ({
  children,
  imgSrc,
  numOfStars,
  name,
}: CommentProps) => (
  <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
    <div className="flex gap-0.5 mb-2">
      <Stars numOfStars={numOfStars} />
    </div>
    <div className="text-lg leading-8">{children}</div>
    <div className="flex gap-4 mt-2">
      <img
        src={imgSrc}
        alt="user image"
        className="rounded-full h-12 w-12 object-cover"
      />
      <div className="flex flex-col">
        <p>{name}</p>
        <div className="flex gap-1.5 items-center text-zinc-600">
          <Check className="h-4 w-4 stroke-[3px] text-green-600" />
          <p className="">Verified Purchase</p>
        </div>
      </div>
    </div>
  </div>
);
