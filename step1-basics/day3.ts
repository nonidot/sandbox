// typeエイリアス：型に名前をつける
type Name = string;
type Weight = number;

const dogName: Name = "わんこ";
const dogWeight: Weight = 4;

console.log(dogName);
console.log(dogWeight);

// オブジェクトの型も定義できる
type Dog = {
  name: string;
  weight: number;
};

const dog: Dog = {
  name: "わんこ",
  weight: 4,
};

console.log(dog);