import "./style.css";

// Array de ejémplo:

const numberArr = [1, 2, 3, 4, 5, 6];

const namesArray = ["Roberto", "Ana", "Jesus", "Laura"];

console.log(`Array de números original: ${numberArr}`);
console.log(`Array de nombres original: ${namesArray}`);

// 1 - Array operations

// Head

const head = (myArr: number[]) => {
  const [firstArg] = myArr;
  return  firstArg
};
console.log(`Función Head: ${head(numberArr)}`);

// Tail

const tail = (myArr: string[]) => {
  const [_firstArg, ...excludedFirstElementArr] = myArr;
  return excludedFirstElementArr;
};

console.log(`Función Tail: ${tail(namesArray)}`);

// Init

const init = (myArr: number[]) => {
  const excludedLastElementArr = myArr.slice(0, -1);
  return excludedLastElementArr;
};

console.log(`Función Init: ${init(numberArr)}`);

// Last

const last = (myArr: number[]) => {
  const lastElementArr = myArr.at(-1);
  return lastElementArr;
};

console.log(`Función Last: ${last(numberArr)}`);
