// function isJavaScriptFile(input) {
//   if (typeof input !== "string") {
//     return "please provide a string";
//   }
//   if (input.toLowerCase().endsWith(".js") == true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = isJavaScriptFile("index.Js");
// console.log(result);

// function isHtmlFile(input) {
//   if (typeof input !== "string") {
//     return "please provide a string";
//   }
//   // if (input.toLowerCase().endsWith(".html") === true) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return input.toLowerCase().endsWith(".html");
// }

// console.log(isHtmlFile("index.Html"));

// function isHtmlFile(input) {
//   if (typeof input !== "string") {
//     return "please provide a string";
//   }
//   const cut = input.split(".");
//   const lastElement = cut.pop();
//   return lastElement.toLowerCase() === "js";
// }

// console.log(isHtmlFile("index.Js"));

// function isJavaScriptFile(input) {
//   if (typeof input !== "string") {
//     return "please provide a string";
//   }

//   return input.toLowerCase().endsWith(".js") === true;
// }
// console.log(isJavaScriptFile("index.js"));

// function isJavaScriptFile(input) {
//   if (typeof input !== "string") {
//     return "please provide a string";
//   }

//   const items = input.split(".");
//   const lastElement = items.pop();
//   return lastElement.toLowerCase() == "js";
// }
// console.log(isJavaScriptFile("index.Js"));
