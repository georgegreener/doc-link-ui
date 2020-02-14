export function switchProject(arrow, counter, projects) {
  if (arrow === "left") {
    if (counter === 0) {
      return projects.length - 1;
    } else {
      return counter - 1;
    }
  } else if (arrow === "right") {
    if (counter === projects.length - 1) {
      return 0;
    } else {
      return counter + 1;
    }
  }
}
