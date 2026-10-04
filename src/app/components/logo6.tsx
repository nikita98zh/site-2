import type { ReactNode } from "react";
import type { Logo6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo6Data = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <div className={cn("hidden max-lg:w-2.5 max-lg:h-[0.6875rem] max-lg:flex max-lg:absolute max-lg:z-1 max-lg:min-w-0 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip", styles.className)}>
      <div className="hidden max-lg:w-2.5 max-lg:h-[0.6875rem] max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
        <div className="hidden max-lg:h-full max-lg:block">
          <svg className="hidden max-lg:w-2.5 max-lg:h-[0.6875rem] max-lg:block max-lg:overflow-hidden" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </div>
  );
}
