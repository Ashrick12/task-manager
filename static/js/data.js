import data from "./task.json" assert { type: "json" };

console.log("WRITING");
for (let key in data) {
   for (let item in data[key]) {
      console.log(data[key][item]);
      document.getElementById(data[key][item][0]).checked = data[key][item][1];
   }
}
