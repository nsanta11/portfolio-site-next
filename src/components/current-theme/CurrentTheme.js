// components/current-theme/CurrentTheme.js
//
// Seasonal "current theme" decoration. Rendered once from app/layout.js.
//
// To switch holidays: add a component to THEMES and change ACTIVE_THEME.
// To remove entirely: set ACTIVE_THEME to null (or delete the <CurrentTheme />
// line in app/layout.js plus this folder).
import Halloween from "./Halloween";
import Winter from "./Winter";
import WinterScene from "./WinterScene";

const THEMES = {
  halloween: Halloween,
  winter: Winter,
};

const ACTIVE_THEME = "winter";

export default function CurrentTheme() {
  const Theme = THEMES[ACTIVE_THEME];
  return Theme ? <Theme /> : null;
}

// Decoration that sits in the page flow, between <main> and the footer.
// Themes without scenery just have no entry here.
const SCENERY = {
  winter: WinterScene,
};

export function CurrentThemeScenery() {
  const Scenery = SCENERY[ACTIVE_THEME];
  return Scenery ? <Scenery /> : null;
}
