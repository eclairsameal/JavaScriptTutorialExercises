interface Song {
  songName: String;
  songRelease: number;
  albumName?: String;  // 可選變數
}
//  可選變數範例 
let influencer: Song = {
  songName: "Influencer",
  songRelease: 2022,
  albumName: "Unleash"
}

let aboutUs: Song = {
  songName: "About Us",
  songRelease: 2021
}
