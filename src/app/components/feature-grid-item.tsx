import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
export type FeatureGridItemData = {
  variant: string;
  title?: string;
  description?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "fragmented-writing":
      return (
        <div className="w-[30%] h-[19.1875rem] flex relative p-6 flex-col justify-between items-start content-start shrink-0 max-lg:w-full max-lg:h-54.5 max-lg:justify-center max-lg:gap-8 after:content-[''] after:block after:absolute after:inset-0">
          <div className="w-7 block relative rounded-sm shrink-0 overflow-clip aspect-square bg-surface">
            <div className="contents">
              <div className="w-5 h-5 block absolute top-3.5 left-3.5 shrink-0 aspect-square bg-color-001 transform-[matrix(1,0,0,1,-10,-10)]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 12 0 L 0 12\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"JuEqmLwI0\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 6)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 0 L 12 12\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"aEN6gG6Cz\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 6)\\\" width=\\\"12px\\\"/></svg>\"), none" }} />
            </div>
          </div>
          <div className="w-78 flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-md:w-[17.4375rem] max-lg:gap-4 md:max-lg:w-168 2xl:w-90">
            <div className="w-78 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-90">
              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                {d.title}
              </p>
            </div>
            <div className="w-78 flex relative flex-col justify-start items-start content-start shrink-0 gap-2 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-90">
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    Constantly starting from a blank page
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    No clear structure or direction
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon8 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon9 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon10 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon11 />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "manual-workflows":
      return (
        <div className="w-[30%] h-[19.1875rem] flex relative p-6 flex-col justify-between items-start content-start shrink-0 max-lg:w-full max-lg:h-54.5 max-lg:justify-start max-lg:gap-8 after:content-[''] after:block after:absolute after:inset-0">
          <div className="w-7 block relative rounded-sm shrink-0 overflow-clip aspect-square bg-surface">
            <div className="contents">
              <div className="w-5 h-5 block absolute top-3.5 left-3.5 shrink-0 aspect-square bg-color-001 transform-[matrix(1,0,0,1,-10,-10)]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 12 0 L 0 12\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"JuEqmLwI0\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 6)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 0 L 12 12\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"aEN6gG6Cz\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 6)\\\" width=\\\"12px\\\"/></svg>\"), none" }} />
            </div>
          </div>
          <div className="w-78 flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-md:w-[17.4375rem] max-lg:gap-4 md:max-lg:w-168 2xl:w-90">
            <div className="w-78 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-90">
              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                {d.title}
              </p>
            </div>
            <div className="w-78 flex relative flex-col justify-start items-start content-start shrink-0 gap-2 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-90">
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    Writing takes too much time
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    Endless editing and rewriting
                  </p>
                </div>
              </div>
              <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                <div className="contents min-w-0">
                  <div className="w-4.5 block relative shrink-0 aspect-square bg-muted-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 14 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"ByVkGMe7_\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(5 12)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                </div>
                <div className="w-71.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[15.8125rem] md:max-lg:w-161.5 2xl:w-83.5">
                  <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon8 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon9 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon10 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon11 />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "n848":
      return (
        <div className="w-2/5 h-[19.1875rem] flex relative p-2.5 flex-col justify-between items-start content-start grow shrink-0 basis-0 bg-surface-2 max-lg:w-full max-md:h-[16.825rem] max-lg:justify-center max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-59.5">
          <div className="contents min-w-0">
            <div className="w-full h-[17.9375rem] flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-md:h-[15.575rem] max-lg:justify-center max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-54.5 after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
              <div className="w-7 block relative rounded-sm shrink-0 overflow-clip aspect-square bg-color-001">
                <div className="w-5 h-5 block absolute top-3.5 left-3.5 shrink-0 aspect-square bg-surface transform-[matrix(1,0,0,1,-10,-10)]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 16 0 L 5 11 L 0 6\\\" fill=\\\"transparent\\\" height=\\\"11px\\\" id=\\\"XRMs5MmwO\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(4 6)\\\" width=\\\"16px\\\"/></svg>\"), none" }} />
              </div>
              <div className="w-103 flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-md:w-[16.1875rem] max-lg:gap-4 md:max-lg:w-163 2xl:w-119">
                <div className="w-103 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-119">
                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                    AI-powered content flow
                  </p>
                </div>
                <div className="w-103 flex relative flex-col justify-start items-start content-start shrink-0 gap-2 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-119">
                  <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                    <div className="w-4.5 h-4.5 block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Icon12 />
                      </div>
                    </div>
                    <div className="w-96.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-112.5">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                        Generate structured content in seconds
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                    <div className="w-4.5 h-4.5 block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Icon12 />
                      </div>
                    </div>
                    <div className="w-96.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-112.5">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                        Keep your voice consistent everywhere
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
                    <div className="w-4.5 h-4.5 block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Icon12 />
                      </div>
                    </div>
                    <div className="w-96.5 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.5625rem] md:max-lg:w-156.5 2xl:w-112.5">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                        Refine, edit, and scale effortlessly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute bottom-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon8 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 left-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon9 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute top-0 right-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon10 />
                </div>
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="w-2.5 h-[0.6875rem] flex absolute right-0 bottom-0 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
              <div className="w-2.5 h-[0.6875rem] block relative shrink-0" aria-hidden="true">
                <div className="h-full block">
                  <Icon11 />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
