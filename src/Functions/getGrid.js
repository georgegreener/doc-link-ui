export function getGrid(page, width) {
  if (width <= 600 && page === "Dashboard") {
    return {
      gridColumn: "1 / 11",
      gridRow: "5 / 11",
      marginBottom: "2.5vh"
    };
  } else if (width <= 600 && page === "Upload") {
    return {
      gridColumn: "1 / 11",
      gridRow: "4 / 9",
      marginBottom: "2.5vh"
    };
  } else if (width > 600 && page === "Dashboard") {
    return {
      gridColumn: "2 / 10",
      gridRow: "3 / 11",
      marginBottom: "2.5vh"
    };
  } else if (width > 600 && page === "Upload") {
    return {
      gridColumn: "2 / 10",
      gridRow: "3 / 9",
      marginBottom: "2.5vh"
    };
  }
}
