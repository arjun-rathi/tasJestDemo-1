const getAboutUsLink = require("./calculator");

test("Retuns about-us for english language", () => {
    expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
});

test("Returns about-us for spanish language", () => {
    expect(getAboutUsLink(process.env.GLOAR_VARIABLE)).toBe("/acerca-de");
});

// test.todo('Skip a test');
test.skip("Skip a test", () => {
    (getAboutUsLink("es-ES")).toBe("/acerca-de");
});

// test("Fail a test -1", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });


// test("Blacklist a tesst", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });

// test("Fail a test -2", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });

test("Account added by arjun-rathi", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

test("nmew test", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

//Updated the variable in secrets
test("Added by arjun", () => {
    expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
});

test('adding should should detect odd number--', () => {
    // const number = Math.floor(Math.random() * 10);
    const number = 13
    const result = number % 2;
    expect(result).toBe(1);
});

test('new added', () => {
    const result = 11 % 2;
    expect(result).toBe(1);
});

test('New test case 15 Jan 2023', () => {
    const number = Math.floor(Math.random() * 10);
    const result = number % 2;
    expect(result).toBe(1);
});

test('New test 10 May 2023', () => {
    const number = Math.floor(Math.random() * 25);
    const result = number % 2;
    expect(result).toBe(1);
});
