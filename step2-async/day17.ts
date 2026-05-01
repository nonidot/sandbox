// async/await：Promiseをより読みやすく書く方法
async function fetchName(): Promise<string> {
  return "noni";
}

async function main() {
  const name = await fetchName();
  console.log(name);
}

main();

async function fetchAge(age: number): Promise<number> {
  if (age > 0) return age;
  throw new Error("年齢が不正です");
}

async function main2() {
  try {
    const age = await fetchAge(4);
    console.log("成功：", age);
    
    const age2 = await fetchAge(-1);
    console.log("成功：", age2);
  } catch (err) {
    console.log("失敗：", err);
  }
}

main2();