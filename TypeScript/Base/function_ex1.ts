// 一般函式表示式（Function Expression）
let mySum = function(x: number, y: number): number {
    return x + y;
};

// 手動新增型別( => )
let mySum2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};

// 用介面定義函式的形狀
interface mySumFunc {
    (x: number, y: number): number;
}
let mySum3: mySumFunc;
mySum3 = function(x: number, y: number) {
    return x + y;
}
