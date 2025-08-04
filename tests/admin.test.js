/*
auth.js =>


    test adminAuthRegister
    test adminAuthLogin
    

*/
import { adminAuthRegister, adminAuthLogin } from "../src/auth";
import { setData } from '../src/dataStore.js';

beforeEach(() => {
    setData({
        users:[],
        quizzes: [],
        nextUserId: 1,
        nextQuizId: 1, 
    })
})


describe('adminAuthRegister', () => {
    //test success
    const user = {
        email: "test@example.com",
        password: "1234567A",
        nameFirst: "john",
        nameLast: "doe",
    }
    test('Successful register', () => {
        expect(adminAuthRegister(user.email, user.password, user.nameFirst, user.nameLast)
            .toStrictEqual(any(Number)));
    });
    //test invalid email
    //test already existing email
    test('email in use already', () => {
        adminAuthRegister(user.email, user.password, user.nameFirst, user.nameLast);
        expect(adminAuthRegister(user.email, user.password, user.nameFirst, user.nameLast)
            .toEqual({
                error: 'INVALID_EMAIL',
                message: expect.any(String),
            })
        );
    });
    //test not an email
    test('invalid email', () => {
        expect(adminAuthRegister('notanemail', user.password, user.nameFirst, user.nameLast)
            .toEqual({
                error: 'INVALID_EMAIL',
                message: expect.any(String),
            })
        );
    })

    //test invalid first names all cases
    const invalidNames = ['ww', '12345678901234567890123', '?:[]df,;-='];
    test.each(invalidNames)('Test invalid first names', (nameFirst) => {
        expect(adminAuthRegister(user.email, user.password, nameFirst, user.nameLast)).toEqual({
            error: 'INVALID_FIRST_NAME',
            message: expect.any(String),
        })
    });
    //test invalid last name all cases
    test.each(invalidNames)('Test invalid first names', (nameFirst) => {
        expect(adminAuthRegister(user.email, user.password, user.nameFirst, nameFirst)).toEqual({
            error: 'INVALID_LAST_NAME',
            message: expect.any(String),
        })
    });

    //test invalid passwords
    const invalidPasswords = ['1not54', 'nonumbers'];
    test.each(invalidPasswords)('Test invalid passwords', (password) => {
        expect(adminAuthRegister(user.email, password, user.nameFirst, user.nameLast)).toEqual({
            error: 'INVALID_PASSWORD',
            message: expect.any(String),
        })
    });
});

