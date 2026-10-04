import type { Logo7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo7Data = Record<string, never>;
/** A logo. */
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <div className={cn("w-[3.0625rem] h-[1.0625rem] block absolute min-w-0 shrink-0 max-lg:hidden", styles.className)} aria-hidden="true">
      <div className={cn("block max-lg:hidden", styles.className2)}>
        <svg className="w-[3.0625rem] h-[1.0625rem] block overflow-hidden max-lg:hidden focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="image" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
          <use href="#svg1795859381_316" />
        </svg>
      </div>
    </div>
  );
}
