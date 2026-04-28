// readonly：変更できないプロパティを定義する
interface Dog {
  readonly name: string;
  weight: number;
}

const dog: Dog = {
  name: "わんこ",
  weight: 4,
};

console.log(dog);

// readonlyのプロパティを変更しようとするとどうなる？
// dog.name = "ちくわ";
dog.weight = 3;