import "./styles.css";
import { createDropdown } from "./dropdown.js";

let data = {
  caption: "Where?",
  symbole: "+",
  options: [
    {
      label: "home",
      url: "https://fr.wikipedia.org/wiki/Spider-Man:_Homecoming",
    },
    {
      label: "far from home",
      url: "https://fr.wikipedia.org/wiki/Spider-Man:_Far_From_Home",
    },
    {
      label: "nowhere home",
      url: "https://fr.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
    },
  ],
};
const dd = createDropdown(data);
const main = document.querySelector(".main");
main.appendChild(dd);

