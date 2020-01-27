const movingAverage = function (rawData, time) {
  let ma = [];
  let sum = (accumulator, currentValue) => accumulator + currentValue;
  let data = Array.from(rawData);
  do {
    let dataArray = data;
    let intermediateArray = dataArray.slice(0, time);
    let average = intermediateArray.reduce(sum, 0) / time;
    ma.push(average);
    dataArray.shift();
  }
  while (data.length >= time);
  return ma;
};

export default movingAverage;
