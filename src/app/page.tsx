import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <head>
      <body>
    <h1>Welcome to My Portfolio</h1>
    <><Header /><Resume /></>
    </body>
  </head>
  );
}
