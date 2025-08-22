import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/nodejs.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/ai.png";
import Tools8 from "/assets/tools/ap.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/arduino.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Arduino",
    ket: "Code Editor",
    dad: "200",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "800",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Adobe Photoshoop",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/Frame16.webp";
import Proyek2 from "/assets/proyek/Frame17.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Automatic Fan System",
    desk: "Project IOT berbasis ESP32 dipadukan dengan Sensor suhu, dan fan 12V serta Bot Father",
    tools: ["Arduino", "IOT", "Telegram"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Lateral Photobooth",
    desk: "Website Photobooth by Lateral Eyes berbasis HTML, CSS, dan Java Script",
    tools: ["HTML", "CSS", "JS"],
    dad: "300",
  },
];
