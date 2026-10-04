import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  name: string;
  name2: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <li className="hidden max-lg:w-25 max-lg:h-[2.8125rem] max-lg:list-item" aria-hidden="true">
      <div className="hidden max-lg:w-25 max-lg:h-[2.8125rem] max-lg:block max-lg:relative max-lg:shrink-0" name={d.name}>
        <div className="hidden max-lg:flex max-lg:relative max-lg:rounded-[10px] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden" name={d.name2}>
          <div className="hidden max-lg:w-22.5 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-hidden max-lg:aspect-[2/1]">
            <div className={cn("hidden", styles.className)}>
              <img className={cn("hidden max-lg:w-full max-lg:h-[2.8125rem] max-lg:block max-lg:overflow-clip max-lg:object-contain", styles.className2)} alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
