/*
@param {string} email
@param {string} password
@param {string} nameFirst
@param {string} nameLast
@returns {numbers}

Given a registered user's email and password, return their userId value.
*/
function adminAuthRegister(email, password, nameFirst, nameLast){
    return {
        userId: 1
    };
}

/*
@param {string} email
@param {string} password
@returns {numbers}

Given an admin user's userId, return details about the user.
"name" is the first and last name concatenated with a single space between them.
*/

function adminAuthLogin(email, password) {
    return {
        userId: 1
    }; 
}

/*
@param {numbers} userId
returns {object} user
Given an admin user's userId and a set of properties, 
update the properties of this logged in admin user.
*/

function adminUserDetails(userId) {
    return { 
        user:
        {
            userId: 1,
            name: 'Hayden Smith',
            email: 'hayden.smith@unsw.edu.au',
            numSuccessfulLogins: 3,
            numFailedPasswordsSinceLastLogin: 1,
        }
    }   
}

/*
@param {numbers} userId 
@param {string} email 
@param {string} nameFirst
@param {string} nameLast
@returns {}

Given an admin user's userId and a set of properties, update the properties of this logged in admin user.
*/
function adminUserDetailsUpdate (userId, email, nameFirst, nameLast) {

    return {};
}


/*
@param {numbers} userId 
@param {string} oldPassword 
@param {string} newPassword
@returns {}

Given details relating to a password change, update the password of a logged in user.
*/
function adminUserPasswordUpdate (userId, oldPassword, newPassword) {

    return {};
}
