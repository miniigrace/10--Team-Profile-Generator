const Manager = require('../lib/Manager');
//const manager = new manager('MiniGrace', '1234', 'grashahyde@gmail.com');

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Grace";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1234;
  const e = new Manager("Grace", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Manager("Grace", 1234, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Grace";
  const e = new Manager(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 1234;
  const e = new Manager("Grace", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Manager("Grace", 1234, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Grace", 1234, 'grashahyde@gmail.com');
  expect(e.getRole()).toBe(testValue);
});

