import "./style.css";
import { generateGrid } from "./js/gridUI";

const playerGameboard = document.querySelectorAll(".playerGrid");
const computerGameboard = document.querySelectorAll(".computerGrid")
generateGrid(playerGameboard,computerGameboard)