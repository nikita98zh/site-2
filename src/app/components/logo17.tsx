import type { Logo17Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo17Data = Record<string, never>;
/** A logo. */
export default function Logo17({ d, styles }: { d: Logo17Data; styles: Logo17Styles }) {
  return (
    <div className={cn("w-[1.0625rem] h-[1.0625rem] flex absolute z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden", styles.className)}>
      <div className="w-[1.0625rem] h-[1.0625rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
        <div className="h-full block max-lg:hidden">
          <svg className="w-[1.0625rem] h-[1.0625rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
            <use href="#svg1508962229_448" />
          </svg>
        </div>
      </div>
    </div>
  );
}
