export const sumTime = (t1, t2) => {
  const time1 = t1.split(':');
  const time2 = t2.split(':');

  let secondSum = Number(time1[1]) + Number(time2[1]);
  let minSum = Number(time1[0]) + Number(time2[0]);
  
  if(secondSum > 59){
    secondSum = Math.abs(60 - secondSum);
    minSum += 1;
  }
  
  if(secondSum < 10){
    secondSum = `0${secondSum}`;
  }
  
  if(minSum < 10){
    minSum = `0${minSum}`;
  }
  
  return `${minSum}:${secondSum}`;   
}