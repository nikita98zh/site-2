import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
        {d.description}
      </p>
    </div>
  );
}
