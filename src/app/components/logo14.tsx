import type { Logo14Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo14Data = {
  kind?: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
  ariahidden?: string;
};
/** A logo. */
export default function Logo14({ d, styles }: { d: Logo14Data; styles: Logo14Styles }) {
  return (
    <li className="list-item" aria-hidden={d.ariahidden}>
      <div className="flex relative p-0.5 rounded-sm justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-surface-2">
        <div className={cn("basis-full shrink-0 flex relative p-[0.8125rem] rounded-sm justify-center items-center content-center gap-2.5 bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-16.5 after:h-16.5 after:rounded-tl-sm", styles.className)}>
          <div className={cn("shrink-0 block relative rounded-sm", styles.className2)}>
            <div className="w-10 h-full block absolute top-0 rounded-sm">
              <img className={cn("w-full h-10 block rounded-sm overflow-clip object-contain", styles.className3)} data-component={d.kind} alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
