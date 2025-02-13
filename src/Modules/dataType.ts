import type { DateInterface } from "./Interface/DateInterface";

export default function handlingDate(handlingInput: DateInterface) {
  const dateTranslate = ["", ":t", ":T", ":d", ":D", ":f", ":F", ":R"];
  const rtnConst = `<t:${Math.floor(new Date().getTime() / 1000)}${
    dateTranslate[0]
  }${dateTranslate[Number(handlingInput.type) - 1]}>`;

  if (Object.values(handlingInput).some((i) => i === undefined))
    return rtnConst;

  const date: number = Math.floor(
    new Date(`${handlingInput.date} ${handlingInput.time}`).getTime() / 1000
  );

  return `<t:${date}${dateTranslate[Number(handlingInput.type) - 1]}>`;
}
