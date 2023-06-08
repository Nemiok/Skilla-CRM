import capitalize from "./capitalize-word";

const processDate = (date: Date) => {
  const D = new Date(date)

  const DDay = D.getDate();
  const DMonth = D.getMonth() + 1;
  const DYear = D.getFullYear();
  /* 
    const DMonthName = new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D).slice().at(-1) === 'т' ?
      (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)) + 'а' :
      (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)).slice(0, -1) + 'я';
   */
  const DMonthName = new Intl.DateTimeFormat('ru-RU', { 'month': 'short', }).format(D).slice(0, 3)

  const DWeekdayName = capitalize(new Intl.DateTimeFormat('ru-RU', { 'weekday': 'long' }).format(D))


  return {
    DDay,
    DMonth,
    DYear,
    DWeekdayName,
    DMonthName,
  }
}

export default processDate