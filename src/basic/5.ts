enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (DayOfWeek.Saturday === day || DayOfWeek.Sunday === day) {
    return false;
  } else {
    return true;
  }
};
