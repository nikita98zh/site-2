import type { Logo15Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo15Data = {
  kind?: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo15({ d, styles }: { d: Logo15Data; styles: Logo15Styles }) {
  return (
    <li className="w-25 h-[2.8125rem] list-item" aria-hidden="true">
      <div className="w-25 h-[2.8125rem] block relative shrink-0" name="Logo Card">
        <div className="flex relative rounded-[10px] justify-center items-center content-center gap-2.5 overflow-hidden" name="Logo Card">
          <div className="w-22.5 block relative shrink-0 overflow-hidden aspect-[2/1]">
            <div className="w-22.5 h-full block absolute top-0">
              <img className={cn("w-full h-[2.8125rem] block overflow-clip object-contain", styles.className)} data-component={d.kind} alt="logo" height={d.height} src={d.imgSrc} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
