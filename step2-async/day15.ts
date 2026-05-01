function fetchAge(age: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (age > 0) {
      resolve(age);
    } else {
      reject("年齢が不正です");
    }
  });
}

fetchAge(4)
  .then((age) => console.log("成功：", age))
  .catch((err) => console.log("失敗：", err));

fetchAge(-1)
  .then((age) => console.log("成功：", age))
  .catch((err) => console.log("失敗：", err));
