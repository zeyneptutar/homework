export function createDemoUser() {
  if (!checkDemoUser()) {
    var user = {
      "username": "Demo",
      "password": "Demo",
      "name": "Demo name",
      "surname": "Demo surname",
      "roles": ["Demo"],
    }
    localStorage.setItem("user", JSON.stringify(user));
  }
}

function checkDemoUser() {
  if (JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).username === "Demo" &&
      JSON.parse(localStorage.getItem("user")).password === "Demo")
  return true;
}