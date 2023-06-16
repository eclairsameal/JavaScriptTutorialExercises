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

// 可選的引數
// function buildName(firstName?: string, lastName: string) -> 錯誤（可選引數後面不允許再出現必需引數）
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

//引數預設值
// function buildName(firstName: string = 'Tom', lastName: string) -> ok
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 剩餘引數
// function push(array, ...items) {
// items 是一個數組。所以我們可以用陣列的型別來定義它：
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);

// 一個函式接受不同數量或型別的引數 - 聯合型別
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 一個函式接受不同數量或型別的引數 - 過載
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
