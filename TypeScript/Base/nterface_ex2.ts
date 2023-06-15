interface Band {
  bandName: String;
  [propName: string]: any;    // 任意屬性
}

let roselia: Band = {
    bandName: "Roselia",
    vocal: "湊友希那",
    base: "今井リサ",
    guitar: "氷川紗夜",
    drum: "宇田川あこ",
    keyboard: "白金燐子",
    members: 5      
} // 因為任意屬性是設定any 所以追加任何型態都可以

let ras: Band = {
    bandName: "Roselia",
    vocalBase: "LAYER",
    dj: "CHUCHU",
    guitar: "LOCK",
    drum: "MASKING",
    keyboard: "PAREO",
    members: 5      
} // 因為任意屬性是設定any 所以追加任何型態都可以
