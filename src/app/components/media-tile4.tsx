export type MediaTile4Data = {
  name: string;
  name2: string;
  description: string;
};
/** A media tile. */
export default function MediaTile4({ d }: { d: MediaTile4Data }) {
  return (
    <div className="w-full h-21 block relative shrink-0 max-md:h-23" name={d.name}>
      <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-21 max-md:after:h-23" name={d.name2}>
        <div className="w-145 h-full flex relative py-3 px-6 rounded-xl flex-col justify-center items-start content-start shrink-0 gap-3 overflow-clip max-md:w-[19.1875rem] md:max-lg:w-175 2xl:w-165">
          <div className="w-full h-full flex relative justify-center items-center content-center shrink-0 gap-2.5">
            <div className="w-120.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.0625rem] md:max-lg:w-150.5 2xl:w-140.5">
              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                {d.description}
              </p>
            </div>
            <div className="w-10 h-10 block relative shrink-0" name="FAQ Instance 2">
              <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm" name="FAQ Instance 2">
                <div className="w-6 block relative shrink-0 aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[12px_12px]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FKhttcrgU\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 12 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"ypco3dpHt\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(12 6)\\\" width=\\\"1px\\\"/></svg>\"), none" }} />
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
