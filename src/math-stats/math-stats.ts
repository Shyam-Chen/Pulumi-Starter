export function mean(numbers: i32[]): i32 {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}

export function median(numbers: i32[]): i32 {
  let result = 0;

  numbers.sort();

  if (numbers.length % 2 === 0) {
    result = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  } else {
    result = numbers[(numbers.length - 1) / 2];
  }

  return result;
}

export function mode(numbers: i32[]): i32[] {
  // https://github.com/AssemblyScript/assemblyscript/issues/166
  return numbers;
}

export function standardDeviation(numbers: i32[]): i32 {
  return 0;
}

export function variance(numbers: i32[]): i32 {
  return 0;
}

export function percentile(numbers: i32[], perc: i32): i32 {
  return 0;
}
