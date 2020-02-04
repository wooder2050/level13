export function makeComma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

export function makeOptionList1(data, optionState, index) {
  let result = data
    .filter(function(data) {
      let flag = true;
      for (let i = 0; i < index; i++) {
        if (data.positions[i] !== optionState[i]) flag = false;
      }
      return flag;
    })
    .map(size => size.positions[index]);
  let optionsListElement = result.filter(
    (item, index) => result.indexOf(item) === index
  );
  return optionsListElement;
}

export function makeOptionList2(data, optionState, index) {
  let result = data
    .filter(function(data) {
      let flag = true;
      for (let i = 0; i < index; i++) {
        if (data.positions[i] !== optionState[i]) flag = false;
      }
      return flag;
    })
    .map(function(length) {
      let result = [];
      result.push(length.positions[2]);
      result.push(length.data.option_price);
      result.push(length.data.stock_count);
      return result;
    });
  let optionsListElement = result.filter(
    (item, index) => result.indexOf(item) === index
  );
  return optionsListElement;
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
