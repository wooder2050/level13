export function makeComma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

export function hasOption(selectedOptions, currentOptions) {
  if (selectedOptions) {
    for (let i = 0; i < selectedOptions.length; i++) {
      let checkList = [];
      for (let j = 0; j < selectedOptions[0].length; j++) {
        if (
          typeof selectedOptions[i][j] === "string" &&
          selectedOptions[i][j] === currentOptions[j]
        )
          checkList.push(0);

        if (
          typeof selectedOptions[i][j] !== "string" &&
          selectedOptions[i][j][0] === currentOptions[j][0]
        )
          checkList.push(0);
      }
      if (checkList.length === selectedOptions[0].length) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
