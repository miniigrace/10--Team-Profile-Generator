//engineer parent class needs to include: name, id, email, github
const Engineer = require("../lib/Engineer");
//const engineer = new engineer('MiniGrace', '1234', 'grashahyde@gmail.com');

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Grace";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1234;
  const e = new Engineer("Grace", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Engineer("Grace", 1234, testValue);
  expect(e.email).toBe(testValue);
});

test("Can set github via constructor argument", () => {
  const testValue = "gracegithub";
  const e = new Engineer("Grace", 1234, "grashahyde@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Grace";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 1234;
  const e = new Engineer("Grace", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Engineer("Grace", 1234, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get github via getGithub()", () => {
  const testValue = "gracegithub";
  const e = new Engineer("Grace", 1234, "grashahyde@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});


test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Grace", 1234, "grashahyde@gmail.com");
  expect(e.getRole()).toBe(testValue);
});
