import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  name: string;
  name2: string;
  kind?: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className="w-25 h-[2.8125rem] list-item max-lg:hidden" aria-hidden="true">
      <div className="w-25 h-[2.8125rem] block relative shrink-0 max-lg:hidden" name={d.name}>
        <div className="flex relative rounded-[10px] justify-center items-center content-center gap-2.5 overflow-hidden max-lg:hidden" name={d.name2}>
          <div className="w-22.5 block relative shrink-0 overflow-hidden aspect-[2/1] max-lg:hidden">
            <div className="w-22.5 h-full block absolute top-0 max-lg:hidden">
              <img className={cn("w-full h-[2.8125rem] block overflow-clip object-contain max-lg:hidden", styles.className)} data-component={d.kind} alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
