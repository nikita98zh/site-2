import type { Logo5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo5Data = Record<string, never>;
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-[1.0625rem] h-[1.0625rem] flex absolute z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip", styles.className)}>
        <div className="w-[1.0625rem] h-[1.0625rem] block relative shrink-0" aria-hidden="true">
          <div className="h-full block">
            <svg className="w-[1.0625rem] h-[1.0625rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
              <use href="#svg1508962229_448" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
