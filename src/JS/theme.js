import refs from "./refs";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

if (localStorage.getItem("Theme") === "DARK") {
  refs.bodyRef.classList.add(Theme.DARK);
  refs.themeRef.setAttribute("checked", true);
}

refs.themeRef.addEventListener("click", onChangeTheme);

function onChangeTheme(e) {
  if (refs.bodyRef.classList.contains(Theme.LIGHT)) {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    refs.themeRef.setAttribute("checked", true);
    localStorage.setItem("Theme", "DARK");
  } else if (refs.bodyRef.classList.contains(Theme.DARK)) {
    refs.bodyRef.classList.remove(Theme.DARK);
    refs.bodyRef.classList.add(Theme.LIGHT);
    refs.themeRef.setAttribute("checked", false);
    localStorage.setItem("Theme", "LIGHT");
  } else {
    refs.bodyRef.classList.add(Theme.DARK);
    localStorage.setItem("Theme", "DARK");
    refs.themeRef.setAttribute("checked", true);
  }
}
