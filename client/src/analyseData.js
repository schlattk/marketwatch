const movingAverage = function (rawData, time) {
  let ma = [];
  let sum = (accumulator, currentValue) => accumulator + currentValue;
  let dataArray = rawData;
  do {
    let intermediateArray = dataArray.slice(0, time);
    let average = intermediateArray.reduce(sum, 0) / time;
    ma.push(average);
    dataArray.shift();
  }
  while (dataArray.length >= time);
  return ma;
};

export default movingAverage;
