/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr
      .filter(employee => employee.profession === "developer")
      .map(employee => employee);
    console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
	let developers = [];
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log(developers);
}

function addData() {
  //Write your code here, just console.log
	let newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    arr.push(newEmployee);
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
	arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
	let newArr = [
      { id: 5, name: "alice", age: "22", profession: "designer" },
      { id: 6, name: "bob", age: "25", profession: "manager" },
      { id: 7, name: "charlie", age: "23", profession: "tester" }
    ];
    arr = arr.concat(newArr);
    console.log(arr);
}
