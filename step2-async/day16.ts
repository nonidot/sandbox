// 複数のPromiseを同時に実行する
function fetchDogName(): Promise<string> {
  return new Promise((resolve) => {
    resolve("わんこ");
  });
}

function fetchDogWeight(): Promise<number> {
  return new Promise((resolve) => {
    resolve(4);
  });
}

// Promise.allで同時に実行
Promise.all([fetchDogName(), fetchDogWeight()]).then(([name, weight]) => {
  console.log(name);
  console.log(weight);
});

function fetchFail(): Promise<string> {
  return new Promise((_, reject) => {
    reject("失敗した！");
  });
}

Promise.all([fetchDogName(), fetchFail()])
  .then(([name, result]) => console.log(name, result))
  .catch((err) => console.log("エラー：", err));