// 1 interface で Dog 型を定義する（name: string、weight: number、breed: string）
interface Dog {
    name: string;
    weight: number;
    breed?: string;
}

// 2 Dog 型の配列を作る（2匹以上）
const dogs: Dog[] = [
  { name: "もか", weight: 4, breed: "トイプードル" },
  { name: "ちくわ", weight: 2}
];
console.log(dogs);

// 3 犬の情報を表示する関数 showDog を作る（戻り値は void）
function showDog(dog: Dog): void {
  console.log(dog);
}
showDog(dogs[0]!);

// 4 breed（犬種）は省略できるようにする
function showDog2(dog: Dog): void {
  console.log(dog);
}
showDog2(dogs[1]!);