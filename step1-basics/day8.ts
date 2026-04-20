// union型：複数の型を受け付ける
type StringOrNumber = string | number;

const value1: StringOrNumber = "noni";
const value2: StringOrNumber = 4;

console.log(value1);
console.log(value2);

// 関数でunion型を使う
function showId(id: string | number): void {
  console.log("ID：" + id);
}

showId("noni-001");
showId(123);

// null or stringのunion型
type NullableString = string | null;

let userName: NullableString = "noni";
console.log(userName);

userName = null;
console.log(userName);