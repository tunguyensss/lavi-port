import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { IWork } from "../../../../data/work";
import classes from "./works.module.css";
import { useSearchParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface WorkItemProps extends IWork {}
export default function WorkItem({
  name,
  slug,
  id,
  roles,
  src,
}: WorkItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [_, setSearchParams] = useSearchParams();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(
    () => {
      const wrapperContent = `#${slug}-wrapper-content`;
      const imgContent = `#${slug}-img`;
      gsap.timeline({
        defaults: { ease: "power1.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
          onUpdate: ({ progress }) => {
            if (progress > 0.3 && progress < 0.7) {
              gsap.to(wrapperContent, { scale: 1 });
              gsap.to(imgContent, { scale: 1, overwrite: true });
            } else if (progress <= 0.3) {
              const scaleNumber = (7 / 3) * progress + 3 / 10;
              const imgScaleNumber = -1.7 * progress + 2;
              gsap.to(wrapperContent, { scale: scaleNumber, overwrite: true });
              gsap.to(imgContent, { scale: imgScaleNumber, overwrite: true });
            } else {
              const scaleNumber = (-7 / 3) * progress + 79 / 30;
              const imgScaleNumber = (10 / 3) * progress - 7 / 10;
              gsap.to(wrapperContent, { scale: scaleNumber, overwrite: true });
              gsap.to(imgContent, { scale: imgScaleNumber, overwrite: true });
            }

            // if (progress < 0.1) {
            //   gsap.to(wrapperContent, { scale: 0, overwrite: true });
            // } else if (progress >= 0.1 && progress <= 0.3) {
            //   gsap.to(wrapperContent, {
            //     scale: (progress - 0.1) * 5,
            //     overwrite: true,
            //   });
            // } else if (progress > 0.3 && progress <= 0.6) {
            //   gsap.to(wrapperContent, { scale: 1, overwrite: true });
            // } else if (progress > 0.6) {
            //   gsap.to(wrapperContent, {
            //     scale: 1 - (progress - 0.6) * 2.5,
            //     overwrite: true,
            //   });
            // }
          },
        },
      });
    },
    { scope: ref.current! }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowCursor(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowCursor(false);
  };

  const imgWrapperRect = imgWrapperRef.current?.getBoundingClientRect();
  const topPosition = cursorPosition.y - (imgWrapperRect?.top || 0);

  return (
    <div
      ref={ref}
      className={classes.work_item}
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10svh",
      }}
      id={slug}
    >
      <div
        id={`${slug}-wrapper-content`}
        style={{
          width: "50%",
          height: "60svh",
          //   backgroundColor: "white",
          scale: 0,
          padding: 24,
          cursor: "pointer",
          position: "relative",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          style={{
            position: "absolute",
            top: topPosition,
            right: "100%",
            zIndex: 10,
            opacity: showCursor ? 1 : 0,
            transform: `translate(${topPosition * -1})`,
            transition: "opacity 0.3s ease-in-out",
            fontSize: 48,
            textAlign: "right",
          }}
        >
          {name}
        </p>
        <p
          style={{
            position: "absolute",
            top: topPosition,
            left: "100%",
            zIndex: 10,
            opacity: showCursor ? 1 : 0,
            transform: `translate(${topPosition * -1})`,
            transition: "opacity 0.3s ease-in-out",
            fontSize: 14,
            textTransform: "uppercase",
            color: `var(--color-cinder-50)`,
          }}
        >
          {roles.join(",")}
        </p>
        <div
          onClick={() => setSearchParams({ slug })}
          ref={imgWrapperRef}
          style={{
            backgroundColor: "lightgray",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            id={`${slug}-img`}
            src={src}
            loading="lazy"
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              scale: 2,
              objectPosition: "center center",
            }}
          />
        </div>
        {/* <div
          ref={cursorRef}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 10,
            top: cursorPosition.y - (imgWrapperRect?.top || 0) + 10,
            left: cursorPosition.x - (imgWrapperRect?.left || 0) + 10,
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        /> */}
      </div>
    </div>
  );
}
