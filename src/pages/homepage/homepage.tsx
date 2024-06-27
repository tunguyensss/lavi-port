import { ReactLenis } from "lenis/react";
import AppearTitle from "../../components/appear-title";

interface HomepageProps {}
export default function Homepage(props: HomepageProps) {
  return (
    <div id="homepage_wrapper">
      <ReactLenis root>
        <div style={{ width: "100%", height: "100vh" }}>
          <AppearTitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nisi
            magni vitae!
          </AppearTitle>
        </div>
        <div style={{ width: "100%", height: "100vh" }}>
          <AppearTitle>Lorem, ipsum dolor.</AppearTitle>
        </div>
        <div style={{ width: "100%", height: "100vh" }}>
          <AppearTitle>Lorem ipsum dolor sit amet consectetur.</AppearTitle>
        </div>
      </ReactLenis>
    </div>
  );
}
