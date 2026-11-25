const arr: string[] = [];
arr.push("manju", "dddd");
console.log("arr", arr);

const arr2: number[] = [1, 2, 3];
arr2.push(5);
arr2[0] = 6;
console.log("arr2:", arr2);

const bools: Array<string> = [];
const bools2: boolean[] = [];

type Points = {
  X: number;
  Y: number;
};

const coords: Points[] = [];
coords.push({ X: 23, Y: 8 });
coords.push({ X: 20, Y: 10 });

//  MultiDimensional array
const MultiDimen: string [][] = [["a","b","c"], ["a","b","c"], ["a","b","c"], ["a","O","a"]]
