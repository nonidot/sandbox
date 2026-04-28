// Day14：Week2 復習＋ミニ演習
// Day8〜13（union型・intersection型・optional・readonly・型推論・型アサーション）の復習

// ===== ミニ演習 =====

// 演習1：signal の型を any → union型（"red" | "yellow" | "green"）に変えて、
//         日本語の意味を返す実装にしてみよう
function getSignalMessage(signal: "red"| "yellow" | "green"): string {
  if(signal === "red") {
    return "redは止まれ";
  } else if(signal === "yellow") {
    return "yellowは注意";
  }
  return "greenは進め";
}

console.log(getSignalMessage("red"));    // 止まれ
console.log(getSignalMessage("yellow"));  // 注意
console.log(getSignalMessage("green"));  // 進め

// 演習2：Employee型を any → intersection型（Person & { company: string }）に変えて、
//         オブジェクトも正しく作ってみよう
type Name = {
  firstName: string;
  lastName: string;
};
type Age = {
  age: number;
};
type Person = Name & Age;

type Employee = Person & {
  company: string
};
 // ← intersection型で定義してみよう

const employee: Employee = {
  firstName: "Taro",
  lastName: "Tanaka",
  age: 20,
  company: "Tech Company"
}; // ← ここを実装してみよう

console.log(employee);

// 演習3：greetingをoptionalな引数として追加して、
//         なければ "Hello" を使うように実装してみよう
function greet(name: string, greeting?: string): string { // ← greetingを使って実装してみよう
  if(greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`; // ← ここを実装してみよう
}

console.log(greet("Noni"));           // Hello, Noni!
console.log(greet("Noni", "Hi"));     // Hi, Noni!

// 演習4：lat と lng に readonly を追加して、
//         最後のコメントを外したときにエラーになることを確認しよう
type Coordinate = {
  readonly lat: number; // ← readonlyを追加してみよう
  readonly lng: number; // ← readonlyを追加してみよう
};

const tokyo: Coordinate = {
  lat: 35.6895,
  lng: 139.6917
};
console.log(tokyo);
// tokyo.lat = 0; // ← readonlyを追加したらここがエラーになるはず
