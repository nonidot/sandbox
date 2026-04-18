// 関数の型定義
function greet(name: string): string {
  return "こんにちは、" + name + "！";
}

console.log(greet("noni"));

function calcWeight(weight: number): number {
  return weight * 2;
}

console.log(calcWeight(4));

function showMessage(message: string): void {
  console.log(message);
}

showMessage("わんこかわいい");