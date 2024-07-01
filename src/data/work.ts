import workMatYeuImg from "../assets/images/work-mat-yeu.png";
import workAonImg from "../assets/images/work-aon.png";
import workExxonMobilImg from "../assets/images/work-exxon-mobil.png";
import workGfeImg from "../assets/images/work-gfe.png";
import workHalongHubImg from "../assets/images/work-halong-hub.png";
import workGoFlyImg from "../assets/images/work-go-fly.png";

export interface IWork {
  id: string;
  slug: string;
  name: string;
  roles: string[];
  src: string;
}

export const works: IWork[] = [
  {
    id: "1",
    slug: "mat-yeu",
    name: "MATYEU",
    roles: ["Mobile Design", "UI/UX Design", "Art Direction"],
    src: workMatYeuImg,
  },
  {
    id: "2",
    slug: "aon",
    name: "AON",
    roles: ["UI/UX Design"],
    src: workAonImg,
  },
  {
    id: "4",
    slug: "exxon-mobil",
    name: "EXXON MOBIL",
    roles: ["UI/UX Design"],
    src: workExxonMobilImg,
  },
  {
    id: "5",
    slug: "gfe",
    name: "GfE",
    roles: ["Storyboard"],
    src: workGfeImg,
  },
  {
    id: "6",
    slug: "halong-hub",
    name: "HALONG HUB",
    roles: ["Website Design", "UI/UX Design", "Art Direction"],
    src: workHalongHubImg,
  },
  {
    id: "7",
    slug: "go-fly",
    name: "GO FLY",
    roles: ["Website Design", "UI/UX Design", "Art Direction"],
    src: workGoFlyImg,
  },
];
