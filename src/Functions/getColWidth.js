export function getColWidth(cols) {
  let colWidth = 100 / cols.length;
  colWidth = colWidth.toString();
  colWidth = colWidth + "%";
  return colWidth;
}
