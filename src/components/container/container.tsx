import classes from "./container.module.css";

interface ContainerProps {
  children?: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <div className={classes.container}>{children}</div>;
}
