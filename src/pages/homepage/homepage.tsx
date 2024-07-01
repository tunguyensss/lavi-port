import Works from "./_components/works";
import classes from "./homepage.module.css";

interface HomepageProps {}
export default function Homepage(props: HomepageProps) {
  return (
    <div className={classes.homepage_container}>
      <Works />
    </div>
  );
}
