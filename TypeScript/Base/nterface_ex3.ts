interface Song {
  readonly id: number;     // 唯讀屬性
  songName: String;
  songRelease: number;
  albumName?: String;      // 可選屬性
}

let influencer: Song = {
  id: 202201,              // 一定要在建構物件時賦值
  songName: "Influencer",
  songRelease: 2022,
  albumName: "Unleash" 
}

influencer.id = 199905     // 錯誤 -> 只能賦值一次

let aboutUs: Song = {
  // id 屬性一定要在建構物件時賦值
  songName: "About Us",
  songRelease: 2021
}
aboutUs.id = 202105    // 錯誤 -> id 屬性一定要在建構物件時賦值
