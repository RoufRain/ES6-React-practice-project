const user = {
  name: "rouf",
  age: 25,
  skills: ["html", "css", "javascript", "react"],
};

user.skills.push("nextJS");
const indexOfReact = user.skills.indexOf("react");
if (indexOfReact !== -1) {
  user.skills.splice(indexOfReact, 1);
}
user.age = 30;
console.log(user);
