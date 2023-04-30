export function getLanguageValue(language, item, name) {
  try {
    return item[`${name}_${language}`];
  } catch (e) {
    return item;
  }
}
