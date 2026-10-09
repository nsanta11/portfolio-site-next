// components/current-theme/CurrentTheme.js
//
// Seasonal "current theme" decoration. Rendered once from app/layout.js.
//
// To switch holidays: add a component to THEMES and change ACTIVE_THEME.
// To remove entirely: set ACTIVE_THEME to null (or delete the <CurrentTheme />
// line in app/layout.js plus this folder).
import Halloween from "./Halloween";

const THEMES = {
  halloween: Halloween,
  // christmas: Christmas,
};

const ACTIVE_THEME = "halloween";

export default function CurrentTheme() {
  const Theme = THEMES[ACTIVE_THEME];
  return Theme ? <Theme /> : null;
}
