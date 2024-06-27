import { useOutlet } from "react-router-dom";
import classes from "./app-layout.module.css";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  const outlet = useOutlet();
  return (
    <>
      {outlet}
      <div id="base-transition" className={classes.app_layout}></div>
    </>
  );
}
