export const formatMoney = (price) => {
    let formated = new Intl.NumberFormat('vn-VN');
    return formated.format(price);
  }

export const findIndex = (state,name) => {
    var index = -1;
    for (let i = 0; i < state.length; i++) {
      if (state[i].product.name === name) {
        index = i
        break;
      }
    }
    return index
  }