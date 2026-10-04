import DittoMotion from "./ditto/DittoMotion";
import Icon from "./svgs/svg-icon";
import Tile, { type TileData } from "./components/tile";
import Icon2 from "./svgs/svg-icon2";
import Tile2, { type Tile2Data } from "./components/tile2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Logo, { type LogoData } from "./components/logo";
import Logo2, { type Logo2Data } from "./components/logo2";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Logo3, { type Logo3Data } from "./components/logo3";
import Logo4, { type Logo4Data } from "./components/logo4";
import Icon7 from "./svgs/svg-icon7";
import FeatureGridItem, { type FeatureGridItemData } from "./components/feature-grid-item";
import Logo5, { type Logo5Data } from "./components/logo5";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon13 from "./svgs/svg-icon13";
import Icon14 from "./svgs/svg-icon14";
import Icon15 from "./svgs/svg-icon15";
import Logo6, { type Logo6Data } from "./components/logo6";
import Logo7, { type Logo7Data } from "./components/logo7";
import Logo8, { type Logo8Data } from "./components/logo8";
import Logo9, { type Logo9Data } from "./components/logo9";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Logo10, { type Logo10Data } from "./components/logo10";
import Logo11, { type Logo11Data } from "./components/logo11";
import Logo12, { type Logo12Data } from "./components/logo12";
import Icon16 from "./svgs/svg-icon16";
import Logo13, { type Logo13Data } from "./components/logo13";
import Logo14, { type Logo14Data } from "./components/logo14";
import Logo15, { type Logo15Data } from "./components/logo15";
import MediaTile3, { type MediaTile3Data } from "./components/media-tile3";
import ProductCard, { type ProductCardData } from "./components/product-card";
import MediaTile4, { type MediaTile4Data } from "./components/media-tile4";
import Icon17 from "./svgs/svg-icon17";
import Tile3, { type Tile3Data } from "./components/tile3";
import Icon18 from "./svgs/svg-icon18";
import Logo16, { type Logo16Data } from "./components/logo16";
import Icon19 from "./svgs/svg-icon19";
import Icon20 from "./svgs/svg-icon20";
import Tile4, { type Tile4Data } from "./components/tile4";
import Tile5, { type Tile5Data } from "./components/tile5";
import Icon21 from "./svgs/svg-icon21";
import Icon22 from "./svgs/svg-icon22";
import Icon23 from "./svgs/svg-icon23";
import Logo17, { type Logo17Data } from "./components/logo17";
import Illustration from "./svgs/svg-illustration";
import Tile6, { type Tile6Data } from "./components/tile6";
import Icon24 from "./svgs/svg-icon24";
import Icon25 from "./svgs/svg-icon25";
import Icon26 from "./svgs/svg-icon26";
import Icon27 from "./svgs/svg-icon27";
import Icon28 from "./svgs/svg-icon28";
import Icon29 from "./svgs/svg-icon29";
import Icon30 from "./svgs/svg-icon30";
import Icon31 from "./svgs/svg-icon31";
import Icon32 from "./svgs/svg-icon32";
import Icon33 from "./svgs/svg-icon33";
import Icon34 from "./svgs/svg-icon34";
import Icon35 from "./svgs/svg-icon35";
import Icon36 from "./svgs/svg-icon36";
import Icon37 from "./svgs/svg-icon37";
import Icon38 from "./svgs/svg-icon38";
import Icon39 from "./svgs/svg-icon39";
import Icon40 from "./svgs/svg-icon40";
import Icon41 from "./svgs/svg-icon41";
import Icon42 from "./svgs/svg-icon42";
import Illustration2 from "./svgs/svg-illustration2";
import Icon43 from "./svgs/svg-icon43";
import Icon44 from "./svgs/svg-icon44";
import Icon45 from "./svgs/svg-icon45";
import Icon46 from "./svgs/svg-icon46";
import Icon47 from "./svgs/svg-icon47";
import Icon48 from "./svgs/svg-icon48";
import Icon49 from "./svgs/svg-icon49";
import Icon50 from "./svgs/svg-icon50";
import Icon51 from "./svgs/svg-icon51";
import Icon52 from "./svgs/svg-icon52";
import Icon53 from "./svgs/svg-icon53";
import Icon54 from "./svgs/svg-icon54";
import Icon55 from "./svgs/svg-icon55";
import Icon56 from "./svgs/svg-icon56";
import Icon57 from "./svgs/svg-icon57";
import Icon58 from "./svgs/svg-icon58";
import Icon59 from "./svgs/svg-icon59";
import { Tile_styles, Tile2_styles, Logo_styles, Logo3_styles, Logo4_styles, Tile_styles2, Logo5_styles, Tile_styles3, MediaTile_styles, Logo5_styles2, Tile_styles4, Logo6_styles, Logo7_styles, Logo8_styles, Logo9_styles, Logo6_styles2, Logo8_styles2, Logo9_styles2, Logo6_styles3, Logo8_styles3, Logo9_styles3, Logo5_styles3, Tile_styles5, MediaTile2_styles, Logo10_styles, Logo10_styles2, Logo11_styles, Logo12_styles, Logo10_styles3, Logo12_styles2, Logo11_styles2, Logo5_styles4, Tile_styles6, Logo13_styles, Logo10_styles4, Logo10_styles5, Logo10_styles6, Logo10_styles7, Logo14_styles, Logo5_styles5, Tile_styles7, Logo10_styles8, Logo10_styles9, Logo10_styles10, Logo12_styles3, Logo12_styles4, Logo12_styles5, Logo10_styles11, Logo12_styles6, Logo12_styles7, Logo10_styles12, Logo10_styles13, Logo12_styles8, Logo12_styles9, Logo12_styles10, Logo10_styles14, Logo12_styles11, Logo12_styles12, Logo10_styles15, Logo10_styles16, Logo10_styles17, Logo10_styles18, Logo12_styles13, Logo12_styles14, Logo12_styles15, Logo10_styles19, Logo12_styles16, Logo12_styles17, Logo15_styles, Logo5_styles6, Tile_styles8, MediaTile3_styles, Logo5_styles7, Tile_styles9, ProductCard_styles, Logo5_styles8, Tile_styles10, Logo9_styles4, Logo9_styles5, Logo9_styles6, Logo9_styles7, Logo9_styles8, Logo9_styles9, Tile3_styles, Tile_styles11, Logo_styles2, Logo16_styles, Logo16_styles2, Logo6_styles4, Logo6_styles5, Logo6_styles6, Logo6_styles7, Tile4_styles, Logo6_styles8, Tile4_styles2, Logo6_styles9, Tile5_styles, Logo6_styles10, Logo17_styles, Logo17_styles2, Logo12_styles18, Logo12_styles19, Logo12_styles20, Logo12_styles21, Tile3_styles2, Logo12_styles22, Tile3_styles3, Logo12_styles23, Tile6_styles, Logo12_styles24 } from "./_styles";

const Tile_data: TileData[] = [
    { description: "[" },
    { description: "AI writing tool" },
    { description: "]" }
];
const Tile2_data: Tile2Data[] = [
    { style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z M 6 9 L 8 9 L 8 11 L 6 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"EDpqz0dpF\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "AI Writer" },
    { style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"A6zJ9lDH7\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Brand Voice" },
    { style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"g_g6dD4v_\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Rewrite" },
    { style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"jaHiC89b0\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Summarize" }
];
const Logo_data: LogoData[] = [
    { icon: <>
            <use href="#svg188519765_678" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg-1425003448_920" />
            </> },
    { icon: <>
            <use href="#svg-1588781891_792" />
            </> },
    { icon: <>
            <use href="#svg16556964_744" />
            </> },
    { icon: <>
            <use href="#svg1317494322_706" />
            </> }
];
const Logo2_data: Logo2Data[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  }
];
const Logo3_data: Logo3Data[] = [
    { name: "Client Logo Instance 5", name2: "Client Logo Instance 5", alt: "", height: "81", imgSrc: "/assets/cloned/svg/c3958c9d57a0.svg", width: "294" },
    { name: "Client Logo Instance 4", name2: "Client Logo Instance 4", alt: "", height: "83", imgSrc: "/assets/cloned/svg/b35f8cb0c15f.svg", width: "268" },
    { name: "Client Logo Instance 3", name2: "Client Logo Instance 3", alt: "", height: "88", imgSrc: "/assets/cloned/svg/d1d782e935ea.svg", width: "224" },
    { name: "Client Logo Instance 2", name2: "Client Logo Instance 2", alt: "", height: "81", imgSrc: "/assets/cloned/svg/cae484001e10.svg", width: "286" },
    { name: "Logo Card", name2: "Logo Card", alt: "logo", height: "83", imgSrc: "/assets/cloned/svg/fb23a1986e30.svg", width: "252" },
    { name: "Client Logo Instance 5", name2: "Client Logo Instance 5", alt: "", height: "81", imgSrc: "/assets/cloned/svg/c3958c9d57a0.svg", width: "294" }
];
const Logo4_data: Logo4Data[] = [
    { name: "Client Logo Instance 5", name2: "Client Logo Instance 5", kind: "image", alt: "", height: "81", imgSrc: "/assets/cloned/svg/c3958c9d57a0.svg", width: "294" },
    { name: "Client Logo Instance 4", name2: "Client Logo Instance 4", kind: "image", alt: "", height: "83", imgSrc: "/assets/cloned/svg/b35f8cb0c15f.svg", width: "268" },
    { name: "Client Logo Instance 3", name2: "Client Logo Instance 3", kind: "image", alt: "", height: "88", imgSrc: "/assets/cloned/svg/d1d782e935ea.svg", width: "224" },
    { name: "Client Logo Instance 2", name2: "Client Logo Instance 2", kind: "image", alt: "", height: "81", imgSrc: "/assets/cloned/svg/cae484001e10.svg", width: "286" },
    { name: "Logo Card", name2: "Logo Card", kind: "image", alt: "logo", height: "83", imgSrc: "/assets/cloned/svg/fb23a1986e30.svg", width: "252" },
    { name: "Client Logo Instance 5", name2: "Client Logo Instance 5", kind: "image", alt: "", height: "81", imgSrc: "/assets/cloned/svg/c3958c9d57a0.svg", width: "294" },
    { name: "Client Logo Instance 4", name2: "Client Logo Instance 4", kind: "image", alt: "", height: "83", imgSrc: "/assets/cloned/svg/b35f8cb0c15f.svg", width: "268" },
    { name: "Client Logo Instance 3", name2: "Client Logo Instance 3", kind: "image", alt: "", height: "88", imgSrc: "/assets/cloned/svg/d1d782e935ea.svg", width: "224" },
    { name: "Client Logo Instance 2", name2: "Client Logo Instance 2", kind: "image", alt: "", height: "81", imgSrc: "/assets/cloned/svg/cae484001e10.svg", width: "286" },
    { name: "Logo Card", name2: "Logo Card", alt: "logo", height: "83", imgSrc: "/assets/cloned/svg/fb23a1986e30.svg", width: "252" },
    { name: "Client Logo Instance 5", name2: "Client Logo Instance 5", alt: "", height: "81", imgSrc: "/assets/cloned/svg/c3958c9d57a0.svg", width: "294" },
    { name: "Client Logo Instance 4", name2: "Client Logo Instance 4", alt: "", height: "83", imgSrc: "/assets/cloned/svg/b35f8cb0c15f.svg", width: "268" },
    { name: "Client Logo Instance 3", name2: "Client Logo Instance 3", alt: "", height: "88", imgSrc: "/assets/cloned/svg/d1d782e935ea.svg", width: "224" },
    { name: "Client Logo Instance 2", name2: "Client Logo Instance 2", alt: "", height: "81", imgSrc: "/assets/cloned/svg/cae484001e10.svg", width: "286" }
];
const Tile_data2: TileData[] = [
    { description: "[" },
    { description: "the difference" },
    { description: "]" }
];
const FeatureGridItem_data: FeatureGridItemData[] = [
    { variant: "fragmented-writing", title: "Fragmented writing", description: "Ideas don’t translate into clear content" },
    { variant: "manual-workflows", title: "Manual workflows", description: "Inconsistent tone across channels" },
    { variant: "n848" }
];
const Logo5_data: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data3: TileData[] = [
    { description: "[" },
    { description: "features" },
    { description: "]" }
];
const MediaTile_data: MediaTileData[] = [
    { name: "Features Instance", name2: "Features Instance", description: "Smart Rewrite", description2: "Improve clarity, structure, and tone instantly without rewriting from scratch.", description3: "Fix and refine in one click.", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z M 6 9 L 8 9 L 8 11 L 6 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"EDpqz0dpF\\\" width=\\\"11px\\\"/></svg>\"), none" } },
    { name: "Features Instance 2", name2: "Features Instance 2", description: "AI Writing", description2: "Start from a simple idea and turn it into structured, high-quality content in seconds.", description3: "No more blank pages.", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"A6zJ9lDH7\\\" width=\\\"11px\\\"/></svg>\"), none" } },
    { name: "Features Instance 3", name2: "Features Instance 3", description: "Tone Control", description2: "Keep your voice consistent across every channel — from emails to social posts.", description3: "Write like your brand, every time.", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"g_g6dD4v_\\\" width=\\\"11px\\\"/></svg>\"), none" } },
    { name: "Features Instance 4", name2: "Features Instance 4", description: "Ready Templates", description2: "Use proven formats for real-world use cases — from ads to product descriptions.", description3: "Start faster with the right structure.", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"jaHiC89b0\\\" width=\\\"11px\\\"/></svg>\"), none" } }
];
const Logo5_data2: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data4: TileData[] = [
    { description: "[" },
    { description: "use cases " },
    { description: "]" }
];
const Logo6_data: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo7_data: Logo7Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Logo8_data: Logo8Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo6_data2: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo8_data2: Logo8Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data2: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo6_data3: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo8_data3: Logo8Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data3: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo5_data3: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data5: TileData[] = [
    { description: "[" },
    { description: "how it works" },
    { description: "]" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { name: "How It Works Steps Instance", name2: "How It Works Steps Instance", description: "Step 1", description2: "Enter your idea", description3: "Describe what you want to create in a simple prompt - even a rough idea works." },
    { name: "How It Works Steps Instance 2", name2: "How It Works Steps Instance 2", description: "Step 2", description2: "Generate content", description3: "Verseo turns your input into structured, high-quality content in seconds." },
    { name: "How It Works Steps Instance 3", name2: "How It Works Steps Instance 3", description: "Step 3", description2: "Refine and publish", description3: "Adjust tone, edit, and use your content anywhere - ready when you are." }
];
const Logo10_data: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data2: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo11_data: Logo11Data[] = [
    {  },
    {  },
    {  }
];
const Logo12_data: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data3: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data2: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo11_data2: Logo11Data[] = [
    {  },
    {  },
    {  }
];
const Logo5_data4: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data6: TileData[] = [
    { description: "[" },
    { description: "results" },
    { description: "]" }
];
const Logo13_data: Logo13Data[] = [
    { icon: <>
              <use href="#svg1527700876_422" />
              </> },
    { icon: <>
              <use href="#svg334393695_407" />
              </> },
    { icon: <>
              <use href="#svg172319957_405" />
              </> },
    { icon: <>
              <use href="#svg-2126597858_420" />
              </> }
];
const Logo10_data4: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data5: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data6: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data7: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo14_data: Logo14Data[] = [
    { kind: "image", alt: "Asana logo", height: "52", imgSrc: "/assets/cloned/svg/ec57d0df6470.svg", width: "52" },
    { kind: "image", alt: "", height: "16", imgSrc: "/assets/cloned/svg/31b526cb3d2d.svg", width: "21" },
    { kind: "image", alt: "", height: "21", imgSrc: "/assets/cloned/svg/86f7e7e5864a.svg", width: "21" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/afa840fa89b0.png", width: "512" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/2e9aa9aea639.png", width: "512" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/dde046f891ba.png", width: "512" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/2b7d88d86d9e.png", width: "512" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/5c17bb9d04b8.png", width: "512" },
    { kind: "image", alt: "", height: "512", imgSrc: "/assets/cloned/images/1ead2c3f5745.png", width: "512" },
    { ariahidden: "true", alt: "Asana logo", height: "52", imgSrc: "/assets/cloned/svg/ec57d0df6470.svg", width: "52" },
    { ariahidden: "true", alt: "", height: "16", imgSrc: "/assets/cloned/svg/31b526cb3d2d.svg", width: "21" },
    { ariahidden: "true", alt: "", height: "21", imgSrc: "/assets/cloned/svg/86f7e7e5864a.svg", width: "21" },
    { ariahidden: "true", alt: "", height: "512", imgSrc: "/assets/cloned/images/afa840fa89b0.png", width: "512" }
];
const Logo5_data5: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data7: TileData[] = [
    { description: "[" },
    { description: "examples" },
    { description: "]" }
];
const Logo10_data8: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data9: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data10: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data3: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data4: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data5: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data11: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data6: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data7: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data12: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data13: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data8: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data9: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data10: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data14: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data11: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data12: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data15: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data16: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data17: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data18: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data13: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data14: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data15: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo10_data19: Logo10Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data16: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data17: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo15_data: Logo15Data[] = [
    { kind: "image", height: "44", imgSrc: "/assets/cloned/images/8edeb9627010.png", width: "127" },
    { kind: "image", height: "37", imgSrc: "/assets/cloned/images/3a2ddcad752c.png", width: "145" },
    { kind: "image", height: "37", imgSrc: "/assets/cloned/images/a8590a88c4eb.png", width: "163" },
    { kind: "image", height: "38", imgSrc: "/assets/cloned/images/346d97fd0b81.png", width: "182" },
    { kind: "image", height: "37", imgSrc: "/assets/cloned/images/ebae982997f3.png", width: "136" },
    { kind: "image", height: "37", imgSrc: "/assets/cloned/images/9154f9bf8cf6.png", width: "180" },
    { kind: "image", height: "44", imgSrc: "/assets/cloned/images/8edeb9627010.png", width: "127" },
    { kind: "image", height: "37", imgSrc: "/assets/cloned/images/3a2ddcad752c.png", width: "145" },
    { height: "37", imgSrc: "/assets/cloned/images/a8590a88c4eb.png", width: "163" },
    { height: "38", imgSrc: "/assets/cloned/images/346d97fd0b81.png", width: "182" },
    { height: "37", imgSrc: "/assets/cloned/images/ebae982997f3.png", width: "136" }
];
const Logo5_data6: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data8: TileData[] = [
    { description: "[" },
    { description: "testimonials" },
    { description: "]" }
];
const MediaTile3_data: MediaTile3Data[] = [
    { name: "Testimonials Instance", name2: "Testimonials Instance", icon: <>
                    <use href="#svg1612837512_789" />
                    </>, description: "4,9", description2: "\"We tested several AI writing tools, but Verseo felt the most practical. It's fast, intuitive, and fits naturally into our workflow.\"", height: "80", imgSrc: "/assets/cloned/images/3f298f73ce2e.png", width: "80", description3: "Emma Rodriguez", description4: "Content Strategist" },
    { name: "Testimonials Instance 2", name2: "Testimonials Instance 2", icon: <>
                    <use href="#svg70469039_723" />
                    </>, description: "5,0", description2: "\"Verseo cut our content creation time in half. What used to take hours now takes minutes, and the quality is consistently high.\"", height: "160", imgSrc: "/assets/cloned/images/10ddc4a81420.png", width: "160", description3: "Sarah Chen", description4: "Marketing Manager" },
    { name: "Testimonials Instance 3", name2: "Testimonials Instance 3", icon: <>
                    <use href="#svg1612837512_789" />
                    </>, description: "5,0", description2: "\"The biggest win for us is consistency. Every email, post, and product update sounds like it comes from the same brand voice.\"", height: "80", imgSrc: "/assets/cloned/images/8d245c57ef07.png", width: "80", description3: "David Miller", description4: "Startup Founder" }
];
const Logo5_data7: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data9: TileData[] = [
    { description: "[" },
    { description: "pricing" },
    { description: "]" }
];
const ProductCard_data: ProductCardData[] = [
    { name: "Pricing Instance 2", name2: "Pricing Instance 2", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"jaHiC89b0\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Starter", description2: "For individuals and freelancers", description3: "$12", name3: "Price Instance 2", name4: "Price Instance 2", description4: "AI writing assistant", description5: "Essential content templates", description6: "Rewrite and improve text", description7: "Standard support" },
    { name: "Pricing Instance 3", name2: "Pricing Instance 3", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"A6zJ9lDH7\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Pro", description2: "For creators and professionals", description3: "$29", name3: "Price Instance", name4: "Price Instance", description4: "Advanced AI generation", description5: "Brand voice controls", description6: "Full template library", description7: "Priority content tools" },
    { name: "Pricing Instance 4", name2: "Pricing Instance 4", style: { maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"g_g6dD4v_\\\" width=\\\"11px\\\"/></svg>\"), none" }, description: "Team", description2: "For agencies and growing teams", description3: "$79", name3: "Price Instance 2", name4: "Price Instance 2", description4: "Shared workspace", description5: "Team collaboration tools", description6: "Unlimited team projects", description7: "Priority support" }
];
const Logo5_data8: Logo5Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Tile_data10: TileData[] = [
    { description: "[" },
    { description: "faq" },
    { description: "]" }
];
const Logo9_data4: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data5: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data6: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data7: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data8: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo9_data9: Logo9Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const MediaTile4_data: MediaTile4Data[] = [
    { name: "FAQ Instance 4", name2: "FAQ Instance 4", description: "Can I customize the generated content?" },
    { name: "FAQ Instance 5", name2: "FAQ Instance 5", description: "What types of content can I create?" },
    { name: "FAQ Instance 6", name2: "FAQ Instance 6", description: "How fast can I generate content?" }
];
const Tile3_data: Tile3Data[] = [
    { href: "/#features", description: "Product" },
    { href: "/#use-cases", description: "Use Cases" },
    { href: "/#examples", description: "Examples" },
    { href: "/#pricing", description: "Pricing" },
    { href: "/contact-us", description: "Contact Us" }
];
const Tile_data11: TileData[] = [
    { description: "[" },
    { description: "ready to start?" },
    { description: "]" }
];
const Logo_data2: LogoData[] = [
    { icon: <>
            <use href="#svg296512690_677" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg2027085441_314" />
            </> },
    { icon: <>
            <use href="#svg1478921279_919" />
            </> },
    { icon: <>
            <use href="#svg-700963649_792" />
            </> },
    { icon: <>
            <use href="#svg694139235_743" />
            </> },
    { icon: <>
            <use href="#svg-2089654732_706" />
            </> }
];
const Logo2_data2: Logo2Data[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  }
];
const Logo16_data: Logo16Data[] = [
    {  },
    {  },
    {  }
];
const Logo16_data2: Logo16Data[] = [
    {  },
    {  },
    {  }
];
const Logo6_data4: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo6_data5: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo6_data6: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo6_data7: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile4_data: Tile4Data[] = [
    { href: "/privacy-policy", description: "Privacy Policy" },
    { href: "/terms-of-service", description: "Terms of Service" },
    { href: "/404", description: "404 page" }
];
const Logo6_data8: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile4_data2: Tile4Data[] = [
    { href: "/#features", description: "Product" },
    { href: "/#use-cases", description: "Use Cases" },
    { href: "/#examples", description: "Examples" },
    { href: "/#pricing", description: "Pricing" }
];
const Logo6_data9: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile5_data: Tile5Data[] = [
    { href: "https://x.com/YTsyhanenko", description: "X" },
    { href: "https://www.instagram.com/", description: "Instagram" },
    { href: "https://www.linkedin.com/", rel: "noreferrer", description: "Linkedin" }
];
const Logo6_data10: Logo6Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo17_data: Logo17Data[] = [
    {  },
    {  },
    {  }
];
const Logo17_data2: Logo17Data[] = [
    {  },
    {  },
    {  },
    {  }
];
const Logo12_data18: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data19: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data20: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Logo12_data21: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile3_data2: Tile3Data[] = [
    { href: "/privacy-policy", description: "Privacy Policy" },
    { href: "/terms-of-service", description: "Terms of Service" },
    { href: "/404", description: "404 page" }
];
const Logo12_data22: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile3_data3: Tile3Data[] = [
    { href: "/#features", description: "Product" },
    { href: "/#use-cases", description: "Use Cases" },
    { href: "/#examples", description: "Examples" },
    { href: "/#pricing", description: "Pricing" }
];
const Logo12_data23: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];
const Tile6_data: Tile6Data[] = [
    { href: "https://x.com/YTsyhanenko", description: "X" },
    { href: "https://www.instagram.com/", description: "Instagram" },
    { href: "https://www.linkedin.com/", rel: "noreferrer", description: "Linkedin" }
];
const Logo12_data24: Logo12Data[] = [
    { icon: <>
            <use href="#svg1527700876_422" />
            </> },
    { icon: <>
            <use href="#svg334393695_407" />
            </> },
    { icon: <>
            <use href="#svg172319957_405" />
            </> },
    { icon: <>
            <use href="#svg-2126597858_420" />
            </> }
];

export default function Page() {
  return (
    <>
      <div className="block" id="main">
        <div className="h-[800.1375rem] min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background max-md:h-[970.6125rem] md:max-lg:h-[14633.3px] 2xl:h-[857.8875rem]">
          <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-background">
            <div className="w-full h-[62.0625rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5 max-md:h-[1065.9px] max-lg:pt-30 max-lg:pl-6 max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-10 md:max-lg:h-[87rem]" style={{ backgroundImage: "linear-gradient(var(--background) 0%, var(--clr-0) 100%)" }}>
              <div className="w-[44.8rem] h-[26.8125rem] flex absolute top-[9.5625rem] left-[17.6rem] z-2 min-w-0 max-w-202 justify-center items-center content-center shrink-0 max-md:w-[21.9375rem] max-md:h-[23.9125rem] max-lg:relative max-lg:inset-0 max-lg:max-w-255 max-lg:pr-5 max-lg:items-start max-lg:content-start md:max-lg:w-186 md:max-lg:h-[19.625rem] 2xl:w-202 2xl:left-139">
                <div className="contents min-w-0">
                  <div className="w-[44.8rem] h-[26.8125rem] flex relative pb-11 px-7.5 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 max-md:w-[20.6875rem] max-md:h-[23.9125rem] max-lg:items-start max-lg:content-start max-lg:pb-0 max-lg:px-0 md:max-lg:w-181 md:max-lg:h-[19.625rem] 2xl:w-202">
                    <div className="w-9 h-9 flex absolute -top-4.5 -left-4.5 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
                      <div className="w-9 h-9 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                        <div className="h-full block max-lg:hidden">
                          <Icon />
                        </div>
                      </div>
                    </div>
                    <div className="w-9 h-9 flex absolute -top-4.5 -right-4.5 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
                      <div className="w-9 h-9 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                        <div className="h-full block max-lg:hidden">
                          <Icon />
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 shrink-0 flex relative z-3 flex-col justify-center items-center content-center grow gap-8">
                      <div className="w-[41.05rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.6875rem] md:max-lg:w-181 2xl:w-187">
                        <div className="w-[41.05rem] flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.6875rem] md:max-lg:w-181 2xl:w-187">
                          <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                            {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                          </div>
                          <div className="w-[41.05rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.6875rem] md:max-lg:w-181 2xl:w-187">
                            <h1 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-6xl font-semibold leading-16.5 tracking-[-1.8px] text-center max-lg:text-[2.625rem] max-lg:leading-[2.875rem] max-lg:tracking-[-1.26px]" data-component="heading" dir="auto">
                              Write better content.
                            </h1>
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-6xl font-semibold leading-16.5 tracking-[-1.8px] text-center max-lg:text-[2.625rem] max-lg:leading-[2.875rem] max-lg:tracking-[-1.26px]" dir="auto">
                              Faster. With AI
                            </p>
                          </div>
                        </div>
                        <div className="w-[41.05rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.6875rem] md:max-lg:w-181 2xl:w-187">
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] text-center max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px]" dir="auto">
                            Verseo helps teams, founders, and marketers generate high-quality content in seconds — without overthinking every word
                          </p>
                        </div>
                      </div>
                      <div className="w-[45%] flex relative justify-start items-start content-start shrink-0 gap-3 max-lg:w-full max-lg:flex-col max-lg:gap-1.5 2xl:w-[39.5%]">
                        <div className="w-35.5 block relative shrink-0 max-md:w-[20.6875rem] md:max-lg:w-181" name="Hero Instance">
                          <a className="h-12 flex relative py-3.5 px-4 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-color-001 cursor-pointer" data-component="link" href="/contact-us" name="Hero Instance">
                            <div className="w-[4.9375rem] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                              <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                  Get Started
                                </p>
                              </div>
                              <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                  Get Started
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-35.5 block relative shrink-0 max-md:w-[20.6875rem] md:max-lg:w-181" name="Hero Instance 2">
                          <a className="h-12 flex relative py-3.5 px-6.5 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-surface cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-12 after:rounded-tl-sm" data-component="link" href="/contact-us" name="Hero Instance 2">
                            <div className="w-[67.9px] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                              <div className="w-[67.9px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                  Try Demo
                                </p>
                              </div>
                              <div className="w-[67.9px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                  Try Demo
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-866.5 flex absolute top-0 inset-x-0 z-1 min-w-0 flex-col justify-start items-center content-center shrink-0 overflow-clip pointer-events-none max-md:h-[3538.9px] md:max-lg:h-[241.5625rem]" data-ditto-id="motion-div">
                <div className="contents min-w-0 pointer-events-none">
                  <div className="h-459.5 block absolute inset-x-0 z-1 shrink-0 overflow-clip pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--background) 7%, var(--clr-1) 52.2599%, var(--background) 76%)" }} />
                </div>
                <div className="w-full h-457 block relative opacity-60 shrink-0 pointer-events-none" name="Scroll Component">
                  <div className="h-full block relative pointer-events-none">
                    <div className="h-full block relative overflow-hidden bg-clr-1 pointer-events-none">
                      <img className="w-full h-full block absolute top-0 left-0 opacity-0 overflow-clip object-cover pointer-events-none max-lg:opacity-[initial] 2xl:opacity-[initial]" alt="" aria-hidden="true" src="/assets/cloned/images/7d42a65d3683.webp" />
                      <img className="w-full h-full block absolute top-0 left-0 overflow-clip object-cover pointer-events-none max-lg:opacity-0 2xl:opacity-0" data-component="image" alt="" aria-hidden="true" src="/assets/cloned/images/3be1e426ed52.webp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-103 flex absolute bottom-0 inset-x-0 z-2 min-w-0 max-w-360 justify-center items-center content-center shrink-0 max-lg:hidden 2xl:inset-x-60">
                <div className="w-[67.2rem] h-87.5 flex absolute top-0 left-[clamp(640px,_50%,_calc(100%_-_640px))] z-1 min-w-0 pt-7.5 px-7.5 rounded-br-[5px] rounded-bl-[5px] justify-center items-center content-center shrink-0 gap-2.5 bg-clr-2 transform-[matrix(1,0,0,1,-537.594,0)] max-lg:hidden 2xl:w-[75.6rem] 2xl:transform-[matrix(1,0,0,1,-604.797,0)] after:content-[''] after:block after:absolute after:inset-0 after:h-87.5 max-lg:after:hidden">
                  <div className="w-[35.8125rem] h-[7.05rem] flex absolute -top-12.5 left-[clamp(537.6px,_50%,_calc(100%_-_537.6px))] z-2 min-w-0 p-2 rounded-2xl flex-col justify-start items-start content-start shrink-0 bg-clr-3 transform-[matrix(1,0,0,1,-286.5,0)] max-lg:hidden">
                    <div className="w-[34.8125rem] flex relative flex-col justify-center items-center content-center shrink-0 shadow-[var(--clr-4)_0px_13.33px_20px_-10px,var(--clr-4)_0px_26.67px_26.67px_-16.67px,var(--clr-5)_0px_46.67px_46.67px_-16.67px,var(--clr-4)_0px_73.33px_46.67px_-16.67px,var(--clr-5)_0px_0px_36.67px_0px] max-lg:hidden">
                      <div className="w-full flex relative pt-3 pb-6 px-3 rounded-tl-xl rounded-tr-xl rounded-br-md rounded-bl-md justify-start items-start content-start shrink-0 gap-2.5 bg-surface max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[34.8125rem] after:h-[3.3rem] after:rounded-tl-xl max-lg:after:hidden">
                        <div className="flex relative justify-start items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden">
                          <div className="w-[0.5625rem] h-[0.5625rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
                            <div className="h-full block max-lg:hidden">
                              <Icon2 />
                            </div>
                          </div>
                          <div className="w-[13.6875rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-muted [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              What do you want to write today?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex relative py-2 px-3 rounded-tl-md rounded-tr-md rounded-br-xl rounded-bl-xl justify-between items-center content-center shrink-0 bg-surface max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[34.8125rem] after:h-11 after:rounded-tl-md max-lg:after:hidden">
                        <div className="flex relative p-0.5 rounded-[5px] justify-start items-center content-center shrink-0 gap-0.5 bg-surface-2 max-lg:hidden">
                          {Tile2_data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
                        </div>
                        <div className="w-7 flex relative p-1.5 rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 aspect-square bg-color-001 max-lg:hidden">
                          <div className="w-4 h-4 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                            <div className="h-full block max-lg:hidden">
                              <Icon3 />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[90.5%] h-80 block relative shrink-0 overflow-hidden [filter:drop-shadow(var(--clr-7)_0px_4px_22px)] transform-[matrix3d(0.918125,0,0,0,0,0.880883,0.281923,-0.000281923,0,-0.25884,0.959437,-0.000959437,0,-32.75,0,1)] origin-[478px_160px] max-lg:hidden 2xl:w-5/6 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.001,0,0,0,1)]">
                    <div className="h-full block absolute top-0 inset-x-0 max-lg:hidden">
                      <img className="w-full h-80 block overflow-clip object-cover object-[50%_0%] aspect-[auto_2151/720] max-lg:hidden" data-component="image" alt="Verseo AI content generation dashboard preview" height="720" sizes="956px" src="/assets/cloned/images/5406b94c975e.png" srcSet="/assets/cloned/images/5c8a4ae73d00.png 512w, /assets/cloned/images/05f8aeb404ba.png 1024w, /assets/cloned/images/805eb251f1ea.png 2048w, /assets/cloned/images/5406b94c975e.png 2151w" width="2151" />
                    </div>
                  </div>
                </div>
                <div className="h-full flex absolute top-0 inset-x-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 pointer-events-none max-lg:hidden">
                  <div className="w-px h-103 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-103 max-lg:after:hidden" />
                  <div className="w-px h-103 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-103 max-lg:after:hidden" />
                  <div className="w-[5.6rem] h-10 min-h-10 flex absolute top-5.5 right-2.5 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip pointer-events-none max-lg:hidden 2xl:w-[6.3rem]">
                    <div className="w-2 h-2 block absolute top-[1.0625rem] left-9.5 min-w-0 shrink-0 pointer-events-none max-lg:hidden" aria-hidden="true">
                      <div className="h-full block pointer-events-none max-lg:hidden">
                        <Icon4 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full flex absolute top-0 inset-x-0 z-2 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 pointer-events-none max-lg:hidden 2xl:inset-x-60">
                <div className="w-px h-[62.0625rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[62.0625rem] max-lg:after:hidden" />
                <div className="w-px h-[62.0625rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[62.0625rem] max-lg:after:hidden" />
                <div className="w-[5.6rem] h-10 min-h-10 flex absolute top-5.5 right-2.5 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip pointer-events-none max-lg:hidden 2xl:w-[6.3rem]">
                  <div className="w-2 h-2 block absolute top-[1.0625rem] left-9.5 min-w-0 shrink-0 pointer-events-none max-lg:hidden" aria-hidden="true">
                    <div className="h-full block pointer-events-none max-lg:hidden">
                      <Icon4 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-320 h-[58.0625rem] min-h-[58.0625rem] flex absolute top-[4.0625rem] left-160 z-1 opacity-70 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip transform-[matrix(1,0,0,1,-640,0)] max-md:w-[23.4375rem] max-md:h-[1065.9px] max-lg:left-0 max-lg:transform-[none] max-lg:min-h-0 md:max-lg:w-192 md:max-lg:h-[87rem] 2xl:w-480 2xl:left-240 2xl:transform-[matrix(1,0,0,1,-960,0)]">
                <div className="h-129.5 flex absolute top-0 inset-x-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:h-[1065.9px] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] md:max-lg:h-[87rem] 2xl:inset-x-60">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-md:h-[1065.9px] md:max-lg:h-[87rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden">
                    <div className="hidden max-lg:w-px max-md:h-[1065.9px] max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none md:max-lg:h-[87rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[1065.9px] md:max-lg:after:h-[87rem] 2xl:after:hidden" />
                  </div>
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  <div className="contents min-w-0 pointer-events-none max-lg:hidden">
                    <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                  </div>
                  {Logo_data.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                </div>
                <div className="h-151 flex absolute top-0 inset-x-0 z-1 min-w-0 flex-col justify-between items-center content-center shrink-0 overflow-clip max-lg:hidden">
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                  <div className="h-full flex absolute top-0 inset-x-0 z-1 min-w-0 max-w-360 px-[0.225rem] flex-col justify-center items-center content-center shrink-0 overflow-hidden pointer-events-none max-lg:hidden 2xl:inset-x-60">
                    <div className="w-full h-[38.6875rem] flex relative z-1 justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-lg:hidden">
                      {Logo2_data.map((d, i) => <Logo2 key={i} d={d} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden max-lg:w-full max-lg:h-[8.175rem] max-lg:flex max-lg:relative max-lg:pr-6 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip">
                <div className="hidden max-md:w-[20.4375rem] max-lg:flex max-lg:relative max-lg:z-2 max-lg:p-2 max-lg:rounded-2xl max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:bg-clr-3 md:max-lg:w-180">
                  <div className="hidden max-md:w-[19.4375rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:shadow-[var(--clr-4)_0px_13.33px_20px_-10px,var(--clr-4)_0px_26.67px_26.67px_-16.67px,var(--clr-5)_0px_46.67px_46.67px_-16.67px,var(--clr-4)_0px_73.33px_46.67px_-16.67px,var(--clr-5)_0px_0px_36.67px_0px] md:max-lg:w-176">
                    <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:pt-3 max-lg:pb-10.5 max-lg:px-3 max-lg:rounded-tl-xl max-lg:rounded-tr-xl max-lg:rounded-br-md max-lg:rounded-bl-md max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-2.5 max-lg:bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-[19.4375rem] after:h-[4.425rem] after:rounded-tl-xl md:max-lg:after:w-176 2xl:after:hidden">
                      <div className="hidden max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip">
                        <div className="hidden max-lg:w-[0.5625rem] max-lg:h-[0.5625rem] max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                          <div className="hidden max-lg:h-full max-lg:block">
                            <Icon5 />
                          </div>
                        </div>
                        <div className="hidden max-lg:w-[13.6875rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                          <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.14px] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            What do you want to write today?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:py-2 max-lg:px-3 max-lg:rounded-tl-md max-lg:rounded-tr-md max-lg:rounded-br-xl max-lg:rounded-bl-xl max-lg:justify-between max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-[19.4375rem] after:h-11 after:rounded-tl-md md:max-lg:after:w-176 2xl:after:hidden">
                      <div className="hidden max-lg:flex max-lg:relative max-lg:p-0.5 max-lg:rounded-[5px] max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-0.5 max-lg:bg-surface-2">
                        <div className="hidden max-lg:flex max-lg:relative max-lg:py-1 max-lg:px-2 max-lg:rounded-sm max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2 max-lg:bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-[5.25rem] after:h-5.5 after:rounded-tl-sm 2xl:after:hidden">
                          <div className="hidden max-lg:w-[0.6875rem] max-lg:block max-lg:relative max-lg:shrink-0 max-lg:aspect-square max-lg:bg-clr-6" data-ditto-id="style-div" />
                          <div className="hidden max-lg:w-[3.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                            <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:font-medium max-lg:tracking-[-0.12px] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              AI Writer
                            </p>
                          </div>
                        </div>
                        <div className="hidden max-lg:flex max-lg:relative max-lg:py-1 max-lg:px-2 max-lg:rounded-sm max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2">
                          <div className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:block max-lg:relative max-lg:aspect-square max-lg:bg-color-002" data-ditto-id="style-div-2" />
                        </div>
                        <div className="hidden max-lg:flex max-lg:relative max-lg:py-1 max-lg:px-2 max-lg:rounded-sm max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2">
                          <div className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:block max-lg:relative max-lg:aspect-square max-lg:bg-color-003" data-ditto-id="style-div-3" />
                        </div>
                        <div className="hidden max-lg:flex max-lg:relative max-lg:py-1 max-lg:px-2 max-lg:rounded-sm max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2">
                          <div className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:block max-lg:relative max-lg:aspect-square max-lg:bg-accent" data-ditto-id="style-div-4" />
                        </div>
                      </div>
                      <div className="hidden max-lg:w-7 max-lg:flex max-lg:relative max-lg:p-1.5 max-lg:rounded-[5px] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:aspect-square max-lg:bg-color-001">
                        <div className="hidden max-lg:w-4 max-lg:h-4 max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                          <div className="hidden max-lg:h-full max-lg:block">
                            <Icon6 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden max-md:w-[65.8125rem] max-lg:block max-lg:relative max-lg:z-1 max-lg:shrink-0 max-lg:overflow-hidden max-lg:aspect-[2.9875/1] max-lg:[filter:drop-shadow(var(--clr-7)_0px_4px_22px)] max-md:transform-[matrix3d(0.85625,0,0,0,0,0.829442,0.248267,-0.000248267,0,-0.212579,0.968692,-0.000968692,0,-57.5,0,1)] max-md:origin-[526.5px_176.227px] md:max-lg:w-558 md:max-lg:transform-[matrix3d(0.901473,0,0,0,0,0.888177,0.171117,-0.000171117,0,-0.154257,0.985251,-0.000985251,0,-39.411,0,1)] md:max-lg:origin-[1116px_373.555px]">
                <div className="hidden max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:inset-x-0">
                  <img className="hidden max-lg:w-full max-md:h-88 max-lg:block max-lg:overflow-clip max-lg:object-cover max-lg:object-[1.3%_57.4%] max-lg:aspect-[auto_2151/720] md:max-lg:h-[46.6875rem]" alt="Verseo AI content dashboard shown on a mobile device" height="720" sizes="calc((100vw - 24px) * 3)" src="/assets/cloned/images/5406b94c975e.png" srcSet="/assets/cloned/images/5c8a4ae73d00.png 512w, /assets/cloned/images/05f8aeb404ba.png 1024w, /assets/cloned/images/805eb251f1ea.png 2048w, /assets/cloned/images/5406b94c975e.png 2151w" width="2151" />
                </div>
              </div>
            </div>
            <div className="w-full flex relative z-2 p-10 flex-col justify-center items-center content-center shrink-0 gap-[1.5625rem] overflow-clip max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0 after:h-42 max-lg:after:h-[10.425rem]">
              <div className="w-300 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-460">
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                  Trusted by modern teams
                </p>
              </div>
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-42 block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[10.425rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-42 max-lg:after:h-[10.425rem]" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-42 block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[10.425rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-42 max-lg:after:h-[10.425rem]" />
                  </div>
                </div>
              </div>
              <div className="contents min-w-0">
                <div className="contents max-md:w-[20.4375rem] max-lg:block max-lg:relative max-lg:z-1 max-lg:max-w-370 max-lg:shrink-0 md:max-lg:w-180">
                  <section className="hidden max-lg:h-[2.8125rem] max-lg:flex max-lg:relative max-lg:max-w-full max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:overflow-hidden" name="Client Logos Instance 3">
                    <div className="hidden max-md:w-[20.4375rem] max-lg:h-full max-lg:block max-lg:relative max-lg:z-1 max-lg:grow max-lg:shrink-0 max-lg:basis-0 md:max-lg:w-180" name="Client Logo Instance">
                      <section className="hidden max-lg:flex max-lg:max-w-full max-lg:max-h-full max-lg:py-2.5 max-lg:items-center max-lg:justify-items-center max-lg:overflow-hidden" data-ditto-id="style-section">
                        <ul className="hidden max-lg:flex max-lg:relative max-lg:max-w-full max-lg:max-h-full max-lg:items-center max-lg:gap-10 max-lg:justify-items-center max-lg:[list-style-type:none] max-lg:list-outside max-md:transform-[matrix(1,0,0,1,-0.99978,0)] md:max-lg:transform-[matrix(1,0,0,1,-0.99942,0)]">
                          {Logo3_data.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
                        </ul>
                      </section>
                    </div>
                  </section>
                  <div className="w-255 block relative z-1 max-w-370 shrink-0 max-lg:hidden 2xl:w-370" name="Client Logos Instance">
                    <section className="h-[2.8125rem] flex relative max-w-full justify-center items-center content-center overflow-hidden max-lg:hidden" name="Client Logos Instance">
                      <div className="w-255 h-full block relative z-1 grow shrink-0 basis-0 max-lg:hidden 2xl:w-370" name="Client Logo Instance">
                        <section className="flex max-w-full max-h-full py-2.5 items-center justify-items-center overflow-hidden max-lg:hidden" style={{ maskImage: "linear-gradient(to right, var(--clr-8) 0%, var(--foreground) 12.5%, var(--foreground) 87.5%, var(--clr-8) 100%)" }}>
                          <ul className="flex relative max-w-full max-h-full items-center gap-10 justify-items-center [list-style-type:none] list-outside transform-[none] max-lg:hidden 2xl:transform-[matrix(1,0,0,1,-262.322,0)]" data-ditto-id="motion-ul">
                            {Logo4_data.map((d, i) => <Logo4 key={i} d={d} styles={Logo4_styles[i]} />)}
                            <li className="w-25 h-[2.8125rem] list-item max-lg:hidden" aria-hidden="true">
                              <div className="w-25 h-[2.8125rem] block relative shrink-0 max-lg:hidden" name="Logo Card">
                                <div className="flex relative rounded-[10px] justify-center items-center content-center gap-2.5 overflow-hidden max-lg:hidden" name="Logo Card" />
                              </div>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative z-1 py-30 px-10 flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                <div className="contents min-w-0">
                  <div className="w-[1.0625rem] h-[1.0625rem] flex absolute -bottom-2 left-1 z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                    <div className="w-[1.0625rem] h-[1.0625rem] block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Icon7 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-[1.0625rem] h-[1.0625rem] flex absolute right-[0.1875rem] -bottom-[0.5625rem] z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                    <div className="w-[1.0625rem] h-[1.0625rem] block relative shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Icon7 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[48.7875rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[68.4375rem] md:max-lg:h-[60.4125rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[48.7875rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[68.4375rem] md:max-lg:h-[60.4125rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-center items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data2.map((d, i) => <Tile key={i} d={d} styles={Tile_styles2[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          <span className="inline max-lg:hidden">
                            {"Where content friction "}
                          </span>
                          <br className="inline max-lg:hidden" />
                          <span className="inline max-lg:hidden">
                            ends, clarity begins
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-300 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] text-center max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px]" dir="auto">
                      See how AI replaces slow, manual writing with fast, structured content creation.
                    </p>
                  </div>
                </div>
                <div className="w-full flex relative z-1 justify-start items-center content-center shrink-0 bg-background max-lg:flex-col after:content-[''] after:block after:absolute after:inset-0 grid-cols-1 lg:grid-cols-3">
                  {FeatureGridItem_data.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0" id="features">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[48.7875rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[89.3625rem] md:max-lg:h-[83.2875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[48.7875rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[89.3625rem] md:max-lg:h-[83.2875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-center items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data3.map((d, i) => <Tile key={i} d={d} styles={Tile_styles3[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          {"Everything you need "}
                          <br className="inline max-lg:hidden" />
                          to create better content
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-300 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] text-center max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px]" dir="auto">
                      Create, refine, and scale content - faster and without starting from scratch.
                    </p>
                  </div>
                </div>
                <div className="w-full flex relative z-1 justify-start items-center content-center shrink-0 bg-background max-lg:flex-col">
                  {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 overflow-clip max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0" id="use-cases">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data2.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles2[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[60.1125rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[63.8375rem] md:max-lg:h-[56.3625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[60.1125rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[63.8375rem] md:max-lg:h-[56.3625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data4.map((d, i) => <Tile key={i} d={d} styles={Tile_styles4[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          Built for how you actually
                          <br className="inline max-lg:hidden" />
                          create content
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] text-center max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px]" dir="auto">
                        Whether you’re creating content daily or scaling it across a team,
                        <br className="inline max-lg:hidden" />
                        Verseo adapts to your workflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex relative z-1 flex-col justify-start items-start content-start shrink-0 bg-background after:content-[''] after:block after:absolute after:inset-0">
                  <div className="contents min-w-0">
                    <div className="w-300 h-[15.0625rem] block relative shrink-0 max-lg:w-[20.4375rem] max-lg:h-[18.6rem]" name="Use Cases Instance">
                      <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start bg-surface-2 cursor-pointer after:content-[''] after:block after:absolute after:inset-0" name="Use Cases Instance">
                        <div className="w-full flex relative pb-2.5 justify-start items-center content-center shrink-0 gap-2.5">
                          <div className="flex relative z-1 justify-start items-center content-center shrink-0 gap-0.5">
                            <div className="w-2 h-2 block relative rounded-[100px] shrink-0 bg-clr-9" />
                            <div className="w-2 h-2 block relative rounded-[100px] shrink-0 bg-color-003" />
                            <div className="w-2 h-2 block relative rounded-[100px] shrink-0 bg-color-002" />
                          </div>
                          <div className="w-[0.1875rem] h-[1.1875rem] block relative shrink-0" aria-hidden="true">
                            <div className="block">
                              <Icon13 />
                            </div>
                          </div>
                          <div className="w-[63.6875rem] flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-36.5">
                            <p className="block text-muted [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] uppercase" dir="auto">
                              For marketers
                            </p>
                          </div>
                          <div className="w-25 h-3.5 block relative rounded-[30px] shrink-0 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-25 after:h-3.5 after:rounded-tl-[30px]" />
                        </div>
                        <div className="flex relative p-6 rounded-xl justify-between items-start content-start shrink-0 overflow-clip bg-surface shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-lg:p-5 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-6 after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                          <div className="w-[35%] flex relative justify-start items-start content-start shrink-0 max-lg:w-full max-lg:items-end max-lg:content-end">
                            <div className="w-[63.5%] h-[2.6875rem] block relative shrink-0 max-lg:w-[85%] max-lg:flex-1" name="Use Case Accordion Instance 7">
                              <div className="h-[2.6875rem] block relative overflow-clip" name="Use Case Accordion Instance 7">
                                <div className="w-12 h-[2.0625rem] block absolute top-2.5 shrink-0 overflow-clip">
                                  <div className="w-10 h-full flex absolute top-0 p-0.5 rounded-sm justify-start items-center content-center shrink-0 gap-3 bg-color-001 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-[2.0625rem] after:rounded-tl-sm">
                                    <div className="w-9 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                                      <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[1.0625rem] tracking-[-0.14px] text-center" dir="auto">
                                        001
                                      </p>
                                    </div>
                                  </div>
                                  <div className="w-[1.0625rem] h-[1.0625rem] block absolute bottom-2 left-8 shrink-0" aria-hidden="true">
                                    <div className="block">
                                      <Icon14 />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[1.0625rem] h-[1.0625rem] block absolute -right-[0.5625rem] bottom-2 shrink-0" aria-hidden="true">
                                  <div className="block">
                                    <Icon15 />
                                  </div>
                                </div>
                                <div className="w-51 h-px block absolute bottom-4 left-[2.8125rem] shrink-0 overflow-clip bg-surface-3" />
                              </div>
                            </div>
                            <div className="w-[36.5%] h-36 flex relative p-8 rounded-2xl justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:w-[15%] max-lg:h-10 max-lg:block max-lg:p-0 max-lg:rounded-[initial] max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:gap-[initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:w-36 after:h-36 after:rounded-tl-2xl max-lg:after:hidden">
                              <div className="w-1 h-1 block absolute top-3.5 left-3.5 z-1 min-w-0 shrink-0 overflow-clip aspect-square bg-surface-3 max-lg:w-10 max-lg:h-10 max-lg:flex max-lg:relative max-lg:inset-0 max-lg:p-0.5 max-lg:rounded-sm max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-0.5 max-lg:z-[initial] max-lg:shrink-[initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] max-lg:aspect-[initial] max-lg:bg-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm 2xl:after:hidden">
                                <div className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:block max-lg:relative max-lg:aspect-square max-lg:bg-color-001 max-lg:transform-[matrix(-1,0,0,-1,0,0)] max-lg:origin-[18px_18px]" data-ditto-id="style-div-5" name="Plus Minus Button Small Instance" />
                                {Logo6_data.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles[i]} />)}
                              </div>
                              <div className="w-1 h-1 block absolute bottom-3.5 left-3.5 z-1 min-w-0 shrink-0 overflow-clip aspect-square bg-surface-3 max-lg:hidden" />
                              <div className="w-1 h-1 block absolute right-3.5 bottom-3.5 z-1 min-w-0 shrink-0 overflow-clip aspect-square bg-surface-3 max-lg:hidden" />
                              <div className="w-1 h-1 block absolute top-3.5 right-3.5 z-1 min-w-0 shrink-0 overflow-clip aspect-square bg-surface-3 max-lg:hidden" />
                              <div className="basis-full shrink-0 flex relative p-6 rounded-xl justify-center items-center content-center gap-2.5 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-20 after:h-20 after:rounded-tl-xl max-lg:after:hidden">
                                <div className="basis-full shrink-0 block relative aspect-square bg-accent max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"g_g6dD4v_\\\" width=\\\"11px\\\"/></svg>\"), none" }} />
                              </div>
                              {Logo7_data.map((d, i) => <Logo7 key={i} d={d} styles={Logo7_styles[i]} />)}
                            </div>
                          </div>
                          <div className="w-[33.9625rem] flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-lg:w-[16.6875rem] max-lg:order-[1]">
                            <div className="w-[33.9625rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[16.6875rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.28px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]" dir="auto">
                                For marketers
                              </p>
                            </div>
                            <div className="w-[33.9625rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[16.6875rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                Create ads, emails, landing pages, and social content - without starting from scratch. Quickly generate multiple variations, test different angles, and adapt your message for every platform in seconds.
                              </p>
                            </div>
                          </div>
                          <div className="w-10 h-10 block relative shrink-0 max-lg:hidden" name="Use Case Accordion Instance 10">
                            <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm max-lg:after:hidden" name="Use Case Accordion Instance 10">
                              <div className="basis-full shrink-0 block relative aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[18px_18px] max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"XdkUT1tbK\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/></svg>\"), none" }} name="Plus Minus Button Small Instance" />
                              {Logo8_data.map((d, i) => <Logo8 key={i} d={d} styles={Logo8_styles[i]} />)}
                            </div>
                          </div>
                        </div>
                        {Logo9_data.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-300 h-[6.9375rem] block relative shrink-0 max-lg:w-[20.4375rem] max-lg:h-[9.7375rem]" name="Use Cases Instance 2">
                      <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0" name="Use Cases Instance 2">
                        <div className="w-full h-full flex relative p-6 rounded-xl justify-between items-center content-center shrink-0 overflow-clip max-lg:p-5 max-lg:flex-col max-lg:justify-start max-lg:gap-6">
                          <div className="w-[4.5%] flex relative justify-start items-start content-start shrink-0 max-lg:w-full max-lg:justify-between max-lg:items-end max-lg:content-end">
                            <div className="w-[3.1875rem] h-[2.6875rem] block relative shrink-0" name="Use Case Accordion Instance 2">
                              <div className="w-[3.1875rem] h-[2.6875rem] block relative" name="Use Case Accordion Instance 2">
                                <div className="w-12 h-[2.0625rem] block absolute top-2.5 shrink-0 overflow-clip">
                                  <div className="w-10 h-full flex absolute top-0 p-0.5 rounded-sm justify-start items-center content-center shrink-0 gap-3 bg-surface-3 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-[2.0625rem] after:rounded-tl-sm">
                                    <div className="w-9 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                                      <p className="block text-muted [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[1.0625rem] tracking-[-0.14px] text-center" dir="auto">
                                        002
                                      </p>
                                    </div>
                                  </div>
                                  <div className="w-[1.0625rem] h-[1.0625rem] block absolute bottom-2 left-8 shrink-0" aria-hidden="true">
                                    <div className="block">
                                      <Icon14 />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[1.0625rem] h-[1.0625rem] block absolute top-4.5 left-[15.1875rem] opacity-0 shrink-0" aria-hidden="true">
                                  <div className="block">
                                    <Icon15 />
                                  </div>
                                </div>
                                <div className="w-px h-px block absolute bottom-4 left-[2.8125rem] shrink-0 overflow-clip bg-surface-3" />
                              </div>
                            </div>
                            <div className="hidden max-lg:w-10 max-lg:h-10 max-lg:block max-lg:relative max-lg:shrink-0" name="Use Case Accordion Instance 24">
                              <div className="hidden max-lg:w-10 max-lg:h-10 max-lg:flex max-lg:relative max-lg:p-0.5 max-lg:rounded-sm max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm 2xl:after:hidden" name="Use Case Accordion Instance 24">
                                <div className="hidden max-lg:w-6 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:aspect-square max-lg:bg-color-001 max-lg:transform-[matrix(-1,0,0,-1,0,0)] max-lg:origin-[12px_12px]" data-ditto-id="style-div-6" />
                                {Logo6_data2.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles2[i]} />)}
                              </div>
                            </div>
                          </div>
                          <div className="w-[33.9625rem] flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-lg:w-[16.6875rem] max-lg:order-[1]">
                            <div className="w-[33.9625rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[16.6875rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.28px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]" dir="auto">
                                For founders
                              </p>
                            </div>
                          </div>
                          <div className="w-10 h-10 block relative shrink-0 max-lg:hidden" name="Use Case Accordion Instance 5">
                            <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm max-lg:after:hidden" name="Use Case Accordion Instance 5">
                              <div className="w-6 block relative shrink-0 aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[12px_12px] max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FKhttcrgU\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 12 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"ypco3dpHt\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(12 6)\\\" width=\\\"1px\\\"/></svg>\"), none" }} />
                              {Logo8_data2.map((d, i) => <Logo8 key={i} d={d} styles={Logo8_styles2[i]} />)}
                            </div>
                          </div>
                        </div>
                        {Logo9_data2.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles2[i]} />)}
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-300 h-[6.9375rem] block relative shrink-0 max-lg:w-[20.4375rem] max-lg:h-[9.7375rem]" name="Use Cases Instance 3">
                      <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0" name="Use Cases Instance 3">
                        <div className="w-full h-full flex relative p-6 rounded-xl justify-between items-center content-center shrink-0 overflow-clip max-lg:p-5 max-lg:flex-col max-lg:justify-start max-lg:gap-6">
                          <div className="w-[4.5%] flex relative justify-start items-start content-start shrink-0 max-lg:w-full max-lg:justify-between max-lg:items-end max-lg:content-end">
                            <div className="w-[3.1875rem] h-[2.6875rem] block relative shrink-0" name="Use Case Accordion Instance 2">
                              <div className="w-[3.1875rem] h-[2.6875rem] block relative" name="Use Case Accordion Instance 2">
                                <div className="w-12 h-[2.0625rem] block absolute top-2.5 shrink-0 overflow-clip">
                                  <div className="w-10 h-full flex absolute top-0 p-0.5 rounded-sm justify-start items-center content-center shrink-0 gap-3 bg-surface-3 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-[2.0625rem] after:rounded-tl-sm">
                                    <div className="w-9 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                                      <p className="block text-muted [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[1.0625rem] tracking-[-0.14px] text-center" dir="auto">
                                        003
                                      </p>
                                    </div>
                                  </div>
                                  <div className="w-[1.0625rem] h-[1.0625rem] block absolute bottom-2 left-8 shrink-0" aria-hidden="true">
                                    <div className="block">
                                      <Icon14 />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[1.0625rem] h-[1.0625rem] block absolute top-4.5 left-[15.1875rem] opacity-0 shrink-0" aria-hidden="true">
                                  <div className="block">
                                    <Icon15 />
                                  </div>
                                </div>
                                <div className="w-px h-px block absolute bottom-4 left-[2.8125rem] shrink-0 overflow-clip bg-surface-3" />
                              </div>
                            </div>
                            <div className="hidden max-lg:w-10 max-lg:h-10 max-lg:block max-lg:relative max-lg:shrink-0" name="Use Case Accordion Instance 24">
                              <div className="hidden max-lg:w-10 max-lg:h-10 max-lg:flex max-lg:relative max-lg:p-0.5 max-lg:rounded-sm max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm 2xl:after:hidden" name="Use Case Accordion Instance 24">
                                <div className="hidden max-lg:w-6 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:aspect-square max-lg:bg-color-001 max-lg:transform-[matrix(-1,0,0,-1,0,0)] max-lg:origin-[12px_12px]" data-ditto-id="style-div-7" />
                                {Logo6_data3.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles3[i]} />)}
                              </div>
                            </div>
                          </div>
                          <div className="w-[33.9625rem] flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-lg:w-[16.6875rem] max-lg:order-[1]">
                            <div className="w-[33.9625rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[16.6875rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.28px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]" dir="auto">
                                For teams
                              </p>
                            </div>
                          </div>
                          <div className="w-10 h-10 block relative shrink-0 max-lg:hidden" name="Use Case Accordion Instance 5">
                            <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm max-lg:after:hidden" name="Use Case Accordion Instance 5">
                              <div className="w-6 block relative shrink-0 aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[12px_12px] max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FKhttcrgU\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 12 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"ypco3dpHt\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(12 6)\\\" width=\\\"1px\\\"/></svg>\"), none" }} />
                              {Logo8_data3.map((d, i) => <Logo8 key={i} d={d} styles={Logo8_styles3[i]} />)}
                            </div>
                          </div>
                        </div>
                        {Logo9_data3.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles3[i]} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-660 min-h-625 flex relative pt-30 px-10 flex-col justify-start items-center content-center shrink-0 gap-15 max-md:h-[80.2rem] max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 max-lg:gap-10 max-lg:min-h-0 md:max-lg:h-[71.4125rem] 2xl:h-891 after:content-[''] after:block after:absolute after:inset-0">
              <div className="h-full flex absolute top-0 z-1 min-w-0 flex-col justify-start items-center content-center shrink-0 overflow-clip pointer-events-none">
                <div className="contents min-w-0 pointer-events-none">
                  <div className="h-660 block absolute inset-x-0 z-1 shrink-0 overflow-clip pointer-events-none max-md:h-[80.2rem] md:max-lg:h-[71.4125rem] 2xl:h-891" style={{ backgroundImage: "linear-gradient(var(--background) 7%, var(--clr-1) 52.2599%, var(--background) 100%)" }} />
                </div>
                <div className="w-full h-full block relative opacity-60 shrink-0 pointer-events-none" name="Scroll Component">
                  <div className="h-full block relative pointer-events-none">
                    <div className="h-full block relative overflow-hidden bg-clr-1 pointer-events-none">
                      <img className="w-full h-full block absolute top-0 left-0 opacity-0 overflow-clip object-cover pointer-events-none max-lg:opacity-[initial] 2xl:opacity-[initial]" alt="" aria-hidden="true" src="/assets/cloned/images/7d42a65d3683.webp" />
                      <img className="w-full h-full block absolute top-0 left-0 overflow-clip object-cover pointer-events-none max-lg:opacity-0 2xl:opacity-0" data-component="image" alt="" aria-hidden="true" src="/assets/cloned/images/3be1e426ed52.webp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-320 h-660 flex absolute top-0 z-1 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] max-lg:h-[174.0625rem] md:max-lg:w-192 2xl:w-360 2xl:h-891">
                {Logo5_data3.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles3[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-660 block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[174.0625rem] 2xl:h-891 after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-660 block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[174.0625rem] 2xl:h-891 after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-3.5">
                <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                    {Tile_data5.map((d, i) => <Tile key={i} d={d} styles={Tile_styles5[i]} />)}
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                        {"Turn any idea into ready-to-use "}
                        <br className="inline max-lg:hidden" />
                        content in seconds
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                    <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px]" dir="auto">
                      No complex tools or long workflows - just describe what you need,
                      <br className="inline max-lg:hidden" />
                      and Verseo does the rest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[39.3375rem] flex sticky top-24 z-1 max-w-340 flex-col justify-center items-center content-center shrink-0 gap-15 max-md:h-[55.2625rem] max-lg:relative max-lg:inset-0 max-lg:gap-10 md:max-lg:h-[51.0625rem]">
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="How It Works Instance">
                    <div className="flex relative justify-start items-start content-start overflow-clip max-lg:flex-col" name="How It Works Instance">
                      <div className="w-108 flex relative z-1 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.4375rem] max-lg:order-[1] md:max-lg:w-180 2xl:w-[30.6rem] after:content-[''] after:block after:absolute after:inset-0">
                        {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i]} />)}
                      </div>
                      <div className="w-192 h-[39.3375rem] flex relative z-1 flex-col justify-start items-center content-center self-stretch grow shrink-0 basis-0 max-md:w-[20.4375rem] max-lg:h-62.5 max-lg:[align-self:initial] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-[54.4rem] after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-full flex relative p-3 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:h-[2.4rem]">
                          <div className="w-186 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.9375rem] md:max-lg:w-174 2xl:w-[52.9rem]">
                            <p className="block text-clr-11 [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              The simpler the input, the faster you get results
                            </p>
                          </div>
                          {Logo10_data.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles[i]} />)}
                        </div>
                        <div className="w-full h-[36.9375rem] flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:h-[13.225rem] after:content-[''] after:block after:absolute after:inset-0">
                          {Logo10_data2.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles2[i]} />)}
                          <div className="w-[7.2rem] h-full flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:hidden 2xl:w-[130.5px] after:content-[''] after:block after:absolute after:inset-0 after:h-[36.9375rem] max-lg:after:hidden">
                            {Logo11_data.map((d, i) => <Logo11 key={i} d={d} styles={Logo11_styles[i]} />)}
                          </div>
                          <div className="w-[33.6rem] h-full flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-[609.3px] after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-[33.6rem] flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden 2xl:w-[609.3px] after:content-[''] after:block after:absolute after:inset-0 after:h-29.5 max-lg:after:hidden">
                              <div className="w-full h-24.5 flex relative p-6 rounded-xl flex-col justify-start items-start content-start shrink-0 gap-8 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-24.5 after:rounded-tl-xl max-lg:after:hidden" />
                              {Logo12_data.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles[i]} />)}
                            </div>
                            <div className="w-[33.6rem] h-[22.1875rem] flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 bg-surface-4 max-md:w-[20.4375rem] max-lg:h-[13.225rem] md:max-lg:w-180 2xl:w-[609.3px] after:content-[''] after:block after:absolute after:inset-0">
                              <div className="w-full h-full flex relative z-1 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-clip">
                                <div className="h-full block absolute top-0 inset-x-0 min-w-0">
                                  <img className="w-full h-[20.9375rem] block overflow-clip object-contain aspect-[auto_1040/530] max-lg:h-48" data-component="image" alt="Step-by-step AI content workflow preview inside Verseo" height="530" sizes="calc(max(max(min(100vw - 80px, 1360px) * 0.64, 1px) * 0.7, 1px) - 20px)" src="/assets/cloned/images/e3d52b1f59f6.png" srcSet="/assets/cloned/images/3ce3bfd09d82.png 512w, /assets/cloned/images/d4c3da98d02d.png 1024w, /assets/cloned/images/e3d52b1f59f6.png 1040w" width="1040" />
                                </div>
                              </div>
                              {Logo10_data3.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles3[i]} />)}
                            </div>
                            <div className="w-[33.6rem] flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden 2xl:w-[609.3px] after:content-[''] after:block after:absolute after:inset-0 after:h-29.5 max-lg:after:hidden">
                              <div className="w-full h-24.5 flex relative p-6 rounded-xl flex-col justify-start items-start content-start shrink-0 gap-8 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-24.5 after:rounded-tl-xl max-lg:after:hidden" />
                              {Logo12_data2.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles2[i]} />)}
                            </div>
                          </div>
                          <div className="w-[7.2rem] h-full flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:hidden 2xl:w-[130.5px]">
                            {Logo11_data2.map((d, i) => <Logo11 key={i} d={d} styles={Logo11_styles2[i]} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 overflow-clip max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0" id="results">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data4.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles4[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[60.425rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[95.2375rem] md:max-lg:h-[86.4rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[60.425rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[95.2375rem] md:max-lg:h-[86.4rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data6.map((d, i) => <Tile key={i} d={d} styles={Tile_styles6[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          See the impact instantly
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] text-center max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px]" dir="auto">
                        Create content faster, stay consistent across every channel,
                        <br className="inline max-lg:hidden" />
                        and achieve better results with less effort.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex relative z-1 justify-start items-center content-center shrink-0 bg-background max-lg:flex-col after:content-[''] after:block after:absolute after:inset-0">
                  <div className="w-[36%] flex relative p-2.5 flex-col justify-between items-start content-start self-stretch shrink-0 bg-surface-2 max-lg:w-full max-lg:justify-center max-lg:[align-self:initial]">
                    <div className="contents min-w-0">
                      <div className="h-[31.3rem] flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-md:h-[17.8625rem] max-lg:justify-center max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[16.8125rem] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                        <div className="flex relative justify-center items-center content-center shrink-0 gap-2">
                          <div className="w-6 h-[1.4375rem] block relative shrink-0 text-color-001" aria-hidden="true">
                            <div className="block">
                              <Icon16 />
                            </div>
                          </div>
                          <div className="w-[2.975rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-color-001 [font-family:'Space_Grotesk',_'Space_Grotesk_Placeholder',_sans-serif] text-sm font-bold leading-[1.0625rem] tracking-[-0.56px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              Verseo
                            </p>
                          </div>
                        </div>
                        <div className="flex relative flex-col justify-start items-start content-start shrink-0 gap-8 max-lg:gap-5.5">
                          <div className="w-91 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
                            <div className="w-91 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
                              <div className="w-91 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-xl max-lg:leading-6 max-lg:tracking-[-0.2px]" dir="auto">
                                  Stay in the flow
                                </p>
                              </div>
                              <div className="w-91 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                  Keep momentum while writing. Generate, improve, and expand ideas without breaking your creative process.
                                </p>
                              </div>
                            </div>
                            <div className="w-91 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-[26.35rem]">
                              <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                                No more switching between tools and tabs.
                              </p>
                            </div>
                          </div>
                          <div className="w-[118.5px] block relative shrink-0" name="Results Instance">
                            <a className="h-12 flex relative py-3.5 px-4 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-color-001 cursor-pointer" data-component="link" href="/contact-us" name="Results Instance">
                              <div className="w-[86.5px] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                                <div className="w-[86.5px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                  <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                    Start Writing
                                  </p>
                                </div>
                                <div className="w-[86.5px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                                  <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                    Start Writing
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Logo13_data.map((d, i) => <Logo13 key={i} d={d} styles={Logo13_styles[i]} />)}
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-192 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-[54.4rem]">
                      <div className="w-full flex relative p-6 justify-start items-center content-center shrink-0 gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:content-start max-lg:gap-8 after:content-[''] after:block after:absolute after:inset-0">
                        {Logo10_data4.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles4[i]} />)}
                        <div className="w-8 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"jaHiC89b0\\\" width=\\\"11px\\\"/></svg>\"), none" }} />
                        <div className="w-129.5 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-1.5 max-md:w-[17.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-168 2xl:w-[38.775rem]">
                          <div className="w-129.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[38.775rem]">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                              Ready to Publish
                            </p>
                          </div>
                          <div className="w-129.5 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[38.775rem]">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                              Review, edit, regenerate, and export your content wherever you need it.
                            </p>
                          </div>
                        </div>
                        <div className="flex relative py-1 px-2 rounded-sm justify-start items-center content-center shrink-0 gap-1.5 bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-32.5 after:h-8 after:rounded-tl-sm">
                          <div className="flex relative p-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                            <div className="basis-full shrink-0 block relative aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"942876471\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 1.739 C 0 0.779 0.779 0 1.739 0 L 4.667 0 C 6.508 0 8 1.492 8 3.333 C 8 5.174 6.508 6.667 4.667 6.667 L 0 6.667 Z\\\" fill=\\\"transparent\\\" height=\\\"6.666659999999999px\\\" id=\\\"lbQidGUYS\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"butt\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(3.333 1.333)\\\" width=\\\"7.99999px\\\"/><path d=\\\"M 0 0 L 6 0 C 7.841 0 9.333 1.492 9.333 3.333 C 9.333 5.174 7.841 6.667 6 6.667 L 1.373 6.667 C 0.615 6.667 0 6.052 0 5.294 Z\\\" fill=\\\"transparent\\\" height=\\\"6.6667000000000005px\\\" id=\\\"llnCcQS46\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"butt\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(3.333 8)\\\" width=\\\"9.33329px\\\"/></svg>\"), none" }} />
                          </div>
                          <div className="flex relative p-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                            <div className="basis-full shrink-0 block relative aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"4251125520\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 Z\\\" fill=\\\"transparent\\\" height=\\\"3.3333299999999992px\\\" id=\\\"lEtMJLy00\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"butt\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(2.667 6.333)\\\" width=\\\"3.3333399999999997px\\\"/><path d=\\\"M 3.333 0 L 0 2.333\\\" fill=\\\"transparent\\\" height=\\\"2.33333px\\\" id=\\\"YOAinWkgc\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(6 4.333)\\\" width=\\\"3.33333px\\\"/><path d=\\\"M 3.333 2.333 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"2.3333299999999983px\\\" id=\\\"EGf6j50PK\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(6 9.333)\\\" width=\\\"3.33333px\\\"/><path d=\\\"M 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 Z\\\" fill=\\\"transparent\\\" height=\\\"3.3333000000000013px\\\" id=\\\"UTPzHVnAH\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"butt\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(9.333 10.666)\\\" width=\\\"3.33329px\\\"/><path d=\\\"M 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 Z\\\" fill=\\\"transparent\\\" height=\\\"3.33333px\\\" id=\\\"jmTV3MjTs\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"butt\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(9.333 2)\\\" width=\\\"3.33329px\\\"/></svg>\"), none" }} />
                          </div>
                          <div className="flex relative p-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                            <div className="basis-full shrink-0 block relative aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"660104321\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 13.333 L 8 13.333 M 4 0 L 12 0 M 4 13.333 L 8 0\\\" fill=\\\"transparent\\\" height=\\\"13.333300000000001px\\\" id=\\\"wfyVNxRQ6\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(2 1.333)\\\" width=\\\"12px\\\"/></svg>\"), none" }} />
                          </div>
                          <div className="flex relative p-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                            <div className="basis-full shrink-0 block relative aspect-square bg-color-001" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"3313654017\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 2.17 6.106 L 2.524 6.46 L 2.524 6.46 Z M 0.5 8.468 L 0 8.468 Z M 4.532 12.5 L 4.532 13 Z M 6.106 2.17 L 5.753 1.816 L 5.753 1.816 Z M 7.327 10.396 C 7.523 10.592 7.839 10.592 8.034 10.396 C 8.23 10.201 8.23 9.884 8.034 9.689 L 7.681 10.043 Z M 3.311 4.966 C 3.116 4.77 2.799 4.77 2.604 4.966 C 2.408 5.161 2.408 5.477 2.604 5.673 L 2.957 5.319 Z M 10.83 6.894 L 10.476 6.54 L 6.54 10.476 L 6.894 10.83 L 7.247 11.184 L 11.184 7.247 Z M 2.17 6.106 L 2.524 6.46 L 6.46 2.524 L 6.106 2.17 L 5.753 1.816 L 1.816 5.753 Z M 2.17 10.83 L 2.524 10.476 C 1.957 9.91 1.568 9.519 1.315 9.188 C 1.071 8.867 1 8.661 1 8.468 L 0.5 8.468 L 0 8.468 C 0 8.967 0.208 9.385 0.52 9.794 C 0.823 10.192 1.27 10.637 1.816 11.183 Z M 2.17 6.106 L 1.816 5.753 C 1.27 6.3 0.823 6.744 0.52 7.142 C 0.208 7.551 0 7.969 0 8.468 L 0.5 8.468 L 1 8.468 C 1 8.276 1.071 8.069 1.315 7.749 C 1.568 7.417 1.957 7.027 2.524 6.46 Z M 6.894 10.83 L 6.54 10.476 C 5.973 11.043 5.583 11.432 5.251 11.685 C 4.931 11.929 4.724 12 4.532 12 L 4.532 12.5 L 4.532 13 C 5.031 13 5.449 12.792 5.858 12.48 C 6.256 12.177 6.7 11.73 7.247 11.184 Z M 2.17 10.83 L 1.816 11.184 C 2.363 11.73 2.808 12.177 3.206 12.48 C 3.615 12.792 4.033 13 4.532 13 L 4.532 12.5 L 4.532 12 C 4.339 12 4.133 11.929 3.812 11.685 C 3.48 11.432 3.09 11.043 2.524 10.476 Z M 10.83 2.17 L 10.476 2.524 C 11.043 3.09 11.432 3.48 11.685 3.812 C 11.929 4.133 12 4.339 12 4.532 L 12.5 4.532 L 13 4.532 C 13 4.033 12.792 3.615 12.48 3.206 C 12.177 2.808 11.73 2.363 11.184 1.816 Z M 10.83 6.894 L 11.184 7.247 C 11.73 6.7 12.177 6.256 12.48 5.858 C 12.792 5.449 13 5.031 13 4.532 L 12.5 4.532 L 12 4.532 C 12 4.724 11.929 4.931 11.685 5.251 C 11.432 5.583 11.043 5.973 10.476 6.54 Z M 10.83 2.17 L 11.183 1.816 C 10.637 1.27 10.192 0.823 9.794 0.52 C 9.385 0.208 8.967 0 8.468 0 L 8.468 0.5 L 8.468 1 C 8.661 1 8.867 1.071 9.188 1.315 C 9.519 1.568 9.91 1.957 10.476 2.524 Z M 6.106 2.17 L 6.46 2.524 C 7.027 1.957 7.417 1.568 7.749 1.315 C 8.069 1.071 8.276 1 8.468 1 L 8.468 0.5 L 8.468 0 C 7.969 0 7.551 0.208 7.142 0.52 C 6.744 0.823 6.3 1.27 5.753 1.816 Z M 7.681 10.043 L 8.034 9.689 L 3.311 4.966 L 2.957 5.319 L 2.604 5.673 L 7.327 10.396 Z\\\" fill=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" height=\\\"13.000000375366211px\\\" id=\\\"TOkM_PIZM\\\" transform=\\\"translate(1.5 1.5)\\\" width=\\\"13.000000375366211px\\\"/><path d=\\\"M 0 0 L 8 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FRImNoE_b\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"miter\\\" stroke-miterlimit=\\\"10\\\" stroke-width=\\\"1\\\" stroke=\\\"var(--token-150c4a4e-408f-4cdd-8cd9-4f462c902163, var(--color-001))\\\" transform=\\\"translate(6 14)\\\" width=\\\"8px\\\"/></svg>\"), none" }} />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip max-lg:flex-col">
                        <div className="w-96 h-60 flex relative p-6 flex-col justify-between items-start content-start grow shrink-0 basis-0 max-md:w-[20.4375rem] max-md:h-[12.225rem] max-lg:justify-start max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 md:max-lg:h-[11.175rem] 2xl:w-[27.2rem] after:content-[''] after:block after:absolute after:inset-0">
                          <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-1">
                            <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-1">
                              <div className="w-84 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem]">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-light leading-4 tracking-[-0.14px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                  Less time spent editing
                                </p>
                              </div>
                            </div>
                            <div className="block relative shrink-0" name="Results Instance 2">
                              <p className="block opacity-0 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.875rem] font-medium leading-11.5 tracking-[-0.92px] text-center [font-feature-settings:'case',_'cv02',_'cv03',_'cv04',_'cv05',_'cv06',_'cv07',_'cv08',_'cv09',_'cv10',_'cv11',_'cv12',_'cv13',_'tnum'] pointer-events-none">
                                87%
                              </p>
                              <p className="w-[102.5px] h-full block absolute top-0 text-clr-12 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.875rem] font-medium leading-11.5 tracking-[-0.92px] text-center [font-feature-settings:'case',_'cv02',_'cv03',_'cv04',_'cv05',_'cv06',_'cv07',_'cv08',_'cv09',_'cv10',_'cv11',_'cv12',_'cv13',_'tnum']">
                                87%
                              </p>
                            </div>
                          </div>
                          {Logo10_data5.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles5[i]} />)}
                          <div className="w-84 flex relative pt-4 flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem] after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-84 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Refine and finalize content faster with AI-powered suggestions and rewrites.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-96 h-60 flex relative p-6 flex-col justify-between items-start content-start grow shrink-0 basis-0 max-md:w-[20.4375rem] max-md:h-[13.275rem] max-lg:justify-start max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 md:max-lg:h-[11.175rem] 2xl:w-[27.2rem] after:content-[''] after:block after:absolute after:inset-0">
                          {Logo10_data6.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles6[i]} />)}
                          <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-1">
                            <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-1">
                              <div className="w-84 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem]">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-light leading-4 tracking-[-0.14px] uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                  Brand Voice
                                </p>
                              </div>
                            </div>
                            <div className="block relative shrink-0" name="Results Instance 3">
                              <p className="block opacity-0 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.875rem] font-medium leading-11.5 tracking-[-0.92px] text-center [font-feature-settings:'case',_'cv02',_'cv03',_'cv04',_'cv05',_'cv06',_'cv07',_'cv08',_'cv09',_'cv10',_'cv11',_'cv12',_'cv13',_'tnum'] pointer-events-none">
                                100%
                              </p>
                              <p className="w-[8.2125rem] h-full block absolute top-0 text-clr-12 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.875rem] font-medium leading-11.5 tracking-[-0.92px] text-center [font-feature-settings:'case',_'cv02',_'cv03',_'cv04',_'cv05',_'cv06',_'cv07',_'cv08',_'cv09',_'cv10',_'cv11',_'cv12',_'cv13',_'tnum']">
                                100%
                              </p>
                            </div>
                          </div>
                          <div className="w-84 flex relative pt-4 flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem] after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-84 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[24.2rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Keep messaging aligned across emails, social media, landing pages, and campaigns.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-192 flex relative p-6 flex-col justify-start items-start content-start shrink-0 gap-5 max-md:w-[20.4375rem] max-lg:justify-center max-lg:gap-8 md:max-lg:w-180 2xl:w-[54.4rem] after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-180 flex relative flex-col justify-start items-start content-start shrink-0 gap-1.5 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[51.4rem]">
                          <div className="w-180 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[51.4rem]">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                              Content that fits anywhere
                            </p>
                          </div>
                          <div className="w-180 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[51.4rem]">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                              From social posts to long-form content.
                            </p>
                          </div>
                        </div>
                        {Logo10_data7.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles7[i]} />)}
                        <div className="w-180 flex relative flex-col justify-center items-center content-center shrink-0 gap-4 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[51.4rem]">
                          <div className="w-full h-19 block relative shrink-0" name="Results Instance 4">
                            <div className="h-19 flex relative flex-col justify-center items-center content-center gap-2.5" name="Results Instance 4">
                              <div className="w-180 h-19 block relative grow shrink-0 basis-0 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-[51.4rem]" name="Integrations Ticker Instance">
                                <section className="h-full flex max-w-full max-h-full items-center justify-items-center overflow-hidden" style={{ maskImage: "linear-gradient(to right, var(--clr-8) 0%, var(--foreground) 12.5%, var(--foreground) 87.5%, var(--clr-8) 100%)" }}>
                                  <ul className="h-full flex relative max-w-full max-h-full items-center gap-4 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-0.0999999,0)] max-lg:gap-2.5" data-ditto-id="motion-ul-3">
                                    {Logo14_data.map((d, i) => <Logo14 key={i} d={d} styles={Logo14_styles[i]} />)}
                                    <li className="list-item" aria-hidden="true">
                                      <div className="flex relative p-0.5 rounded-sm justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-surface-2">
                                        <div className="basis-full shrink-0 h-16.5 flex relative p-[0.8125rem] rounded-sm justify-center items-center content-center gap-2.5 bg-surface after:content-[''] after:block after:absolute after:inset-0 after:w-16.5 after:h-16.5 after:rounded-tl-sm" />
                                      </div>
                                    </li>
                                  </ul>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0" id="examples">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data5.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles5[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[100.7375rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[117.6rem] md:max-lg:h-[107.7625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[100.7375rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[117.6rem] md:max-lg:h-[107.7625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data7.map((d, i) => <Tile key={i} d={d} styles={Tile_styles7[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          {"See what you can create "}
                          <br className="inline max-lg:hidden" />
                          with Verseo
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px]" dir="auto">
                        {"From social media posts and email campaigns to product descriptions and "}
                        <br className="inline max-lg:hidden" />
                        ad copy — generate content tailored to any channel in seconds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-15 max-lg:gap-10">
                    <div className="w-full h-[20.9375rem] flex relative z-1 justify-start items-start content-start shrink-0 overflow-clip max-md:h-[29.975rem] max-lg:flex-col md:max-lg:h-111.5">
                      <div className="w-150 flex relative z-1 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-150 h-[20.9375rem] flex relative flex-col justify-start items-start content-start shrink-0 max-md:w-[20.4375rem] max-md:h-[14.35rem] md:max-lg:w-180 md:max-lg:h-49 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                          <div className="h-full flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface max-lg:justify-center max-lg:gap-4 max-lg:shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-lg:grow-[initial] max-lg:basis-[initial] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                            <div className="w-8 block relative shrink-0 aspect-square bg-clr-13" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"g_g6dD4v_\\\" width=\\\"11px\\\"/></svg>\"), none" }} />
                            <div className="w-138 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-xl max-lg:leading-6 max-lg:tracking-[-0.2px]" dir="auto">
                                  5 Ways AI Saves Time
                                </p>
                              </div>
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                  Learn how modern teams use AI to streamline content creation, improve consistency, and free up time for more meaningful work.
                                </p>
                              </div>
                            </div>
                            <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                                Productivity | AI | Teams
                              </p>
                            </div>
                          </div>
                          {Logo10_data8.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles8[i]} />)}
                        </div>
                      </div>
                      <div className="w-150 h-[20.9375rem] flex relative z-1 flex-col justify-start items-center content-center grow shrink-0 basis-0 bg-background max-md:w-[20.4375rem] max-lg:h-62.5 max-lg:order-[1] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-full flex relative p-3 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:h-[2.4rem]">
                          <div className="w-144 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.9375rem] md:max-lg:w-174 2xl:w-164">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              Ready to publish
                            </p>
                          </div>
                          {Logo10_data9.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles9[i]} />)}
                        </div>
                        <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip after:content-[''] after:block after:absolute after:inset-0">
                          {Logo10_data10.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles10[i]} />)}
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5 after:content-[''] after:block after:absolute after:inset-0 after:h-74 max-lg:after:hidden">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data3.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles3[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data4.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles4[i]} />)}
                            </div>
                          </div>
                          <div className="w-105 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-full h-11 flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11 max-lg:after:hidden">
                              {Logo12_data5.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles5[i]} />)}
                            </div>
                            <div className="w-105 h-63 flex relative pt-6 px-6 flex-col justify-end items-start content-start shrink-0 bg-surface-4 max-md:w-[20.4375rem] max-md:h-[12.3875rem] md:max-lg:w-180 md:max-lg:h-[443.5px] 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                              <div className="w-full flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-[1.60169/1] transform-[matrix(1,0,0,1,0,80)]">
                                <div className="h-full block absolute top-0 inset-x-0 min-w-0">
                                  <img className="w-full h-58 block overflow-clip object-contain aspect-[auto_756/472] max-md:h-43.5 md:max-lg:h-105 2xl:h-[16.6875rem]" data-component="image" alt="AI writing workflow interface for generating polished content" height="472" sizes="calc(max(max(min(100vw - 80px, 1360px) / 2, 1px) * 0.7, 1px) - 48px)" src="/assets/cloned/images/0a44d9255dd5.png" srcSet="/assets/cloned/images/1364dc936f14.png 512w, /assets/cloned/images/0a44d9255dd5.png 756w" width="756" />
                                </div>
                              </div>
                              {Logo10_data11.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles11[i]} />)}
                            </div>
                          </div>
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data6.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles6[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data7.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles7[i]} />)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[20.9375rem] flex relative z-1 justify-start items-start content-start shrink-0 overflow-clip max-md:h-[29.975rem] max-lg:flex-col md:max-lg:h-111.5">
                      <div className="w-150 h-[20.9375rem] flex relative z-1 flex-col justify-start items-center content-center grow shrink-0 basis-0 bg-background max-md:w-[20.4375rem] max-lg:h-62.5 max-lg:order-[1] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-full flex relative p-3 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:h-[2.4rem]">
                          <div className="w-144 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.9375rem] md:max-lg:w-174 2xl:w-164">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              Generated in 3 sec
                            </p>
                          </div>
                          {Logo10_data12.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles12[i]} />)}
                        </div>
                        <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip after:content-[''] after:block after:absolute after:inset-0">
                          {Logo10_data13.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles13[i]} />)}
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5 after:content-[''] after:block after:absolute after:inset-0 after:h-74 max-lg:after:hidden">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data8.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles8[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data9.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles9[i]} />)}
                            </div>
                          </div>
                          <div className="w-105 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-full h-11 flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11 max-lg:after:hidden">
                              {Logo12_data10.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles10[i]} />)}
                            </div>
                            <div className="w-105 h-63 flex relative pt-6 px-6 flex-col justify-end items-start content-start shrink-0 bg-surface-4 max-md:w-[20.4375rem] max-md:h-[12.3875rem] md:max-lg:w-180 md:max-lg:h-[443.5px] 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                              <div className="w-full flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-[1.60169/1] transform-[matrix(1,0,0,1,0,80)]">
                                <div className="h-full block absolute top-0 inset-x-0 min-w-0">
                                  <img className="w-full h-58 block overflow-clip object-contain aspect-[auto_756/472] max-md:h-43.5 md:max-lg:h-105 2xl:h-[16.6875rem]" data-component="image" alt="Content automation dashboard showing workflow controls and results" height="472" sizes="calc(max(max(min(100vw - 80px, 1360px) / 2, 1px) * 0.7, 1px) - 48px)" src="/assets/cloned/images/058677ed594c.png" srcSet="/assets/cloned/images/7cad6ec4b446.png 512w, /assets/cloned/images/058677ed594c.png 756w" width="756" />
                                </div>
                              </div>
                              {Logo10_data14.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles14[i]} />)}
                            </div>
                          </div>
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data11.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles11[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data12.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles12[i]} />)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-150 h-[20.9375rem] flex relative z-1 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.4375rem] max-md:h-[14.35rem] md:max-lg:w-180 md:max-lg:h-49 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-150 h-full flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                          <div className="h-full flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface max-lg:justify-center max-lg:gap-4 max-lg:shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-lg:grow-[initial] max-lg:basis-[initial] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                            <div className="w-8 block relative shrink-0 aspect-square bg-accent" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z M 6 9 L 8 9 L 8 11 L 6 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"EDpqz0dpF\\\" width=\\\"11px\\\"/></svg>\"), none" }} />
                            <div className="w-138 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-xl max-lg:leading-6 max-lg:tracking-[-0.2px]" dir="auto">
                                  Ready To Send
                                </p>
                              </div>
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                  Generate engaging emails with clear messaging, strong structure, and a tone that matches your brand in just a few seconds.
                                </p>
                              </div>
                            </div>
                            <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                                Campaign | Marketing | Outreach
                              </p>
                            </div>
                          </div>
                          {Logo10_data15.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles15[i]} />)}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[20.9375rem] flex relative z-1 justify-start items-start content-start shrink-0 overflow-clip max-md:h-[28.925rem] max-lg:flex-col md:max-lg:h-111.5 grid-cols-1 lg:grid-cols-2">
                      <div className="w-150 h-[20.9375rem] flex relative z-1 flex-col justify-start items-center content-center shrink-0 max-md:w-[20.4375rem] max-md:h-[13.3rem] md:max-lg:w-180 md:max-lg:h-49 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-150 h-full flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                          <div className="h-full flex relative p-6 rounded-xl flex-col justify-between items-start content-start grow shrink-0 basis-0 overflow-clip bg-surface max-lg:justify-center max-lg:gap-4 max-lg:shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-lg:grow-[initial] max-lg:basis-[initial] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                            <div className="w-8 block relative shrink-0 aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 11 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 3 0 L 5 0 L 5 2 L 3 2 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 0 9 L 2 9 L 2 11 L 0 11 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 0 L 2 0 L 2 2 L 0 2 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 9 0 L 11 0 L 11 2 L 9 2 Z M 3 9 L 5 9 L 5 11 L 3 11 Z\\\" fill=\\\"var(--15vlcxd, var(--clr-6))\\\" height=\\\"11px\\\" id=\\\"A6zJ9lDH7\\\" width=\\\"11px\\\"/></svg>\"), none" }} />
                            <div className="w-138 flex relative flex-col justify-start items-start content-start shrink-0 gap-3 max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-xl max-lg:leading-6 max-lg:tracking-[-0.2px]" dir="auto">
                                  Built For Growth
                                </p>
                              </div>
                              <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                  Create polished product descriptions that communicate benefits clearly, build trust, and support better conversion rates.
                                </p>
                              </div>
                            </div>
                            <div className="w-138 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:w-158">
                              <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px]" dir="auto">
                                SaaS | Product | Copywriting
                              </p>
                            </div>
                          </div>
                          {Logo10_data16.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles16[i]} />)}
                        </div>
                      </div>
                      <div className="w-150 h-[20.9375rem] flex relative z-1 flex-col justify-start items-center content-center grow shrink-0 basis-0 bg-background max-md:w-[20.4375rem] max-lg:h-62.5 max-lg:order-[1] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170 after:content-[''] after:block after:absolute after:inset-0">
                        <div className="w-full flex relative p-3 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:h-[2.4rem]">
                          <div className="w-144 flex relative flex-col justify-center grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.9375rem] md:max-lg:w-174 2xl:w-164">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] italic leading-[0.875rem] tracking-[-0.12px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                              Optimized for conversion
                            </p>
                          </div>
                          {Logo10_data17.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles17[i]} />)}
                        </div>
                        <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip after:content-[''] after:block after:absolute after:inset-0">
                          {Logo10_data18.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles18[i]} />)}
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5 after:content-[''] after:block after:absolute after:inset-0 after:h-74 max-lg:after:hidden">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data13.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles13[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data14.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles14[i]} />)}
                            </div>
                          </div>
                          <div className="w-105 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                            <div className="w-full h-11 flex relative p-2.5 flex-col justify-start items-start content-start shrink-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-11 max-lg:after:hidden">
                              {Logo12_data15.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles15[i]} />)}
                            </div>
                            <div className="w-105 h-63 flex relative pt-6 px-6 flex-col justify-end items-start content-start shrink-0 bg-surface-4 max-md:w-[20.4375rem] max-md:h-[12.3875rem] md:max-lg:w-180 md:max-lg:h-[443.5px] 2xl:w-119 after:content-[''] after:block after:absolute after:inset-0">
                              <div className="w-full flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-[1.60169/1] transform-[matrix(1,0,0,1,0,80)]">
                                <div className="h-full block absolute top-0 inset-x-0 min-w-0">
                                  <img className="w-full h-58 block overflow-clip object-contain aspect-[auto_756/472] max-md:h-43.5 md:max-lg:h-105 2xl:h-[16.6875rem]" data-component="image" alt="Verseo content workspace preview with AI-generated outputs" height="472" sizes="calc(max(max(min(100vw - 80px, 1360px) / 2, 1px) * 0.7, 1px) - 48px)" src="/assets/cloned/images/ef9ef9df4394.png" srcSet="/assets/cloned/images/d45e03d79dd9.png 512w, /assets/cloned/images/ef9ef9df4394.png 756w" width="756" />
                                </div>
                              </div>
                              {Logo10_data19.map((d, i) => <Logo10 key={i} d={d} styles={Logo10_styles19[i]} />)}
                            </div>
                          </div>
                          <div className="w-22.5 flex relative flex-col justify-center items-center content-center self-stretch shrink-0 overflow-clip max-lg:hidden 2xl:w-25.5">
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data16.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles16[i]} />)}
                            </div>
                            <div className="w-full h-37 flex relative p-2.5 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-37 max-lg:after:hidden">
                              {Logo12_data17.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles17[i]} />)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative z-2 p-10 flex-col justify-center items-center content-center shrink-0 gap-[1.5625rem] overflow-clip max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0 after:h-[11.4375rem] max-lg:after:h-[11.3625rem]">
              <div className="w-300 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-460">
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                  Works with your favorite tools
                </p>
              </div>
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[11.4375rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[11.3625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[11.4375rem] max-lg:after:h-[11.3625rem]" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[11.4375rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:h-[11.3625rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[11.4375rem] max-lg:after:h-[11.3625rem]" />
                  </div>
                </div>
              </div>
              <div className="contents min-w-0">
                <div className="w-255 block relative z-1 max-w-370 shrink-0 max-md:w-[17.375rem] md:max-lg:w-153 2xl:w-370" name="Integrations Instance">
                  <section className="flex relative max-w-full justify-center items-center content-center overflow-hidden" name="Integrations Instance">
                    <div className="w-238 h-15 block relative z-1 shrink-0" name="Tool Badge Instance">
                      <section className="flex max-w-full max-h-full py-2.5 items-center justify-items-center overflow-hidden" style={{ maskImage: "linear-gradient(to right, var(--clr-8) 0%, var(--foreground) 12.5%, var(--foreground) 87.5%, var(--clr-8) 100%)" }}>
                        <ul className="flex relative max-w-full max-h-full items-center gap-10 justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-1.99958,0)] max-md:transform-[matrix(1,0,0,1,-1.33314,0)] md:max-lg:transform-[matrix(1,0,0,1,-3.66568,0)] 2xl:transform-[matrix(1,0,0,1,-102.996,0)]" data-ditto-id="motion-ul-2">
                          {Logo15_data.map((d, i) => <Logo15 key={i} d={d} styles={Logo15_styles[i]} />)}
                        </ul>
                      </section>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data6.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles6[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[46.675rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[74.8125rem] md:max-lg:h-[67.8875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[46.675rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[74.8125rem] md:max-lg:h-[67.8875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data8.map((d, i) => <Tile key={i} d={d} styles={Tile_styles8[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          {"Loved by teams that "}
                          <br className="inline max-lg:hidden" />
                          create content every day
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-300 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px]" dir="auto">
                      From marketers and founders to agencies and growing teams — Verseo helps
                      <br className="inline" />
                      {" people create better content faster, without sacrificing quality or consistency."}
                    </p>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full flex relative justify-center items-center content-center shrink-0 max-lg:flex-col">
                    {MediaTile3_data.map((d, i) => <MediaTile3 key={i} d={d} styles={MediaTile3_styles[i]} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0" id="pricing">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data7.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles7[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[66.475rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[114.85rem] md:max-lg:h-[111.3875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[66.475rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[114.85rem] md:max-lg:h-[111.3875rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data9.map((d, i) => <Tile key={i} d={d} styles={Tile_styles9[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-[3.3125rem] tracking-[-1.44px] text-center max-lg:text-[2.125rem] max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px]" data-component="heading" dir="auto">
                          {"Choose the plan "}
                          <br className="inline max-lg:hidden" />
                          that grows with you
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px]" dir="auto">
                        Whether you’re creating content solo or collaborating with a team,
                        <br className="inline max-lg:hidden" />
                        there’s a plan designed for your workflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full block relative shrink-0" name="Pricing Instance">
                    <div className="flex relative flex-col justify-center items-center content-center gap-15 max-lg:gap-10" name="Pricing Instance">
                      <div className="block relative shrink-0" name="Pricing Instance">
                        <div className="w-67 flex relative p-1 justify-start items-center content-center overflow-clip cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-67 after:h-12.5" name="Pricing Instance">
                          <div className="w-32.5 h-10.5 flex absolute z-0 min-w-0 rounded-sm justify-center items-center content-center shrink-0 gap-4 bg-color-001 after:content-[''] after:block after:absolute after:inset-0 after:w-32.5 after:h-10.5 after:rounded-tl-sm">
                            <div className="basis-0 shrink-0 h-10.5 block relative grow overflow-clip" />
                          </div>
                          <div className="w-32.5 h-10.5 flex relative z-1 px-4 rounded-sm justify-center items-center content-center shrink-0">
                            <div className="w-[3.45rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[51.5px]">
                              <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                Monthly
                              </p>
                            </div>
                          </div>
                          <div className="w-32.5 h-10.5 flex relative z-1 px-4 rounded-lg justify-center items-center content-center shrink-0">
                            <div className="w-12 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[2.8rem]">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.3px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px]" dir="auto">
                                Annual
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex relative justify-center items-center content-center shrink-0 max-lg:flex-col grid-cols-1 lg:grid-cols-3">
                        {ProductCard_data.map((d, i) => <ProductCard key={i} d={d} styles={ProductCard_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative py-30 px-10 flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:pt-25 max-lg:pb-12.5 max-lg:px-6 after:content-[''] after:block after:absolute after:inset-0">
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                {Logo5_data8.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles8[i]} />)}
                <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[51.225rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[66.2rem] md:max-lg:h-[56.0375rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                  <div className="contents min-w-0 pointer-events-none">
                    <div className="w-px h-[51.225rem] block relative shrink-0 overflow-clip pointer-events-none max-md:h-[66.2rem] md:max-lg:h-[56.0375rem] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-340 flex relative flex-col justify-start items-center content-center shrink-0 gap-15 max-lg:gap-10">
                <div className="w-300 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                  <div className="w-300 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                      {Tile_data10.map((d, i) => <Tile key={i} d={d} styles={Tile_styles10[i]} />)}
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                        <h2 className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[2.125rem] max-lg:font-semibold max-lg:leading-[2.3125rem] max-lg:tracking-[-1.02px] max-lg:text-center" dir="auto">
                          Everything you need to know
                        </h2>
                        <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-12.5 tracking-[-1.44px] text-center max-lg:hidden" dir="auto">
                          Everything you need
                        </p>
                        <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-5xl font-semibold leading-12.5 tracking-[-1.44px] text-center max-lg:hidden" dir="auto">
                          to know
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0">
                    <div className="w-full flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-center [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px]" dir="auto">
                        Whether you’re creating content solo or collaborating with a team,
                        <br className="inline max-lg:hidden" />
                        there’s a plan designed for your workflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contents min-w-0">
                  <div className="w-full flex relative justify-center items-start content-start shrink-0 max-lg:flex-col grid-cols-1 lg:grid-cols-2">
                    <div className="w-150 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170">
                      <div className="h-[10.65rem] block relative shrink-0 max-md:h-[14.85rem]" name="FAQ Instance">
                        <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0" name="FAQ Instance">
                          <div className="w-145 h-full flex relative p-6 rounded-xl flex-col justify-center items-start content-start shrink-0 gap-3 overflow-clip bg-surface shadow-[var(--clr-4)_0px_0px_0px_1px,var(--clr-4)_0px_16px_24px_-12px,var(--clr-4)_0px_32px_32px_-20px,var(--clr-5)_0px_40px_48px_-20px] max-md:w-[19.1875rem] md:max-lg:w-175 2xl:w-165 after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-xl">
                            <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-2.5">
                              <div className="w-120.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.0625rem] md:max-lg:w-150.5 2xl:w-140.5">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                                  What is Verseo?
                                </p>
                              </div>
                              <div className="w-10 h-10 block relative shrink-0" name="FAQ Instance 4">
                                <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm" name="FAQ Instance 4">
                                  <div className="basis-full shrink-0 block relative aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[18px_18px]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"XdkUT1tbK\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/></svg>\"), none" }} name="Plus Minus Button Small Instance" />
                                  {Logo9_data4.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles4[i]} />)}
                                </div>
                              </div>
                            </div>
                            <div className="w-133 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.1875rem] md:max-lg:w-163 2xl:w-153">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                                Verseo is an AI-powered writing assistant that helps you generate, rewrite, and improve content in seconds. From emails and social posts to product descriptions and marketing copy, it helps you create content faster with less effort.
                              </p>
                            </div>
                          </div>
                          {Logo9_data5.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles5[i]} />)}
                        </div>
                      </div>
                      <div className="w-full h-21 block relative shrink-0 max-md:h-23" name="FAQ Instance 2">
                        <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-21 max-md:after:h-23" name="FAQ Instance 2">
                          <div className="w-145 h-full flex relative py-3 px-6 rounded-xl flex-col justify-center items-start content-start shrink-0 gap-3 overflow-clip max-md:w-[19.1875rem] md:max-lg:w-175 2xl:w-165">
                            <div className="w-full h-full flex relative justify-center items-center content-center shrink-0 gap-2.5">
                              <div className="w-120.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.0625rem] md:max-lg:w-150.5 2xl:w-140.5">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                                  Who is Verseo designed for?
                                </p>
                              </div>
                              <div className="w-10 h-10 block relative shrink-0" name="FAQ Instance 2">
                                <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm" name="FAQ Instance 2">
                                  <div className="w-6 block relative shrink-0 aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[12px_12px]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FKhttcrgU\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 12 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"ypco3dpHt\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(12 6)\\\" width=\\\"1px\\\"/></svg>\"), none" }} />
                                  {Logo9_data6.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles6[i]} />)}
                                </div>
                              </div>
                            </div>
                          </div>
                          {Logo9_data7.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles7[i]} />)}
                        </div>
                      </div>
                      <div className="w-full h-21 block relative shrink-0 max-md:h-23" name="FAQ Instance 3">
                        <div className="h-full flex relative p-2.5 flex-col justify-start items-start content-start cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-21 max-md:after:h-23" name="FAQ Instance 3">
                          <div className="w-145 h-full flex relative py-3 px-6 rounded-xl flex-col justify-center items-start content-start shrink-0 gap-3 overflow-clip max-md:w-[19.1875rem] md:max-lg:w-175 2xl:w-165">
                            <div className="w-full h-full flex relative justify-center items-center content-center shrink-0 gap-2.5">
                              <div className="w-120.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[13.0625rem] md:max-lg:w-150.5 2xl:w-140.5">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-medium leading-6 tracking-[-0.4px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[1.125rem] max-lg:tracking-[-0.36px]" dir="auto">
                                  Do I need any writing experience?
                                </p>
                              </div>
                              <div className="w-10 h-10 block relative shrink-0" name="FAQ Instance 2">
                                <div className="w-10 h-10 flex relative p-0.5 rounded-sm justify-center items-center content-center gap-0.5 after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 after:rounded-tl-sm" name="FAQ Instance 2">
                                  <div className="w-6 block relative shrink-0 aspect-square bg-color-001 transform-[matrix(-1,0,0,-1,0,0)] origin-[12px_12px]" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"1px\\\" id=\\\"FKhttcrgU\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(6 12)\\\" width=\\\"12px\\\"/><path d=\\\"M 0 12 L 0 0\\\" fill=\\\"transparent\\\" height=\\\"12px\\\" id=\\\"ypco3dpHt\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"1.5\\\" stroke=\\\"var(--enlj2d, var(--token-5201ec72-d233-4bdf-a5cf-47e7da22c183, var(--muted-foreground)))\\\" transform=\\\"translate(12 6)\\\" width=\\\"1px\\\"/></svg>\"), none" }} />
                                  {Logo9_data8.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles8[i]} />)}
                                </div>
                              </div>
                            </div>
                          </div>
                          {Logo9_data9.map((d, i) => <Logo9 key={i} d={d} styles={Logo9_styles9[i]} />)}
                        </div>
                      </div>
                    </div>
                    <div className="w-150 flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-170">
                      {MediaTile4_data.map((d, i) => <MediaTile4 key={i} d={d} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-320 h-19 block fixed left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-10 min-w-0 shrink-0 order-[1001] transform-[matrix(1,0,0,1,-640,0)] max-md:w-[23.4375rem] max-lg:h-[3.9375rem] max-md:transform-[matrix(1,0,0,1,-187.5,0)] md:max-lg:w-192 md:max-lg:transform-[matrix(1,0,0,1,-384,0)] 2xl:w-480 2xl:transform-[matrix(1,0,0,1,-960,0)]" name="Navigation">
            <div className="contents">
              <nav className="w-320 flex relative justify-center items-center content-center bg-background [backdrop-filter:blur(2px)] max-md:w-[23.4375rem] max-lg:[backdrop-filter:blur(0px)] md:max-lg:w-192 2xl:w-480 after:content-[''] after:block after:absolute after:inset-0" data-component="nav" name="Navigation">
                <div className="w-full max-w-360 flex relative py-3.5 px-10 justify-center items-center content-center grow shrink-0 basis-0 max-lg:px-5 max-lg:py-0">
                  <div className="basis-0 shrink-0 flex relative justify-between items-center content-center grow max-lg:py-4.5">
                    <div className="w-[5.4625rem] flex relative justify-start items-center content-center shrink-0 gap-2.5 max-md:w-[20.9375rem] max-lg:justify-between max-lg:flex-1 max-lg:gap-[initial] md:max-lg:w-182">
                      <a className="h-[1.6875rem] flex relative justify-start items-center content-center shrink-0 gap-1.5 text-primary cursor-pointer" data-component="link" href="/">
                        <div className="w-[1.6875rem] h-[1.6875rem] block relative shrink-0" aria-hidden="true">
                          <div className="h-full block">
                            <Icon17 />
                          </div>
                        </div>
                        <div className="w-[3.4rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-color-001 [font-family:'Space_Grotesk',_'Space_Grotesk_Placeholder',_sans-serif] text-base font-bold leading-[1.1875rem] tracking-[-0.64px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            Verseo
                          </p>
                        </div>
                      </a>
                      <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:block max-lg:relative max-lg:shrink-0" name="Navigation Instance 7">
                        <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:block max-lg:relative max-lg:cursor-pointer" name="Navigation Instance 7">
                          <div className="hidden max-lg:w-4.5 max-lg:h-0.5 max-lg:block max-lg:absolute max-lg:top-[0.4375rem] max-lg:left-[0.1875rem] max-lg:rounded-4xl max-lg:shrink-0 max-lg:bg-color-001" />
                          <div className="hidden max-lg:w-4.5 max-lg:h-0.5 max-lg:block max-lg:absolute max-lg:bottom-[0.4375rem] max-lg:left-[0.1875rem] max-lg:rounded-4xl max-lg:shrink-0 max-lg:bg-color-001" />
                        </div>
                      </div>
                    </div>
                    <div className="flex relative justify-center items-center content-center shrink-0 gap-5.5 overflow-hidden max-lg:hidden">
                      {Tile3_data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
                    </div>
                    <div className="w-[9.95rem] block relative shrink-0 max-lg:hidden" name="Navigation Instance 2">
                      <a className="h-12 flex relative py-3.5 px-4 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-color-001 cursor-pointer max-lg:hidden" data-component="link" href="https://framer.link/W76dZzY" name="Navigation Instance 2">
                        <div className="w-[7.95rem] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden max-lg:hidden">
                          <div className="w-[7.95rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px] max-lg:hidden" dir="auto">
                              Get Template Free
                            </p>
                          </div>
                          <div className="w-[7.95rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px] max-lg:hidden" dir="auto">
                              Get Template Free
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-360">
                    <div className="w-px h-full block relative shrink-0 overflow-clip pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                    <div className="w-px h-full block relative shrink-0 overflow-clip pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="w-full block relative shrink-0 order-[1002]">
            <div className="contents">
              <div className="flex relative flex-col justify-center items-center content-center gap-2.5 max-lg:py-25 max-lg:px-6 max-lg:justify-start max-lg:gap-10 after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden">
                <div className="w-168 h-[19.075rem] flex absolute top-26.5 left-160 z-2 min-w-0 max-w-202 justify-center items-center content-center shrink-0 transform-[matrix(1,0,0,1,-336,0)] max-md:w-[20.4375rem] max-md:h-[25.3125rem] max-lg:relative max-lg:inset-0 max-lg:max-w-255 max-lg:items-start max-lg:content-start max-lg:order-[1] max-lg:transform-[none] md:max-lg:w-180 md:max-lg:h-[19.625rem] 2xl:left-240">
                  <div className="basis-full shrink-0 h-full flex relative z-3 flex-col justify-center items-center content-center gap-8 max-lg:flex-1">
                    <div className="w-168 flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 max-md:w-[20.4375rem] md:max-lg:w-180">
                      <div className="w-168 flex relative flex-col justify-start items-center content-center shrink-0 gap-3 max-md:w-[20.4375rem] md:max-lg:w-180">
                        <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
                          {Tile_data11.map((d, i) => <Tile key={i} d={d} styles={Tile_styles11[i]} />)}
                        </div>
                        <div className="w-168 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180">
                          <h1 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-6xl font-semibold leading-16.5 tracking-[-1.8px] text-center max-lg:text-[2.625rem] max-lg:leading-[2.875rem] max-lg:tracking-[-1.26px]" data-component="heading" dir="auto">
                            {"Start creating "}
                            <br className="inline" />
                            better content today
                          </h1>
                        </div>
                      </div>
                      <div className="w-168 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180">
                        <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.36px] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.32px] max-lg:text-center" dir="auto">
                          Turn ideas into polished content in seconds. Generate, refine, and publish faster
                          <br className="inline max-lg:hidden" />
                          with AI-powered workflows designed for modern teams.
                        </p>
                      </div>
                    </div>
                    <div className="w-[44%] flex relative justify-start items-start content-start shrink-0 gap-3 max-lg:w-full max-lg:flex-col max-lg:gap-1.5">
                      <div className="w-35.5 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180" name="Final CTA Instance">
                        <a className="h-12 flex relative py-3.5 px-4 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-color-001 cursor-pointer" data-component="link" href="/contact-us" name="Final CTA Instance">
                          <div className="w-[4.9375rem] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                            <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                              <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                Get Started
                              </p>
                            </div>
                            <div className="w-[4.9375rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                              <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                Get Started
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-35.5 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180" name="Final CTA Instance 2">
                        <a className="h-12 flex relative py-3.5 px-6.5 rounded-sm justify-center items-center content-center gap-2.5 text-primary bg-surface cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:h-12 after:rounded-tl-sm" data-component="link" href="/contact-us" name="Final CTA Instance 2">
                          <div className="w-[67.9px] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                            <div className="w-[67.9px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                Try Demo
                              </p>
                            </div>
                            <div className="w-[67.9px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px]" dir="auto">
                                Try Demo
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-320 h-[32.3125rem] flex relative inset-0 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-md:w-[23.4375rem] max-md:h-[37.8125rem] max-lg:absolute max-lg:z-1 max-lg:min-w-0 max-lg:max-w-360 max-lg:px-[0.6875rem] max-lg:right-auto max-lg:bottom-auto max-lg:[flex-direction:initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] md:max-lg:w-192 md:max-lg:h-[32.125rem] 2xl:w-480">
                  <div className="w-320 h-[32.3125rem] flex relative inset-0 z-1 opacity-70 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:absolute max-lg:-top-[0.5625rem] max-lg:left-1 max-lg:min-w-0 max-lg:right-auto max-lg:bottom-auto max-lg:opacity-[initial] 2xl:w-480">
                    <div className="w-320 h-129.5 flex absolute top-0 left-0 z-2 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:block max-lg:relative max-lg:right-0 max-lg:bottom-0 max-lg:z-[initial] max-lg:max-w-none max-lg:px-0 max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] max-lg:[pointer-events:initial] 2xl:w-360 2xl:left-60">
                      <div className="h-full block relative shrink-0 overflow-clip pointer-events-none max-lg:static max-lg:inset-auto max-lg:shrink-[initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] max-lg:[pointer-events:initial] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden">
                        <Icon18 />
                      </div>
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      <div className="w-px h-129.5 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-129.5 max-lg:after:hidden" />
                      {Logo_data2.map((d, i) => <Logo key={i} d={d} styles={Logo_styles2[i]} />)}
                    </div>
                    <div className="h-151 flex absolute top-0 inset-x-0 z-1 min-w-0 flex-col justify-between items-center content-center shrink-0 overflow-clip max-lg:hidden">
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="w-full h-px block relative shrink-0 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5 max-lg:after:hidden" />
                      <div className="h-full flex absolute top-0 inset-x-0 z-1 min-w-0 max-w-360 px-[0.225rem] flex-col justify-center items-center content-center shrink-0 overflow-hidden pointer-events-none max-lg:hidden 2xl:inset-x-60">
                        <div className="w-full h-[38.6875rem] flex relative z-1 justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-lg:hidden">
                          {Logo2_data2.map((d, i) => <Logo2 key={i} d={d} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {Logo16_data.map((d, i) => <Logo16 key={i} d={d} styles={Logo16_styles[i]} />)}
                  <div className="hidden max-md:w-[23.4375rem] max-lg:h-full max-lg:flex max-lg:absolute max-lg:top-0 max-lg:z-0 max-lg:min-w-0 max-lg:max-w-360 max-lg:px-[0.6875rem] max-lg:justify-between max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none md:max-lg:w-192">
                    <div className="hidden max-lg:w-px max-lg:h-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[37.8125rem] md:max-lg:after:h-[32.125rem] 2xl:after:hidden" />
                    <div className="hidden max-lg:w-px max-lg:h-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[37.8125rem] md:max-lg:after:h-[32.125rem] 2xl:after:hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-30 min-h-[1.8125rem] flex relative pt-30 px-10 flex-col justify-start items-center content-center shrink-0 order-[1003] gap-15 after:content-[''] after:block after:absolute after:inset-0 after:h-30 max-lg:after:hidden">
            <div className="w-320 h-30 flex absolute top-0 left-0 z-1 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] max-lg:block max-lg:relative max-lg:right-0 max-lg:bottom-0 max-lg:z-0 max-lg:order-[1004] max-lg:h-auto max-lg:max-w-none max-lg:px-0 max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:gap-[initial] md:max-lg:w-192 2xl:w-360 2xl:left-60 after:content-[''] after:block after:absolute after:inset-0 after:h-30 max-lg:after:hidden">
              <div className="w-[1.0625rem] h-[1.0625rem] flex absolute -top-[0.5625rem] left-1 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-md:w-[23.4375rem] max-md:h-[73.85rem] max-lg:relative max-lg:inset-0 max-lg:flex-col max-lg:justify-start max-lg:gap-15 max-lg:z-[initial] max-lg:shrink-[initial] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] md:max-lg:w-192 md:max-lg:h-[72.725rem] after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden">
                <div className="w-[1.0625rem] h-[1.0625rem] block relative inset-0 shrink-0 max-md:w-[23.4375rem] max-md:h-[73.85rem] max-lg:flex max-lg:absolute max-lg:z-0 max-lg:min-w-0 max-lg:max-w-360 max-lg:px-[0.6875rem] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:right-auto max-lg:bottom-auto md:max-lg:w-192 md:max-lg:h-[72.725rem]" aria-hidden="true">
                  <div className="w-[1.0625rem] block max-lg:h-[1.0625rem] max-lg:flex max-lg:absolute max-lg:-top-[0.5625rem] max-lg:left-1 max-lg:z-1 max-lg:min-w-0 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip">
                    <div className="hidden max-lg:w-[1.0625rem] max-lg:h-[1.0625rem] max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                      <div className="hidden max-lg:h-full max-lg:block">
                        <Icon18 />
                      </div>
                    </div>
                    <Icon19 />
                  </div>
                  {Logo16_data2.map((d, i) => <Logo16 key={i} d={d} styles={Logo16_styles2[i]} />)}
                  <div className="hidden max-md:w-[23.4375rem] max-lg:h-full max-lg:flex max-lg:absolute max-lg:top-0 max-lg:z-0 max-lg:min-w-0 max-lg:max-w-360 max-lg:px-[0.6875rem] max-lg:justify-between max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none md:max-lg:w-192">
                    <div className="hidden max-lg:w-px max-lg:h-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[73.85rem] md:max-lg:after:h-[72.725rem] 2xl:after:hidden" />
                    <div className="hidden max-lg:w-px max-lg:h-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[73.85rem] md:max-lg:after:h-[72.725rem] 2xl:after:hidden" />
                  </div>
                </div>
                <div className="hidden max-lg:h-full max-lg:flex max-lg:relative max-lg:max-w-340 max-lg:px-[0.6875rem] max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0">
                  <div className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-1.5 max-lg:overflow-clip">
                    <div className="hidden max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-44.5 md:max-lg:after:w-186.5 md:max-lg:after:h-40 2xl:after:hidden">
                      <div className="hidden max-lg:w-50 max-lg:h-11 max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-[0.9375rem]">
                        <div className="hidden max-lg:w-[3.0625rem] max-lg:h-[2.9375rem] max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                          <div className="hidden max-lg:block">
                            <Icon20 />
                          </div>
                        </div>
                        <div className="hidden max-lg:w-[6.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                          <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:'Space_Grotesk',_'Space_Grotesk_Placeholder',_sans-serif] max-lg:text-[1.8125rem] max-lg:font-bold max-lg:leading-[2.125rem] max-lg:tracking-[-1.14px] max-lg:text-center max-lg:uppercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            Verseo
                          </p>
                        </div>
                      </div>
                      <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                        <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.3px] max-lg:text-center max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          Verseo helps teams create, refine, and publish high-quality content faster — without complicated workflows or endless revisions.
                        </p>
                      </div>
                      {Logo6_data4.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles4[i]} />)}
                    </div>
                    <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[7.85rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                      {Logo6_data5.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles5[i]} />)}
                      <div className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-end max-lg:content-end max-lg:shrink-0 max-lg:gap-4">
                        <div className="hidden max-lg:w-[17.5625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word]">
                          <p className="hidden max-lg:block max-lg:text-muted-foreground max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:lowercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            [ Contact us through e-mail ]
                          </p>
                        </div>
                        <div className="hidden max-lg:w-[17.5625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:self-stretch max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word]">
                          <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-2xl max-lg:font-medium max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px] max-lg:text-center" dir="auto">
                            <a className="hidden max-lg:inline max-lg:cursor-pointer" href="mailto:verseo@gmail.com" target="_blank">
                              verseo@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden max-lg:w-full max-lg:h-[46.075rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-clip">
                    <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[11.425rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                      {Logo6_data6.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles6[i]} />)}
                      <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                        <p className="hidden max-lg:block max-lg:text-muted-foreground max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:lowercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          [ Newsletter ]
                        </p>
                      </div>
                      <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                        <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-xl max-lg:font-medium max-lg:leading-6 max-lg:tracking-[-0.2px] max-lg:text-center max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                          Stay connected
                        </p>
                      </div>
                      <form className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:overflow-hidden">
                        <label className="hidden max-md:w-51.5 max-lg:flex max-lg:relative max-lg:py-3.5 max-lg:px-4 max-lg:rounded-[5px] max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:gap-2.5 max-lg:bg-surface max-lg:cursor-default md:max-lg:w-[37.4375rem] after:content-[''] after:block after:absolute after:inset-0 after:w-51.5 after:h-11.5 after:rounded-tl-[5px] md:max-lg:after:w-[37.4375rem] 2xl:after:hidden">
                          <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:items-center max-lg:shrink-0 max-lg:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-43.5 after:h-4.5 md:max-lg:after:w-[35.4375rem] 2xl:after:hidden">
                            <input className="hidden max-lg:w-full max-lg:h-4.5 max-lg:block max-lg:min-w-0 max-lg:flex-1 max-lg:overflow-clip max-lg:text-color-001 max-lg:[font-family:Inter] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:whitespace-nowrap max-lg:text-nowrap max-lg:cursor-text" data-ditto-id="style-input" name="Email" placeholder="jane@framer.com" type="email" value="" />
                          </div>
                        </label>
                        <div className="hidden max-lg:block max-lg:relative max-lg:shrink-0" name="Footer Instance 7">
                          <button className="hidden max-lg:w-27.5 max-lg:h-11.5 max-lg:flex max-lg:relative max-lg:py-3.5 max-lg:px-4 max-lg:rounded-sm max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:text-center max-lg:bg-color-001 max-lg:cursor-pointer" name="Footer Instance 7" type="submit">
                            <div className="hidden max-lg:w-[29.5px] max-lg:h-5 max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-hidden">
                              <div className="hidden max-lg:w-[29.5px] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                                <p className="hidden max-lg:block max-lg:text-surface max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.15px] max-lg:text-start" dir="auto">
                                  Join
                                </p>
                              </div>
                              <div className="hidden max-lg:w-[29.5px] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                                <p className="hidden max-lg:block max-lg:text-surface max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:tracking-[-0.15px] max-lg:text-start" dir="auto">
                                  Join
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-clip">
                      <div className="hidden max-md:w-[22.0625rem] max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip md:max-lg:w-186.5 after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[10.925rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                        {Logo6_data7.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles7[i]} />)}
                        <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                          <p className="hidden max-lg:block max-lg:text-muted-foreground max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:lowercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            [ resources ]
                          </p>
                        </div>
                        <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-3">
                          {Tile4_data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                        </div>
                      </div>
                      <div className="hidden max-md:w-[22.0625rem] max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip md:max-lg:w-186.5 after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[12.8rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                        {Logo6_data8.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles8[i]} />)}
                        <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                          <p className="hidden max-lg:block max-lg:text-muted-foreground max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:lowercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            [ Navigation ]
                          </p>
                        </div>
                        <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-3">
                          {Tile4_data2.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles2[i]} />)}
                        </div>
                      </div>
                      <div className="hidden max-md:w-[22.0625rem] max-lg:flex max-lg:relative max-lg:py-8 max-lg:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-4 max-lg:overflow-clip md:max-lg:w-186.5 after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[10.925rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                        {Logo6_data9.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles9[i]} />)}
                        <div className="hidden max-md:w-[20.0625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-178.5">
                          <p className="hidden max-lg:block max-lg:text-muted-foreground max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:lowercase max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            [ Social ]
                          </p>
                        </div>
                        <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-3">
                          {Tile5_data.map((d, i) => <Tile5 key={i} d={d} styles={Tile5_styles[i]} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:overflow-clip">
                    <div className="hidden max-lg:basis-0 max-lg:shrink-0 max-lg:flex max-lg:relative max-lg:py-4.5 max-lg:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:grow max-lg:gap-4 max-lg:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[22.0625rem] after:h-[8.425rem] md:max-lg:after:w-186.5 2xl:after:hidden">
                      {Logo6_data10.map((d, i) => <Logo6 key={i} d={d} styles={Logo6_styles10[i]} />)}
                      <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-5 max-lg:overflow-clip">
                        <div className="hidden max-lg:w-[14.775rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-center max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                          <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.0625rem] max-lg:tracking-[-0.14px] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                            © 2026 Verseo | All Rights Reserved
                          </p>
                        </div>
                        <div className="hidden max-lg:w-[6.625rem] max-lg:h-[1.1875rem] max-lg:block max-lg:relative max-lg:shrink-0" name="Footer Instance 8">
                          <a className="hidden max-lg:h-full max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2 max-lg:overflow-hidden max-lg:text-primary max-lg:cursor-pointer" href="https://framer.link/yulia95" name="Footer Instance 8" target="_blank">
                            <div className="hidden max-lg:w-[0.5625rem] max-lg:h-3.5 max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                              <div className="hidden max-lg:h-full max-lg:block">
                                <Icon21 />
                              </div>
                            </div>
                            <div className="hidden max-lg:w-[5.5625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-1">
                              <div className="hidden max-lg:w-[5.5625rem] max-lg:h-full max-lg:flex max-lg:absolute max-lg:-top-4.5 max-lg:left-[44.5px] max-lg:z-1 max-lg:min-w-0 max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap max-lg:transform-[matrix(1,0,0,1,-44.4688,0)]">
                                <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.25rem] max-lg:tracking-[-0.42px] max-lg:text-center" dir="auto">
                                  Built in Framer
                                </p>
                              </div>
                              <div className="hidden max-lg:w-[5.5625rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                                <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.25rem] max-lg:tracking-[-0.42px] max-lg:text-center" dir="auto">
                                  Built in Framer
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="hidden max-lg:w-[154.3px] max-lg:block max-lg:relative max-lg:shrink-0" name="Footer Instance 9">
                        <a className="hidden max-lg:h-[1.6875rem] max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-1.5 max-lg:overflow-hidden max-lg:text-primary max-lg:cursor-pointer" href="https://tvorbadesign.com/" name="Footer Instance 9" target="_blank">
                          <div className="hidden max-lg:w-[68.5px] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                            <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-sm max-lg:leading-[1.25rem] max-lg:tracking-[-0.42px] max-lg:text-center" dir="auto">
                              Created by
                            </p>
                          </div>
                          <div className="hidden max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-1">
                            <div className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:block max-lg:relative max-lg:rounded-[100%] max-lg:gap-1 max-lg:aspect-square">
                              <div className="hidden max-lg:w-[1.6875rem] max-lg:h-full max-lg:flex max-lg:absolute max-lg:top-0 max-lg:z-1 max-lg:rounded-[100%] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-1 max-lg:aspect-square">
                                <div className="hidden max-lg:w-4.5 max-lg:h-4.5 max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                                  <div className="hidden max-lg:h-full max-lg:block">
                                    <Icon22 />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hidden max-lg:w-7 max-lg:h-7 max-lg:flex max-lg:absolute max-lg:top-7 max-lg:z-1 max-lg:min-w-0 max-lg:rounded-[100%] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-1 max-lg:aspect-square max-lg:bg-clr-14 max-lg:transform-[matrix(0.5,0,0,0.5,0,0)] max-lg:origin-[14px_14px]">
                              <div className="hidden max-lg:w-3.5 max-lg:h-3.5 max-lg:block max-lg:relative max-lg:shrink-0" aria-hidden="true">
                                <div className="hidden max-lg:h-full max-lg:block">
                                  <Icon23 />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden max-lg:w-[2.925rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                            <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-[0.9375rem] max-lg:leading-[1.4375rem] max-lg:tracking-[-0.45px] max-lg:text-center" dir="auto">
                              Tvorba
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden max-md:h-[92.6rem] max-lg:block max-lg:absolute max-lg:-top-75 max-lg:inset-x-0 max-lg:-z-1 max-lg:min-w-0 max-lg:shrink-0 max-lg:overflow-clip max-lg:pointer-events-none md:max-lg:h-[91.475rem]" data-ditto-id="style-div-8" />
              </div>
              {Logo17_data.map((d, i) => <Logo17 key={i} d={d} styles={Logo17_styles[i]} />)}
              <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-lg:hidden 2xl:w-360">
                <div className="w-px h-30 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-30 max-lg:after:hidden" />
                <div className="w-px h-30 block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-30 max-lg:after:hidden" />
              </div>
            </div>
          </div>
          <div className="contents min-w-0 max-lg:hidden">
            <div className="w-full block relative z-0 shrink-0 order-[1004] max-lg:hidden">
              <div className="contents max-lg:hidden">
                <div className="flex relative flex-col justify-start items-center content-center gap-15 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-[28.1rem] max-lg:after:hidden">
                  <div className="h-full flex absolute top-0 inset-x-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-center items-center content-center shrink-0 gap-2.5 max-lg:hidden 2xl:inset-x-60">
                    {Logo17_data2.map((d, i) => <Logo17 key={i} d={d} styles={Logo17_styles2[i]} />)}
                    <div className="w-320 h-full flex absolute top-0 z-0 min-w-0 max-w-360 px-[0.6875rem] justify-between items-center content-center shrink-0 overflow-clip pointer-events-none max-lg:hidden 2xl:w-360">
                      <div className="w-px h-[28.1rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[28.1rem] max-lg:after:hidden" />
                      <div className="w-px h-[28.1rem] block relative shrink-0 overflow-clip pointer-events-none max-lg:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:-right-px after:left-0 after:w-0.5 after:h-[28.1rem] max-lg:after:hidden" />
                    </div>
                  </div>
                  <div className="w-320 flex relative max-w-340 px-[0.6875rem] flex-col justify-start items-center content-center shrink-0 max-lg:hidden 2xl:w-340">
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip max-lg:hidden grid-cols-2">
                      <div className="w-[55.0375rem] flex relative p-8 flex-col justify-center items-start content-start shrink-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[58.5375rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[11.35rem] max-lg:after:hidden">
                        <div className="w-50 h-11 flex relative justify-start items-center content-center shrink-0 gap-[0.9375rem] max-lg:hidden">
                          <div className="w-[3.0625rem] h-[2.9375rem] block relative shrink-0 max-lg:hidden" aria-hidden="true">
                            <div className="block max-lg:hidden">
                              <Illustration />
                            </div>
                          </div>
                          <div className="w-[6.0625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-color-001 [font-family:'Space_Grotesk',_'Space_Grotesk_Placeholder',_sans-serif] text-[1.8125rem] font-bold leading-[2.125rem] tracking-[-1.14px] text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              Verseo
                            </p>
                          </div>
                        </div>
                        <div className="w-[22.4375rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] tracking-[-0.32px] text-left [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                            Verseo helps teams create, refine, and publish high-quality content faster — without complicated workflows or endless revisions.
                          </p>
                        </div>
                        {Logo12_data18.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles18[i]} />)}
                        <div className="w-45 h-[10.4375rem] block absolute right-0 bottom-0 z-1 min-w-0 shrink-0 overflow-hidden pointer-events-none max-lg:hidden">
                          <div className="w-43 h-50 flex absolute right-0 bottom-0 opacity-20 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] pointer-events-none max-lg:hidden">
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"content_request: "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"> Create a high-converting landing page "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {" "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"processing… "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"→ analyzing audience "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"→ structuring content "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"→ optimizing messaging "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {" "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"output: "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"+ compelling headline "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"+ clear value proposition "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {"+ conversion-focused copy "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              {" "}
                            </p>
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase pointer-events-none max-lg:hidden" dir="auto">
                              status: ready to publish ✓
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[23.5875rem] flex relative p-8 flex-col justify-start items-end content-end self-stretch grow shrink-0 basis-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[25.0875rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[11.35rem] max-lg:after:hidden">
                        {Logo12_data19.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles19[i]} />)}
                        <div className="flex relative flex-col justify-start items-end content-end shrink-0 gap-5 max-lg:hidden">
                          <div className="w-[17.5625rem] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              [ Contact us through e-mail ]
                            </p>
                          </div>
                          <div className="w-[15.8125rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.28px] text-right max-lg:hidden" dir="auto">
                              <a className="inline cursor-pointer max-lg:hidden hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)]" data-component="link" href="mailto:verseo@gmail.com" target="_blank">
                                verseo@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[12.8125rem] flex relative justify-center items-center content-center shrink-0 overflow-clip max-lg:hidden grid-cols-2">
                      <div className="w-[39.3125rem] h-full flex relative p-8 flex-col justify-start items-start content-start shrink-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[41.8125rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[12.8125rem] max-lg:after:hidden">
                        {Logo12_data20.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles20[i]} />)}
                        <div className="w-76 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                          <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] lowercase max-lg:hidden" dir="auto">
                            [ Newsletter ]
                          </p>
                        </div>
                        <div className="w-76 flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden">
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.8125rem] tracking-[-0.24px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                            Stay connected
                          </p>
                        </div>
                        <form className="flex relative justify-start items-start content-start shrink-0 gap-[0.3125rem] overflow-hidden max-lg:hidden">
                          <label className="w-75 flex relative py-3.5 px-4 rounded-[5px] flex-col justify-start items-start content-start shrink-0 gap-2.5 bg-surface cursor-default max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-75 after:h-11.5 after:rounded-tl-[5px] max-lg:after:hidden">
                            <div className="w-full flex relative items-center shrink-0 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-67 after:h-4.5 max-lg:after:hidden">
                              <input className="w-full h-4.5 block min-w-0 flex-1 overflow-clip text-color-001 [font-family:Inter] text-[0.9375rem] leading-4.5 whitespace-nowrap text-nowrap cursor-text max-lg:hidden" data-ditto-id="style-input-2" data-component="input" name="Email" placeholder="jane@framer.com" type="email" value="" />
                            </div>
                          </label>
                          <div className="block relative shrink-0 max-lg:hidden" name="Footer Instance">
                            <button className="w-27.5 h-11.5 flex relative py-3.5 px-4 rounded-sm justify-center items-center content-center gap-2.5 text-center bg-color-001 cursor-pointer max-lg:hidden" data-component="button" name="Footer Instance" type="submit">
                              <div className="w-[29.5px] h-5 flex relative flex-col justify-start items-center content-center shrink-0 overflow-hidden max-lg:hidden">
                                <div className="w-[29.5px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                  <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px] text-start max-lg:hidden" dir="auto">
                                    Join
                                  </p>
                                </div>
                                <div className="w-[29.5px] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                  <p className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5 tracking-[-0.15px] text-start max-lg:hidden" dir="auto">
                                    Join
                                  </p>
                                </div>
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="w-1/2 flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:hidden">
                        <div className="w-[209.7px] flex relative p-8 flex-col justify-start items-start content-start self-stretch grow shrink-0 basis-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[13.9375rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[12.8rem] max-lg:after:hidden">
                          {Logo12_data21.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles21[i]} />)}
                          <div className="w-[145.7px] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[9.9375rem]">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              [ resources ]
                            </p>
                          </div>
                          <div className="w-full flex relative flex-col justify-center items-end content-end shrink-0 gap-3 max-lg:hidden">
                            {Tile3_data2.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles2[i]} />)}
                          </div>
                        </div>
                        <div className="w-[209.7px] flex relative p-8 flex-col justify-start items-start content-start self-stretch grow shrink-0 basis-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[13.9375rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[12.8rem] max-lg:after:hidden">
                          {Logo12_data22.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles22[i]} />)}
                          <div className="w-[145.7px] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[9.9375rem]">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              [ Navigation ]
                            </p>
                          </div>
                          <div className="w-full flex relative flex-col justify-center items-end content-end shrink-0 gap-3 max-lg:hidden">
                            {Tile3_data3.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles3[i]} />)}
                          </div>
                        </div>
                        <div className="w-[209.7px] flex relative p-8 flex-col justify-start items-start content-start self-stretch grow shrink-0 basis-0 gap-4 overflow-clip max-lg:hidden 2xl:w-[13.9375rem] after:content-[''] after:block after:absolute after:inset-0 after:h-[12.8rem] max-lg:after:hidden">
                          {Logo12_data23.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles23[i]} />)}
                          <div className="w-[145.7px] flex relative flex-col justify-center shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden 2xl:w-[9.9375rem]">
                            <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.28px] text-right lowercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              [ Social ]
                            </p>
                          </div>
                          <div className="w-full flex relative flex-col justify-center items-end content-end shrink-0 gap-3 max-lg:hidden">
                            {Tile6_data.map((d, i) => <Tile6 key={i} d={d} styles={Tile6_styles[i]} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex relative justify-center items-center content-center shrink-0 overflow-clip max-lg:hidden">
                      <div className="basis-0 shrink-0 flex relative py-4.5 px-8 justify-start items-center content-center grow gap-4 overflow-clip max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-[3.9375rem] max-lg:after:hidden">
                        {Logo12_data24.map((d, i) => <Logo12 key={i} d={d} styles={Logo12_styles24[i]} />)}
                        <div className="w-[1023.7px] flex relative justify-start items-center content-center grow shrink-0 basis-0 gap-5 overflow-clip max-lg:hidden 2xl:w-[1103.7px]">
                          <div className="w-[14.775rem] flex relative flex-col justify-center shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.0625rem] tracking-[-0.14px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" dir="auto">
                              © 2026 Verseo | All Rights Reserved
                            </p>
                          </div>
                          <div className="w-[6.625rem] h-[1.1875rem] block relative shrink-0 max-lg:hidden" name="Footer Instance 2">
                            <a className="h-full flex relative justify-start items-center content-center gap-2 overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="https://framer.link/yulia95" name="Footer Instance 2" target="_blank">
                              <div className="w-[0.5625rem] h-3.5 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                                <div className="h-full block max-lg:hidden">
                                  <Icon24 />
                                </div>
                              </div>
                              <div className="w-[5.5625rem] flex relative flex-col justify-start items-start content-start shrink-0 gap-1 max-lg:hidden">
                                <div className="w-[5.5625rem] h-full flex absolute -top-4.5 left-[44.5px] z-1 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,-44.4688,0)] max-lg:hidden">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.25rem] tracking-[-0.42px] text-center max-lg:hidden" dir="auto">
                                    Built in Framer
                                  </p>
                                </div>
                                <div className="w-[5.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.25rem] tracking-[-0.42px] text-center max-lg:hidden" dir="auto">
                                    Built in Framer
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="w-[154.3px] block relative shrink-0 max-lg:hidden" name="Footer Instance 3">
                          <a className="h-[1.6875rem] flex relative justify-start items-center content-center gap-1.5 overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="https://tvorbadesign.com/" name="Footer Instance 3" target="_blank">
                            <div className="w-[68.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm leading-[1.25rem] tracking-[-0.42px] text-center max-lg:hidden" dir="auto">
                                Created by
                              </p>
                            </div>
                            <div className="flex relative justify-center items-center content-center shrink-0 gap-1 max-lg:hidden">
                              <div className="basis-full shrink-0 block relative rounded-[100%] gap-1 aspect-square max-lg:hidden">
                                <div className="w-[1.6875rem] h-full flex absolute top-0 z-1 rounded-[100%] justify-center items-center content-center shrink-0 gap-1 aspect-square max-lg:hidden">
                                  <div className="w-4.5 h-4.5 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                                    <div className="h-full block max-lg:hidden">
                                      <Icon25 />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-7 h-7 flex absolute top-7 z-1 min-w-0 rounded-[100%] justify-center items-center content-center shrink-0 gap-1 aspect-square bg-clr-14 transform-[matrix(0.5,0,0,0.5,0,0)] origin-[14px_14px] max-lg:hidden">
                                <div className="w-3.5 h-3.5 block relative shrink-0 max-lg:hidden" aria-hidden="true">
                                  <div className="h-full block max-lg:hidden">
                                    <Icon26 />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[2.925rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.4375rem] tracking-[-0.45px] text-center max-lg:hidden" dir="auto">
                                Tvorba
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-255 block absolute bottom-0 inset-x-0 -z-1 min-w-0 shrink-0 overflow-clip pointer-events-none max-lg:hidden" style={{ backgroundImage: "linear-gradient(var(--background) 0%, var(--clr-15) 74%, var(--clr-16) 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block" id="template-overlay" />
      </div>
      {" "}
      <div className="w-0 h-0 block absolute top-200 left-0 z-0 overflow-hidden" aria-hidden="true" id="svg-templates">
        <Icon27 />
        {" "}
        <Icon28 />
        {" "}
        <Icon29 />
        {" "}
        <Icon30 />
        {" "}
        <Icon31 />
        {" "}
        <Icon32 />
        {" "}
        <Icon33 />
        {" "}
        <Icon34 />
        {" "}
        <Icon35 />
        {" "}
        <Icon36 />
        {" "}
        <Icon37 />
        {" "}
        <Icon38 />
        {" "}
        <Icon39 />
        {" "}
        <Icon40 />
        {" "}
        <Icon41 />
        {" "}
        <Icon42 />
        {" "}
        <Illustration2 />
        {" "}
        <Icon43 />
        {" "}
        <Icon44 />
        {" "}
        <Icon45 />
        {" "}
        <Icon46 />
        <Icon47 />
        <Icon48 />
        <Icon49 />
        <Icon50 />
        <Icon51 />
        <Icon52 />
        <Icon53 />
        <Icon54 />
        <Icon55 />
        <Icon56 />
        <Icon57 />
        <Icon58 />
        <Icon59 />
      </div>
      {" "}
      <DittoMotion spec={{"waapi":[{"anchor":"motion-div","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.008333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.016666666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.025},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.03333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.041666666666666664},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.05},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.058333333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.06666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.075},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.08333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.09166666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.1},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.10833333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.11666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.125},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.13333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.14166666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.15},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.15833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.16666666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.175},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.18333333333333332},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.19166666666666668},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.2},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.20833333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.21666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.225},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.23333333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.24166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.25},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.25833333333333336},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.26666666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.275},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.2833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.2916666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.3},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.30833333333333335},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.31666666666666665},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.325},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.3333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.3416666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.35},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.35833333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.36666666666666664},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.375},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.38333333333333336},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.39166666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.4},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.4083333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.4166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.425},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.43333333333333335},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.44166666666666665},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.45},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.4583333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.4666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.475},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.48333333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.49166666666666664},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5083333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.525},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5416666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.55},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5583333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.575},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5833333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.5916666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6083333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.625},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6416666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.65},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6583333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6666666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.675},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.6916666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7083333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.725},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7416666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.75},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7583333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.775},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.7916666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8083333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8166666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.825},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8333333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8416666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.85},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8583333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.875},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.8916666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9083333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9166666666666666},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.925},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9333333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9416666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.95},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9583333333333334},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9666666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.975},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9833333333333333},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":0.9916666666666667},{"offset":null,"easing":"linear","composite":"auto","transform":"none","computedOffset":1}],"duration":1200,"delay":0,"easing":"linear","iterations":1,"direction":"normal","fill":"both"},{"anchor":"motion-ul","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(0px)","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(-1400px)","computedOffset":1}],"duration":70000,"delay":0,"easing":"linear","iterations":-1,"direction":"normal","fill":"auto"},{"anchor":"motion-ul-2","keyframes":[{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(0px)","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","transform":"translateX(-1680px)","computedOffset":1}],"duration":84000,"delay":0,"easing":"linear","iterations":-1,"direction":"normal","fill":"auto"}],"rotators":[],"reveals":[{"anchor":"motion-ul-3","opacity":"0.5","transform":"translateX(-690px)","transition":"opacity 0.6s ease, transform 0.6s ease"}],"marquees":[{"anchor":"motion-ul","pxPerSec":-22,"periodPx":1730},{"anchor":"motion-ul-2","pxPerSec":-22,"periodPx":1660}]}} />
    </>
  );
}
