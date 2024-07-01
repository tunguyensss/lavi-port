import { Children } from "react";

interface EachProps<T> {
  of?: T[];
  renderer: (props: T, index: number) => React.ReactNode;
}
export default function Each<T>({ of = [], renderer }: EachProps<T>) {
  return Children.toArray(of.map((item, index) => renderer(item, index)));
}
