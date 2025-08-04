```javascript
let data = {
    // TODO: insert your data structure that contains 
    // users + quizzes here

    const users = [

        {
            userId: 1,
            nameFirst: 'Han',
            nameLast: 'Hanh',
            email: 'han.hanh@unsw.edu.au',
            numSuccessfulLogins: 3,
            numFailedPasswordsSinceLastLogin: 1
        }
    ];

    const quizzes = [

        {
            quizId: 1,
            name: 'JavaScript fundamentals',
            timeCreated: 1683125870,
            timeLastEdited: 1683125871,
            description: 'This quiz is about JavaScript fundamentals',
        }
    ];

}
```

[Optional] short description: 

We are going to use an array of objects twice, one for users and one for quizzes.
It is very efficient to access since we are given both a userId and a quizId.
