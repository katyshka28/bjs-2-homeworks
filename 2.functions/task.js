function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = sum / arr.length;

  return { max: max, min: min, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  }

  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
      countEvenElement += 1
    }
  }

  if (countEvenElement == 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity

  let i = 0
  while (i < arrOfArr.length) {
    const result = func(...arrOfArr[i])

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
    i++
  }

  return maxWorkerResult;
}
