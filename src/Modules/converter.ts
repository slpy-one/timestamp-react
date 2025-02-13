export function FullMonthConversion(month: number) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthList[month];
}

export function FullDayConversion(day: number) {
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayName[day];
}

export function TimeConversion(timeStamp: Date) {
  const hr =
    String(timeStamp.getHours()).length < 2
      ? `0${String(timeStamp.getHours())}`
      : String(timeStamp.getHours());
  const min =
    String(timeStamp.getMinutes()).length < 2
      ? `0${String(timeStamp.getMinutes())}`
      : String(timeStamp.getMinutes());

  return `${hr}:${min}`;
}

export function RelativeConversion(status: string, timeStamp: number) {
  let converted: string | undefined = undefined;

  console.log(timeStamp);

  if (status === "new") {
    if (timeStamp < 60) {
      // Less than a minute has passed:
      converted = `In ${timeStamp} seconds`;
    } else if (timeStamp < 3600) {
      // Less than an hour has passed:
      converted = `In ${Math.floor(timeStamp / 60)} minutes`;
    } else if (timeStamp < 86400) {
      // Less than a day has passed:
      converted = `In ${Math.floor(timeStamp / 3600)} hours`;
    } else if (timeStamp < 2620800) {
      // Less than a month has passed:
      converted = `In ${Math.floor(timeStamp / 86400)} days`;
    } else if (timeStamp < 31449600) {
      // Less than a year has passed:
      converted = `In ${Math.floor(timeStamp / 2620800)} months`;
    } else {
      // More than a year has passed:
      converted = `In ${Math.floor(timeStamp / 31449600)} years`;
    }
  } else {
    if (timeStamp < 60) {
      // Less than a minute has passed:
      converted = `${timeStamp} seconds ago`;
    } else if (timeStamp < 3600) {
      // Less than an hour has passed:
      converted = `${Math.floor(timeStamp / 60)} minutes ago`;
    } else if (timeStamp < 86400) {
      // Less than a day has passed:
      converted = `${Math.floor(timeStamp / 3600)} hours ago`;
    } else if (timeStamp < 2620800) {
      // Less than a month has passed:
      converted = `${Math.floor(timeStamp / 86400)} days ago`;
    } else if (timeStamp < 31449600) {
      // Less than a year has passed:
      converted = `${Math.floor(timeStamp / 2620800)} months ago`;
    } else {
      // More than a year has passed:
      converted = `${Math.floor(timeStamp / 31449600)} years ago`;
    }
  }

  return converted;
}
