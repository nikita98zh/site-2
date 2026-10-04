import type { Logo16Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo16Data = Record<string, never>;
/** A logo. */
export default function Logo16({ d, styles }: { d: Logo16Data; styles: Logo16Styles }) {
  return (
    <div className={cn("hidden max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:flex max-lg:absolute max-lg:z-1 max-lg:min-w-0 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip", styles.className)}>
      <div className="hidden max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
        <div className="hidden max-lg:h-full max-lg:block">
          <svg className="hidden max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:block max-lg:overflow-hidden" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
            <use href="#svg1508962229_448" />
          </svg>
        </div>
      </div>
    </div>
  );
}
