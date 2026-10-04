import type { ReactNode } from "react";
import type { Logo12Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo12Data = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo12({ d, styles }: { d: Logo12Data; styles: Logo12Styles }) {
  return (
    <div className={cn("w-2.5 h-[0.6875rem] flex absolute z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden", styles.className)}>
      <div className="w-2.5 h-[0.6875rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
        <div className="h-full block max-lg:hidden">
          <svg className="w-2.5 h-[0.6875rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </div>
  );
}
