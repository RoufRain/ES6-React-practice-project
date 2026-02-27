function user(name, age = 18, ...rest) {
  const userObj = {
    name: `${name}`,
    age,
    skills: [...rest],
    bio: `${name} is ${age} yers old and knows ${[...rest]}`,
  };
  return userObj;
}
const callUser = user("rouf", undefined, "javascript", "react");
console.log(callUser);
