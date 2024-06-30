"use client";

import clsx from "clsx";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./animate-link.module.css";

interface AnimateLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
export default function AnimateLink({ className, ...props }: AnimateLinkProps) {
  return <a className={clsx(className, classes.animate_link)} {...props} />;
}
