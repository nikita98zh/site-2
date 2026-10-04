import type { Tile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile5Data = {
  href: string;
  description: string;
  rel?: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className)}>
      <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.15px]" dir="auto">
        <a className="hidden max-lg:inline max-lg:cursor-pointer" href={d.href} target="_blank" rel={d.rel}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
