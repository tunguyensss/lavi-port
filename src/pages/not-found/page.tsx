import { useScramble } from "use-scramble";
import LayoutGrid from "../../components/layout-grid";
import classes from "./not-found.module.css";

interface NotFoundProps {}
export default function NotFound(props: NotFoundProps) {
  const { ref: h1Ref, replay } = useScramble({
    text: "404",
    speed: 0.8,
    tick: 4,
    scramble: 2,
    range: [33, 47],
  });

  const { ref: textRef } = useScramble({
    text: "You've ventured too far into the canvas! There's nothing here but potential. Let's go back and see the completed works.",
  });

  return (
    <div className={classes.not_found_page}>
      <div className={classes.text_404}>
        <h1 ref={h1Ref}>404</h1>
      </div>

      <LayoutGrid cols={10} rows={10} className={classes.layout_grid}>
        <p className={classes.text_info} ref={textRef} />
      </LayoutGrid>
    </div>
  );
}
