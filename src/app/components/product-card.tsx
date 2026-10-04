import type { ProductCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ProductCardData = {
  name: string;
  name2: string;
  style: string;
  description: string;
  description2: string;
  description3: string;
  name3: string;
  name4: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
};
/** A product card. */
export default function ProductCard({ d, styles }: { d: ProductCardData; styles: ProductCardStyles }) {
  return (
    <div className={cn("w-1/3 block relative grow shrink-0 basis-0 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial]", styles.className)} name={d.name}>
      <div className={cn("flex relative p-2.5 flex-col justify-center items-start content-start after:content-[''] after:block after:absolute after:inset-0 after:h-[29.175rem] max-lg:after:h-115.5", styles.className2)} name={d.name2}>
        <div className={cn("w-full flex relative p-6 rounded-xl flex-col justify-center items-start content-start shrink-0 gap-6 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:h-[27.925rem] after:rounded-tl-xl max-lg:after:h-110.5", styles.className3)}>
          <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip">
            <div className={cn("w-8 block relative shrink-0 aspect-square", styles.className4)} style={d.style} />
            <div className={cn("flex relative py-1.5 px-2.5 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[3.9125rem] after:h-[1.65rem]", styles.className5)}>
              <div className="w-[2.6625rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                  Popular
                </p>
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
          <div className="w-83 flex relative flex-col justify-start items-start content-start shrink-0 gap-8 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
            <div className="w-83 flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
              <div className="w-83 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
                <div className="w-83 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.28px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]" dir="auto">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="w-83 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
                <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                  {d.description2}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20.3125rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-[3.3125rem] tracking-[-0.44px]" dir="auto">
              {d.description3}
            </p>
          </div>
          <div className="w-83 block relative shrink-0 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]" name={d.name3}>
            <a className={cn("h-12 flex relative py-3.5 rounded-sm justify-center items-center content-center gap-2.5 text-primary cursor-pointer", styles.className6)} data-component="link" href="/contact-us" name={d.name4}>
              <div className="w-[4.9375rem] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                  <p className={cn("block [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]", styles.className7)} dir="auto">
                    Get Started
                  </p>
                </div>
                <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                  <p className={cn("block [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]", styles.className8)} dir="auto">
                    Get Started
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="w-83 flex relative pt-4 flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px] after:content-[''] after:block after:absolute after:inset-0 after:h-28">
            <div className="w-83 flex relative flex-col justify-start items-start content-start shrink-0 gap-2 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[385.3px]">
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                <div className="w-76.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-[359.3px]">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description4}
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                <div className="w-76.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-[359.3px]">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description5}
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                <div className="w-76.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-[359.3px]">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description6}
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                <div className="w-76.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-[359.3px]">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description7}
                  </p>
                </div>
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
