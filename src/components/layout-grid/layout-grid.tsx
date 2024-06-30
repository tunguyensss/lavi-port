import { CSSProperties } from "react";
import classes from "./layout-grid.module.css";
import clsx from "clsx";

interface LayoutGridProps {
  children?: React.ReactNode;
  rows?: number;
  cols?: number;
  style?: CSSProperties;
  className?: string;
}
export default function LayoutGrid({
  children,
  cols = 10,
  rows = 10,
  style,
  className = "",
}: LayoutGridProps) {
  const layoutGridStyle = {
    "--cols": cols,
    "--rows": rows,
    ...style,
  } as CSSProperties;

  return (
    <div
      className={clsx(className, classes.layout_grid)}
      style={layoutGridStyle}
    >
      {children}
    </div>
  );
}
