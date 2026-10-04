import type { ReactNode } from "react";
import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  name: string;
  name2: string;
  icon: ReactNode;
  description: string;
  description2: string;
  height: string;
  imgSrc: string;
  width: string;
  description3: string;
  description4: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className="w-1/3 block relative grow shrink-0 basis-0 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial]" name={d.name}>
      <div className="flex relative p-2.5 flex-col justify-start items-start content-start after:content-[''] after:block after:absolute after:inset-0 after:h-65" name={d.name2}>
        <div className={cn("w-95 h-60 flex relative p-6 rounded-xl flex-col justify-between items-start content-start shrink-0 overflow-clip max-md:w-[19.1875rem] md:max-lg:w-175 2xl:w-[433.3px] after:content-[''] after:block after:absolute after:inset-0 after:h-60 after:rounded-tl-xl", styles.className)}>
          <div className="w-83 flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-clip max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
            <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip">
              <div className="w-[1.1875rem] h-[1.1875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <svg className="w-[1.1875rem] h-[1.1875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
                </div>
              </div>
              <div className="flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                <div className="w-[1.55rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                  <p className="block text-muted-foreground [font-family:'JetBrains_Mono',_monospace] text-sm leading-4 tracking-[-0.14px]" dir="auto">
                    {d.description}
                  </p>
                </div>
                <div className="w-3 h-3 block relative shrink-0" aria-hidden="true">
                  <div className="h-full block">
                    <svg className="w-3 h-3 block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                      <use href="#svg-584424782_783" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-83 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
              <div className="w-83 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                  {d.description2}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
            <div className="w-10 h-10 block relative rounded-lg shrink-0 overflow-hidden">
              <div className="w-10 h-full block absolute top-0 rounded-lg">
                <img className={cn("w-10 h-10 block rounded-lg overflow-clip", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
              </div>
            </div>
            <div className="w-71 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-0.5 max-md:w-[13.1875rem] md:max-lg:w-151 2xl:w-[337.3px]">
              <div className="w-71 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.1875rem] md:max-lg:w-151 2xl:w-[337.3px]">
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                  {d.description3}
                </p>
              </div>
              <div className="w-71 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.1875rem] md:max-lg:w-151 2xl:w-[337.3px]">
                <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                  {d.description4}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg1527700876_422" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg334393695_407" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg172319957_405" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
            <div className="h-full block">
              <svg className="w-2.5 h-[0.6875rem] block overflow-hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                <use href="#svg-2126597858_420" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
