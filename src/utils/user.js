export function createDemoUser() {
  if (!checkDemoUser()) {
    var user = {
      "username": "Demo",
      "password": "Demo",
      "name": "Demo name",
      "surname": "Demo surname",
      "roles": "Admin",
    }
    localStorage.setItem("Demo", JSON.stringify(user));
  }
}

function checkDemoUser() {
  if (JSON.parse(localStorage.getItem("Demo")) &&
      JSON.parse(localStorage.getItem("Demo")).username === "Demo" &&
      JSON.parse(localStorage.getItem("Demo")).password === "Demo")
  return true;
}