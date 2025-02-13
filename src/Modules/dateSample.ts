/* eslint-disable no-case-declarations */
import type { DateInterface } from "./Interface/DateInterface";
import {
  FullDayConversion,
  FullMonthConversion,
  RelativeConversion,
  TimeConversion,
} from "./converter";

export default function handleExample(handlingInput: DateInterface) {
  let rtnValue: string | undefined = undefined;
  let date: Date | null = null;

  if (handlingInput.time !== undefined && handlingInput.date !== undefined) {
    date = new Date(`${handlingInput.date} ${handlingInput.time}`);
  } else {
    date = new Date();
  }

  console.log(handlingInput);

  switch (Number(handlingInput.type) - 1) {
    case 1:
      // 09:01
      rtnValue = `${TimeConversion(date)}`;
      break;

    case 2:
      // 9:01:00 AM
      rtnValue = `${TimeConversion(date)}:${date.getSeconds()}`;
      break;

    case 3:
      // 28/11/2018
      rtnValue = `${
        String(date.getDate()).length < 2
          ? `0${date.getDate()}`
          : date.getDate()
      }/${
        String(date.getMonth() + 1).length < 2
          ? `0${String(date.getMonth() + 1)}`
          : String(date.getMonth() + 1)
      }/${date.getFullYear()}`;
      break;

    case 4:
      // 28 November 2018
      rtnValue = `${date.getDate()} ${FullMonthConversion(
        date.getMonth()
      )} ${date.getFullYear()}`;
      break;

    case 5:
      // 28 November 2018 09:01
      rtnValue = `${date.getDate()} ${FullMonthConversion(
        date.getMonth()
      )} ${date.getFullYear()} ${TimeConversion(date)}`;
      break;

    case 6:
      // Wednesday, 28 November 2018 09:01
      rtnValue = `${FullDayConversion(
        date.getDay()
      )} ${date.getDate()} ${FullMonthConversion(
        date.getMonth()
      )} ${date.getFullYear()} ${TimeConversion(date)}`;
      break;

    case 7:
      // 3 years ago (Time Diff..)
      const diff = date.getTime() - new Date().getTime();
      const absDiff = Math.floor(Math.abs(diff) / 1000);

      if (diff < 0) {
        rtnValue = `${RelativeConversion("old", absDiff)}`;
      } else {
        rtnValue = `${RelativeConversion("new", absDiff)}`;
      }
      break;

    default:
      // November 28, 2018 09:01
      rtnValue = `${date.getDate()} ${FullMonthConversion(
        date.getMonth()
      )} ${date.getFullYear()} ${TimeConversion(date)}`;
      break;
  }

  return rtnValue;
}
