// optional：?をつけるとプロパティを省略できる
interface Dog {
  name: string;
  weight: number;
  breed?: string; // 省略可能
}

const dog1: Dog = {
  name: "わんこ",
  weight: 4,
  breed: "トイプードル",
};

const dog2: Dog = {
  name: "ちくわ",
  weight: 2,
  // breedなくてもOK
};

console.log(dog1);
console.log(dog2);

// breedにアクセスするとundefinedかもしれない
console.log(dog1.breed); // トイプードル
console.log(dog2.breed); // undefined

// undefinedの場合にデフォルト値を表示する
function showBreed(dog: Dog): void {
  console.log(dog.breed ?? "不明");
}

showBreed(dog1); // トイプードル
showBreed(dog2); // 不明