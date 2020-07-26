export const getDiffFromTwoDates = (date1: Date, date2: Date): number => {
  return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
}

export const getMonthNameFromNumber = (month: number): string => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return monthNames[month];
}

export const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = getDiffFromTwoDates(now, date);

  if (diff === 0) {
    return `${date.getHours()}:${date.getMinutes()}`
  } else if (diff < 0 && diff > -30) {
    return `${getMonthNameFromNumber(date.getMonth())} ${date.getDate()}`
  } else {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }
}
