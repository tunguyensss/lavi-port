"use client";
import { UIEvent } from "react";
import Each from "../../../../components/each";
import { works } from "../../../../data/work";
import classes from "./works.module.css";
import ReactLenis, { useLenis } from "lenis/react";
import WorkItem from "./work-item";

interface WorksProps {}
export default function Works(props: WorksProps) {
  const handleScroll = (e: UIEvent<HTMLDivElement, UIEvent>) => {
    console.log(e);
  };

  return (
    <ReactLenis root>
      <div
        className={classes.works}
        onScroll={(e) => {
          console.log(e);
        }}
      >
        <Each of={works} renderer={(work, index) => <WorkItem {...work} />} />
      </div>
    </ReactLenis>
  );
}
