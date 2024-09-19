import "./style.css";

// Array de ejémplo:

const numberArr = [1,2,3,4];
const numberArr2 = [5,6,7,8];
const numberArr3 = [9,10];
const numberArr4 = [11,12,13,14];

console.log(`Arrays de números originales: [${numberArr}] [${numberArr2}] [${numberArr3}] [${numberArr4}]`);

// 2 - Concat

const concat = (myArr: number[] , myArr2: number[]) => {
    const  arrCopy = [...myArr , ...myArr2];
    return arrCopy; 
};

console.log(`Función Concat: ${concat(numberArr,numberArr2)}`);

// Opcional

const unlimitedConcat = (...myArr: number[][]): number[] => {
   return myArr.reduce((acc, arr) => acc.concat(arr))
};

console.log(`Función Concat sin límite: ${unlimitedConcat(numberArr,numberArr2,numberArr3,numberArr4)}`);



