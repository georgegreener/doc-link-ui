export function getGrid(width) {
  if (width <= 600) {
    return {
      gridColumn: "1 / 11",
      gridRow: "5 / 11",
      marginBottom: "2.5vh"
    };
  } else if (width < 768) {
    return {
      gridColumn: "2 / 10",
      gridRow: "3 / 11",
      marginBottom: "2.5vh"
    };
  }
}
