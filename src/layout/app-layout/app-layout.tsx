import { useOutlet } from "react-router-dom";
import AnimateLink from "../../components/animate-link";
import AppearTitle from "../../components/appear-title";
import LayoutGrid from "../../components/layout-grid";
import classes from "./app-layout.module.css";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  const outlet = useOutlet();
  return (
    <main>
      <LayoutGrid
        rows={3}
        cols={3}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      >
        <nav className={classes.nav}>
          <AnimateLink href="/">
            <AppearTitle>Work</AppearTitle>
          </AnimateLink>
          <AnimateLink href="about">
            <AppearTitle>About</AppearTitle>
          </AnimateLink>
          <AnimateLink href="contact">
            <AppearTitle>Contact</AppearTitle>
          </AnimateLink>
        </nav>
      </LayoutGrid>
      {outlet}
      <div id="base-transition" className={classes.app_layout}></div>
    </main>
  );
}
