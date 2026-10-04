import type { Logo11Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo11Data = Record<string, never>;
/** A logo. */
export default function Logo11({ d, styles }: { d: Logo11Data; styles: Logo11Styles }) {
  return (
    <div className={cn("w-[7.2rem] flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden 2xl:w-[130.5px] after:content-[''] after:block after:absolute after:inset-0 max-lg:after:hidden", styles.className)}>
      <div className={cn("w-full flex relative p-6 rounded-xl flex-col justify-start items-start content-start shrink-0 gap-8 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl max-lg:after:hidden", styles.className2)} />
      <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
        <div className="w-2.5 h-[0.6875rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
          <div className="h-full block max-lg:hidden">
            <svg className="w-2.5 h-[0.6875rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
              <use href="#svg1527700876_422" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
        <div className="w-2.5 h-[0.6875rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
          <div className="h-full block max-lg:hidden">
            <svg className="w-2.5 h-[0.6875rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
              <use href="#svg334393695_407" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
        <div className="w-2.5 h-[0.6875rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
          <div className="h-full block max-lg:hidden">
            <svg className="w-2.5 h-[0.6875rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
              <use href="#svg172319957_405" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
        <div className="w-2.5 h-[0.6875rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
          <div className="h-full block max-lg:hidden">
            <svg className="w-2.5 h-[0.6875rem] block overflow-hidden max-lg:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
              <use href="#svg-2126597858_420" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
