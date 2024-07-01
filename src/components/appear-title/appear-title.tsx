import { useMediaQuery, useRect } from "@darkroom.engineering/hamo";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { useIntersection, useWindowSize } from "react-use";
import SplitType from "split-type";
import classes from "./appear-title.module.css";

interface AppearTitleProps {
  children: React.ReactNode;
  visible?: boolean;
}
export default function AppearTitle({
  children,
  visible = true,
}: AppearTitleProps) {
  const el = useRef<HTMLSpanElement | null>(null);

  const [intersected, setIntersected] = useState(false);
  const intersection = useIntersection(el, { threshold: 1 });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIntersected(true);
    }
  }, [intersection?.isIntersecting]);

  const isMobile = useMediaQuery("(max-width: 800px)");
  const [rectRef, rect] = useRect();
  const { width } = useWindowSize();

  useEffect(() => {
    if (!isMobile && el.current) {
      const splittedText = new SplitType(el.current, {
        lineClass: classes.line,
        charClass: classes.char,
      });

      splittedText.lines?.forEach((line, i) => {
        line.style.setProperty("--i", `${i}`);
        const html = line.innerHTML;
        line.innerHTML = "";
        const content = document.createElement("span");
        content.innerHTML = html;
        line.appendChild(content);
      });

      return () => {
        splittedText.revert();
      };
    }
  }, [isMobile, width, rect]);

  return (
    <span
      ref={(node) => {
        el.current = node;
        rectRef(node);
      }}
      className={clsx(classes.title, visible && intersected && classes.visible)}
    >
      {children}
    </span>
  );
}
