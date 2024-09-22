enum DayOfWeek {
  Monday = "false",
  Tuesday = "false",
  Wednesday = "false",
  Thursday = "false",
  Friday = "false",
  Saturday = "true",
  Sunday = "true",
}

const isWeekend = (day: DayOfWeek) => {
  if (day === "false") {
    return false;
  } else {
    return true;
  }
};

console.log(isWeekend(DayOfWeek.Monday));
