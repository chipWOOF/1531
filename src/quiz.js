/*
@param {numbers} userId 
@returns {quizzes} Quizzes object which has quizId and name.

Provide a list of all quizzes that are owned by the currently logged in user.
*/
function adminQuizList (userId) {

    return { quizzes: [
        {
        quizId: 1,
        name: 'My Quiz',
        }
        ]
    }
}


/*
@param {numbers} userId
@param {string} name
@param {string} description 
@returns {numbers} userId

Given basic details about a new quiz, create one for the logged in user.
*/
function adminQuizCreate (userId, name, description){
    return {
        quizId: 2,
    }
}


/*
@param {numbers} userId
@param {numbers} quizId
@returns {}

Given a particular quiz, permanently remove the quiz.
*/
function adminQuizRemove (userId, quizId) {
    return {
    }
}


/*
@param {numbers} userId
@param {numbers} quizId
@returns {object} info about quiz

Get all of the relevant information about the current quiz.
*/

function adminQuizInfo ( userId, quizId ) {
    return {
        quizId: 1,
        name: 'My Quiz',
        timeCreated: 1683125870,
        timeLastEdited: 1683125871,
        description: 'This is my quiz',
      }
}

/*
@param {numbers} userId
@param {numbers} quizId
@param {string} name
@returns {} 

Update the name of the relevant quiz.
*/

function adminQuizNameUpdate(userId, quizId, name) {
  return {};
}

/*
@param {numbers} userId
@param {numbers} quizId
@param {string} description
@returns {}
Update the description of the relevant quiz.
*/

function adminQuizDescriptionUpdate(userId, quizId, description) {
  return {};
}
