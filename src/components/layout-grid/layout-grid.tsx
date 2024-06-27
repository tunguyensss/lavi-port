interface LayoutGridProps {
  children?: React.ReactNode;
}
export default function LayoutGrid({ children }: LayoutGridProps) {
  return (
    <div className="" style={{ "--cols": 10 }}>
      LayoutGrid
    </div>
  );
}
