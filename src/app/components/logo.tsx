import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-[5.6rem] h-10 flex absolute min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip transform-[matrix(1,0,0,1,-44.7969,0)] pointer-events-none max-lg:hidden 2xl:w-[6.3rem] 2xl:transform-[matrix(1,0,0,1,-50.3984,0)]", styles.className)}>
      <div className={cn("block shrink-0 pointer-events-none max-lg:hidden", styles.className2)} aria-hidden="true">
        <div className="h-full block pointer-events-none max-lg:hidden">
          <svg className={cn("block overflow-hidden pointer-events-none max-lg:hidden", styles.className3)} data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </div>
  );
}
