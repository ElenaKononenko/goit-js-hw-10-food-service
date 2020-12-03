import refs from "./refs";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const STORAGE_THEME = "selected-theme";

if (localStorage.getItem(STORAGE_THEME) === Theme.DARK) {
  chengeTheme(Theme.LIGHT, Theme.DARK);
  refs.themeRef.setAttribute("checked", true);
} else {
  chengeTheme(Theme.DARK, Theme.LIGHT);
}
// if (localStorage.getItem(STORAGE_THEME) === Theme.DARK) {
//   refs.bodyRef.classList.add(Theme.DARK);
//   refs.themeRef.setAttribute("checked", true);
// } else {
//   refs.bodyRef.classList.add(Theme.LIGHT);
// }

refs.themeRef.addEventListener("click", onChangeTheme);

function onChangeTheme(e) {
  if (e.target.checked) {
    chengeTheme(Theme.LIGHT, Theme.DARK);
  } else {
    chengeTheme(Theme.DARK, Theme.LIGHT);
  }
}

function chengeTheme(oldTheme, newTheme) {
  refs.bodyRef.classList.remove(oldTheme);
  refs.bodyRef.classList.add(newTheme);

  localStorage.setItem(STORAGE_THEME, newTheme);
}
