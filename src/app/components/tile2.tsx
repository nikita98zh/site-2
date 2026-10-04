import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  style: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("flex relative py-1 px-2 rounded-sm justify-start items-center content-center shrink-0 gap-2 max-lg:hidden", styles.className)}>
      <div className={cn("w-[0.6875rem] block relative shrink-0 aspect-square max-lg:hidden", styles.className2)} style={d.style} />
      <div className={cn("flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className3)}>
        <p className={cn("block [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium tracking-[-0.12px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden", styles.className4)} dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
