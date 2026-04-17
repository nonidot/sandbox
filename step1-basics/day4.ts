// interface：オブジェクトの型を定義する
interface Dog {
  name: string;
  weight: number;
}

const dog: Dog = {
  name: "わんこ",
  weight: 4,
};

console.log(dog);

// interfaceは拡張できる
interface Animal {
  name: string;
}

interface Dog extends Animal {
  weight: number;
}

const dog2: Dog = {
  name: "わんこ",
  weight: 4,
};

console.log(dog2);