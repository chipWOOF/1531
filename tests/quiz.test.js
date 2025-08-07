import { 
    adminQuizList,
    adminQuizCreate,
    adminQuizRemove,
    adminQuizInfo,
    adminQuizNameUpdate,
    adminQuizDescriptionUpdate
} from '../src/quiz';

beforeEach(() => {
    setData({
        users:[],
        quizzes: [],
        nextUserId: 1,
        nextQuizId: 1, 
    })
})

describe('adminQuizList', () => {
    beforeEach(() => {
        adminQuizCreate(1, 'one', 'quiz for one');
    })
    test('valid userID', () => {
        expect(adminQuizList(1)).toStrictEqual({
            quizId: 1,
            name: 'My Quiz'
        })
    });

    test('invalid userId', () => {
        expect(adminQuizList(2)).toStrictEqual({
            error: 'UNAUTHORISED',
            message: expect.any(String)
        })
    })

    test('list multiple quizzes', () => {
        adminQuizCreate(1, 'two', 'quiz');
        adminQuizCreate(1, 'three', 'quiz');
        const temp = [
            {
            quizId: 1,
            name: 'one'
            },
            {
            quizId: 1,
            name: 'two'
            },
            {
            quizId: 1,
            name: 'three'
            }
        ]
        expect(adminQuizList(1)).toMatchObject(temp);
    })
    
    
});

describe('adminQuizCreate', () => {
    //for this test suite assume the logged in user is userID 1,
    test('successful creation', () => {
        expect(adminQuizCreate(1, 'name', '')).toEqual(1);
    });
    //invalid ids
    test('invalid Id', () => {
        adminQuizCreate(1,'name','');
        expect(adminQuizCreate(2, 'name', '')).toStrictEqual({
            error: 'UNAUTHORISED',
            message: expect.any(String)
        })
    })
    const invalidNames = [
        '@##$*!',
        'pe',
        '12345678901234567890123456789012349696356346'
    ]
    //test invalid names
    test.each(invalidNames)('test invalid names', (names) => {
        expect(adminQuizCreate(1, names, '')).toStrictEqual({
            error: 'INVALID_QUIZ_NAME',
            message: expect.any(String)
        })
    })
    //duplicate name
    test('duplicate name', () => {
        adminQuizCreate(1, 'name', '');
        expect(adminQuizCreate(1, 'name', '')).toStrictEqual({
            error: 'DUPLICATE_QUIZ_NAME',
            message: expect.any(String)
        })
    })
    //invalid desciption
    test('invalid description', () => {
        const bigString = '12345678901';

        for (let i = 0; i < 11; i++) {
            bigString += bigString;
        }
        expect(adminQuizCreate(1, 'name', bigString)).toStrictEqual({
            error: 'INVALID_DESCRIPTION',
            message: expect.any(String)
        })
    })
    //quizID is updating correctly
    test('create multiple', () => {
        adminQuizCreate(1,'one','');
        adminQuizCreate(1,'two','');
        adminQuizCreate(1,'three','');
        expect
    })
})