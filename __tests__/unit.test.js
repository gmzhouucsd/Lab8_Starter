// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
test('fail isPhoneNumber 1', () => {
    expect(functions.isPhoneNumber(1)).toBe(false);
})

test('fail isPhoneNumber 2', () => {
    expect(functions.isPhoneNumber(2)).toBe(false);
})

test('pass isPhoneNumber 1', () => {
    expect(functions.isPhoneNumber('(510)696-3414')).toBe(true);
})

test('pass isPhoneNumber 2', () => {
    expect(functions.isPhoneNumber('(510)850-4151')).toBe(true);
})

test('fail isEmail 1', () => {
    expect(functions.isEmail(1)).toBe(false);
})

test('fail isEmail 2', () => {
    expect(functions.isEmail(2)).toBe(false);
})

test('pass isEmail 1', () => {
    expect(functions.isEmail('gavin@gmail.com')).toBe(true);
})

test('fail isEmail 2', () => {
    expect(functions.isEmail('zhou@gmail.com')).toBe(true);
})

test('fail isStrongPassWord 1', () => {
    expect(functions.isStrongPassword('$')).toBe(false);
})

test('fail isStrongPassWord 2', () => {
    expect(functions.isStrongPassword('%')).toBe(false);
})

test('pass isStrongPassWord 1', () => {
    expect(functions.isStrongPassword('A123m_')).toBe(true);
})

test('pass isStrongPassWord 1', () => {
    expect(functions.isStrongPassword('W123mg')).toBe(true);
})

test('fail isDate 1', () => {
    expect(functions.isDate(1)).toBe(false);
})

test('fail isDate 2', () => {
    expect(functions.isDate(2)).toBe(false);
})

test('pass isDate 1', () => {
    expect(functions.isDate('04/06/2005')).toBe(true);
})

test('pass isDate 2', () => {
    expect(functions.isDate('11/28/2001')).toBe(true);
})

test('fail isHexColor 1', () => {
    expect(functions.isHexColor(1)).toBe(false);
})

test('fail isHexColor 2', () => {
    expect(functions.isHexColor(1)).toBe(false);
})

test('pass isHexColor 1', () => {
    expect(functions.isHexColor('8250C4')).toBe(true);
})

test('pass isHexColor 1', () => {
    expect(functions.isHexColor('738761')).toBe(true);
})