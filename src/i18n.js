import { register, init, getLocaleFromNavigator } from "svelte-i18n";
import _ from "lodash";

register("en", () => import("./locales/en.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
