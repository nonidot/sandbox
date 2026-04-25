// 型アサーション：TSに「この型だよ」と教える
const value: unknown = "noni";

// unknownのままだとエラー
// console.log(value.toUpperCase());

// asでstringだと教える
const strValue = value as string;
console.log(strValue.toUpperCase());