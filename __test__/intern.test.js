const Intern = require('../lib/Intern');
//const intern = new intern('MiniGrace', '1234', 'grashahyde@gmail.com');

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Grace";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 1234;
  const e = new Intern("Grace", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Intern("Grace", 1234, testValue);
  expect(e.email).toBe(testValue);
});

test("Can set school via constructor argument", () => {
  const testValue = "UCB";
  const e = new Intern("Grace", 1234, "grashahyde@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Grace";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 1234;
  const e = new Intern("Grace", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "grashahyde@gmail.com";
  const e = new Intern("Grace", 1234, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get github via getSchool()", () => {
  const testValue = "UCB"
  const e = new Intern("Grace", 1234, "grashahyde@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});


test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Grace", 1234, "grashahyde@gmail.com");
  expect(e.getRole()).toBe(testValue);
});


