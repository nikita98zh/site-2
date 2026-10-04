import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  name: string;
  name2: string;
  description: string;
  description2: string;
  description3: string;
  style: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="contents min-w-0">
      <div className="w-75 h-[19.1875rem] block relative grow shrink-0 basis-0 max-md:w-[20.4375rem] max-lg:h-65 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-85" name={d.name}>
        <div className="h-full flex relative p-2.5 flex-col justify-between items-start content-start bg-surface-2 after:content-[''] after:block after:absolute after:inset-0" name={d.name2}>
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
          <div className="w-full h-full flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
            <div className="w-58 flex relative flex-col justify-start items-start content-start shrink-0 order-[1] gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-68">
              <div className="w-58 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-68">
                <div className="w-58 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-68">
                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px]" dir="auto">
                    {d.description}
                  </p>
                </div>
                <div className="w-58 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-68">
                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description2}
                  </p>
                </div>
              </div>
              <div className="w-58 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-68">
                <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                  {d.description3}
                </p>
              </div>
            </div>
            <div className={cn("w-8 block relative shrink-0 aspect-square", styles.className)} style={d.style} />
          </div>
        </div>
      </div>
    </div>
  );
}
