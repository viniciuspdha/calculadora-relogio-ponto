export const getDateFromHours = time => {
  time = time.split(':');

  let now = new Date();

  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);

  return date;
}