import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  name: string;
  name2: string;
  description: string;
  description2: string;
  description3: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="w-full block relative shrink-0" name={d.name}>
      <div className="flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0" name={d.name2}>
        <div className={cn("w-full flex relative p-6 rounded-xl flex-col justify-start items-start content-start shrink-0 gap-8 overflow-clip", styles.className)}>
          <div className={cn("h-[2.0625rem] flex relative py-0.5 px-2.5 rounded-sm justify-start items-center content-center shrink-0 gap-3 after:content-[''] after:block after:absolute after:inset-0 after:h-[2.0625rem] after:rounded-tl-sm", styles.className2)}>
            <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
              <p className={cn("block [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[1.0625rem] tracking-[-0.56px] text-center uppercase", styles.className4)} dir="auto">
                {d.description}
              </p>
            </div>
          </div>
          <div className="w-91 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
            <div className="w-91 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
              <p className={cn("block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px]", styles.className5)} dir="auto">
                {d.description2}
              </p>
            </div>
            <div className="w-91 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                {d.description3}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg1527700876_422" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg334393695_407" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg172319957_405" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg-2126597858_420" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
