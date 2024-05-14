import { PropsWithClassName } from "@/lib/types";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = PropsWithClassName & PropsWithChildren;

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => (
  <div
    className={cn(
      "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
      className
    )}
  >
    {children}
  </div>
);
