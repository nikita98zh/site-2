import type { ReactNode } from "react";
import type { Logo13Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo13Data = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo13({ d, styles }: { d: Logo13Data; styles: Logo13Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-2.5 h-[0.6875rem] flex absolute z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip", styles.className)}>
        <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
          <div className="h-full block">
            <svg className="w-2.5 h-[0.6875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
          </div>
        </div>
      </div>
    </div>
  );
}
