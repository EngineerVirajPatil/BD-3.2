const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let strings = ['Rahul', 'Gita', 'Sita', 'Sachin'];

let employees = [
  { employeeId: 1, name: 'Amit' },
  { employeeId: 2, name: 'Sachin' },
  { employeeId: 3, name: 'Rahul' },
];

let users = [
  { username: 'Amit1990', name: 'Amit', score: 85 },
  { username: 'Sachin1989', name: 'Sachin', score: 80 },
  { username: 'Rahul1991', name: 'Rahul', score: 90 },
];

let contacts = [
  { phonenumber: 1234567890, name: 'Amit', address: '123, Street, City' },
  { phonenumber: 9876543210, name: 'Sachin', address: '23, Park Avenue, City' },
  { phonenumber: 102345987, name: 'Rahul', address: '45, Main Street, City' },
];

function findNumber(element, number) {
  return element === number;
}

function findName(element, name) {
  return element === name;
}

function findEmployee(element, employeeId) {
  return element.employeeId === employeeId;
}

function findUser(element, username) {
  return element.username === username;
}

function findContact(element, phonenumber) {
  return element.phonenumber === phonenumber;
}

// /numbers/find/5
app.get('/numbers/find/:number', (req, res) => {
  let number = parseInt(req.params.number);
  let result = numbers.find((element) => findNumber(element, number));
  if (result != undefined) {
    res.json(result);
  } else {
    res.send('Number is not present in array');
  }
});

// /names/find/Sita
app.get('/names/find/:name', (req, res) => {
  let name = req.params.name;
  let result = strings.find((element) => findName(element, name));
  if (result != undefined) {
    res.json(result);
  } else {
    res.send('Name is not present in array');
  }
});

// /employees/find/2
app.get('/employees/find/:employeeId', (req, res) => {
  let employeeId = parseInt(req.params.employeeId);
  let result = employees.find((element) => findEmployee(element, employeeId));
  if (result != undefined) {
    res.json(result);
  } else {
    res.send('Employee is not present in array');
  }
});

// /users/find/Amit1990
app.get('/users/find/:username', (req, res) => {
  let username = req.params.username;
  let result = users.find((element) => findUser(element, username));
  if (result != undefined) {
    res.json(result);
  } else {
    res.send('Username is not present in array');
  }
});

// /contacts/find/1234567890
app.get('/contacts/find/:phonenumber', (req, res) => {
  let phonenumber = parseInt(req.params.phonenumber);
  let result = contacts.find((element) => findContact(element, phonenumber));
  if (result != undefined) {
    res.json(result);
  } else {
    res.send('Contact is not present in array');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
