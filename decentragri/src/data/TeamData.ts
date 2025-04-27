import { StaticImageData } from "next/image";

import team_1 from "@/assets/images/about/trev_full.png"
import team_2 from "@/assets/images/about/paul_full.png"
import team_3 from "@/assets/images/team/team-3.jpg"
import team_4 from "@/assets/images/team/team-4.jpg"


interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   designation: string;
   linkedIn?: string;
   twitter?: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      img: team_1,
      title: "Trevin Olegario",
      designation: "CEO",
   },
   {
      id: 2,
      img: team_2,
      title: "Paul Fuentespina",
      designation: "Lead Developer",
   },
   {
      id: 3,
      img: team_3,
      title: "Robert Fox",
      designation: "Team Leader",
   },
   {
      id: 4,
      img: team_4,
      title: "Jacob Jones",
      designation: "Advisor",
   }
];

export default team_data;