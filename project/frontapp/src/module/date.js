function padTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

function getFormattedDate(date) {
  return (
    [
      date.getFullYear(),
      padTwoDigits(date.getMonth() + 1),
      padTwoDigits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTwoDigits(date.getHours()),
      padTwoDigits(date.getMinutes()),
      padTwoDigits(date.getSeconds()),
    ].join(":")
  );
}

export function dateForment(created_date) {
  let date = new Date(created_date);
  return getFormattedDate(date);
}
