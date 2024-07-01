import { useRef } from "react";
import AnimateLink from "../../components/animate-link";
import LayoutGrid from "../../components/layout-grid";
import classes from "./contact.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ContactPageProps {}
export default function ContactPage(props: ContactPageProps) {
  const currentYear = new Date().getFullYear();

  const textLetGetRef = useRef<HTMLHeadingElement>(null);
  const inTouchGetRef = useRef<HTMLHeadingElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // heading animation
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(
      textLetGetRef.current,
      { scaleY: 0, y: 0 },
      { scaleY: 1, duration: 3, y: 1 }
    );
  });

  return (
    <div className={classes.page_contact}>
      <LayoutGrid cols={10} rows={10} className={classes.layout_grid}>
        <h1 className={classes.text_let_get} ref={textLetGetRef}>
          let's get
        </h1>
        <h1 className={classes.text_in_touch}>
          in t<span className={classes.text_o}>o</span>
          <span className={classes.text_u}>u</span>ch
        </h1>
        <div className={classes.send_a_message}>
          <p style={{ marginBottom: 24 }}>Send me a message via</p>
          <AnimateLink
            href="mailto:hello@lavidesign.studio"
            className={classes.mailto}
          >
            hello@lavidesign.studio
          </AnimateLink>
        </div>

        <div className={classes.box} />

        <p className={classes.text_social}>Social</p>

        <ul className={classes.list_social}>
          <li className={classes.item_social}>
            <AnimateLink>Instagram</AnimateLink>
          </li>
          <li className={classes.item_social}>
            <AnimateLink>Behance</AnimateLink>
          </li>
          <li className={classes.item_social}>
            <AnimateLink>Dribble</AnimateLink>
          </li>
          <li className={classes.item_social}>
            <AnimateLink>Facebook</AnimateLink>
          </li>
        </ul>

        <div className={classes.text_full_year}>
          <span>&copy;</span>
          <span>{currentYear}</span>
        </div>
      </LayoutGrid>
    </div>
  );
}
