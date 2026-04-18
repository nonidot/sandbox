// オプション引数（?をつけると省略できる）
function greet(name: string, message?: string): void {
  console.log(name + "：" + message);
}

greet("noni", "こんにちは");
greet("noni");

// デフォルト値を設定する
function greet2(name: string, message: string = "はじめまして"): void {
  console.log(name + "：" + message);
}

greet2("noni", "こんにちは");
greet2("noni");