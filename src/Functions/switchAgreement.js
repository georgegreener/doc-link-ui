export function switchAgreement(arrow, counter, agreements) {
  if (arrow === "left") {
    if (counter === 0) {
      return agreements.length - 1;
    } else {
      return counter - 1;
    }
  } else if (arrow === "right") {
    if (counter === agreements.length - 1) {
      return 0;
    } else {
      return counter + 1;
    }
  }
}
