// number 陣列
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
console.log(fibonacci)

// 型別混用陣列
interface AnyArray {
    [index: number]: any;
}
let anyarray: AnyArray = [283, "ml", { pi: 3.14 }];
console.log(anyarray)

// 型別混用陣列(改寫)
let anyarray2: {
    [index: number]: any;
} = [283, "ml", { pi: 3.14 }];

console.log(anyarray2)
