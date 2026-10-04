import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className)}>
      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px] max-lg:hidden" dir="auto">
        <a className="inline cursor-pointer max-lg:hidden hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)]" data-component="link" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
