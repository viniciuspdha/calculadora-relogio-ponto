export const getHourRange = (firstDate, secondDate) => {
  let delta = Math.abs(firstDate - secondDate) / 1000;
  const result = {};
  const timeSchema = {
    hour: 3600,
    minute: 60,
    second: 1
  };

  Object.keys(timeSchema).forEach(function (key) {
    result[key] = Math.floor(delta / timeSchema[key]);
    delta -= result[key] * timeSchema[key];
  });

  const formatedTime = `${("0" + result.hour).slice(-2)}:${("0" + result.minute).slice(-2)}`;

  return {...result, formatedTime}
}