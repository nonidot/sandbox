// intersection型：複数の型を組み合わせる
type Animal = {
  name: string;
};

type Pet = {
  owner: string;
};

type DomesticAnimal = Animal & Pet;

const dog: DomesticAnimal = {
  name: "わんこ",
  owner: "noni",
};

console.log(dog);