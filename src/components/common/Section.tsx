import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLElement> & {
  id?: string;
  children: ReactNode;
  bare?: boolean;
};

export const Section = forwardRef<HTMLElement, Props>(
  ({ id, children, className, bare = false, ...rest }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative w-full",
          !bare && "py-20 sm:py-24 md:py-28 scroll-mt-24",
          className,
        )}
        {...rest}
      >
        {children}
      </section>
    );
  },
);
Section.displayName = "Section";
