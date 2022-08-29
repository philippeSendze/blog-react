export const firstLinesOfArticle = (text) => text.slice(0, 150).concat("...");

export const formattingDate = (date) => {
  const months = new Map();
  months.set("01", "janvier");
  months.set("02", "février");
  months.set("03", "mars");
  months.set("04", "avril");
  months.set("05", "mai");
  months.set("06", "juin");
  months.set("07", "juillet");
  months.set("08", "août");
  months.set("09", "septembre");
  months.set("10", "octobre");
  months.set("11", "novembre");
  months.set("12", "décembre");

  const slicedDate = date.slice(0, 10); // type : YYYY-MM-DD
  const year = slicedDate.substring(0, 4);
  const month = slicedDate.substring(5, 7);
  const day =
    slicedDate.charAt(8) == "0"
      ? slicedDate.substring(9, 10)
      : slicedDate.substring(8, 10);

  return day + " " + months.get(month) + " " + year;
};
