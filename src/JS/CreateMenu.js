import refs from "./refs";
import tempMenu from "../templates/menu.hbs";
import menu from "../menu.json";
const createMenu = tempMenu(menu);
refs.listRef.innerHtml = createMenu;
refs.listRef.insertAdjacentHTML("afterbegin", createMenu);
