const express = require('express');
const router = express.Router();

const {decodeToken, checkUser} = require('../middleware/check-auth');
const userController = require('../controllers/user-controller');
const uniqueValidator = require('../middleware/unique-validator');
const validateRequest = require('../middleware/validate-request');
const users = require('../models/user-model');

/**
 * @apiVersion 1.0.0
 *
 * @api {post} /api/user/create Create New User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} firstName First Name
 * @apiParam {String} lastName  Last Name
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 *
 * @apiHeader {String} [isadmin] Create an account with admin previleges
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 201 OK
 *    {
 *      "error": false,
 *      "message": "User created successfully!!!",
 *      "data": {
 *          "userId": "5b9ff8f4558ca01054196469",
 *          "firstName": "Vikas",
 *          "lastName": "Pulluri",
 *          "email": "vikasiiitn@gmail.com",
 *          "hasAdminPrivilieges": false,
 *          "loginCount": 0
 *      }
 *@apiErrorExample {json} Error Response-1
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-CU-1",
 *      "errorType": "DataValidationError"
 *    }
 *@apiErrorExample {json} Error Response-2
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "An account already exists with the provided email Id",
 *      "errorCode": "UV-1",
 *      "errorType": "DuplicateDataError"
 *    }
 * @apiErrorExample {json} Error Response-3
 *    HTTP/1.1 500 INTERNAL SERVER ERROR
 *    {
 *      "error": true,
 *      "message": "Something went wrong, please try again later...",
 *      "errorCode": "UC-CU-2",
 *      "errorType": "UnknownError"
 *    }
 */
router.post('/create', uniqueValidator(users,'email'), validateRequest('UC-CU-1', 'email','firstName','lastName','password'), userController.createUser);

/**
 * @apiVersion 1.0.0
 *
 * @api {post} /api/user/login Login User
 * @apiName LoginUser
 * @apiGroup User
 *
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "User Logged In Successfully...",
 *      "data": {
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzaWlpdG5AZ21haWwuY29tIiwiaWQiOiI1Yjk2YWRjNDc0NGQ0ZTFhMzhjZjJhOGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MzcyMTMwNjQsImV4cCI6MTUzNzIxNjY2NH0.2U_A27fPZPgkqN1DaS9fg_C6qr5AUeU7rRsO6yQk1uQ",
 *          "username": "Vikas Pulluri",
 *          "email": "vikasiiitn@gmail.com",
 *          "expiryDuration": 7200,
 *          "userId": "5b96adc4744d4e1a38cf2a8a",
 *          "loginCount": 1
 *      }
 * @apiErrorExample {json} Error Response-1
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-LU-1",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-2
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Invalid username provided",
 *      "errorCode": "UC-LU-2",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-3
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Invalid Authentication Credentials",
 *      "errorCode": "UC-LU-3",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-4
 *    HTTP/1.1 500 INTERNAL SERVER ERROR
 *    {
 *      "error": true,
 *      "message": "Something went wrong, please try again later...",
 *      "errorCode": "UC-LU-4",
 *      "errorType": "UknownError"
 *    }
 * @apiErrorExample {json} Error Response-5
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "This Email ID is registered with social authentication. Please sign in through google authentication",
 *      "errorCode": "UC-LU-5",
 *      "errorType": "OAuthError"
 *    }
 */
router.post('/login', validateRequest('UC-LU-1', 'email', 'password'), userController.loginUser);

/**
 * @apiVersion 1.0.0
 *
 * @api {post} /api/user/social-login Social Auth User
 * @apiName socialAuthUser
 * @apiGroup User
 *
 * @apiParam {String} email Email
 * @apiParam {String} firstName First Name
 * @apiParam {String} lastName Last Name
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "User Logged In Successfully...",
 *      "data": {
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzaWlpdG5AZ21haWwuY29tIiwiaWQiOiI1Yjk2YWRjNDc0NGQ0ZTFhMzhjZjJhOGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MzcyMTMwNjQsImV4cCI6MTUzNzIxNjY2NH0.2U_A27fPZPgkqN1DaS9fg_C6qr5AUeU7rRsO6yQk1uQ",
 *          "username": "Vikas Pulluri",
 *          "email": "vikasiiitn@gmail.com",
 *          "expiryDuration": 7200,
 *          "userId": "5b96adc4744d4e1a38cf2a8a",
 *          "loginCount": 1
 *      }
 * @apiErrorExample {json} Error Response-1
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-LU-1",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-2
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Invalid username provided",
 *      "errorCode": "UC-LU-2",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-3
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Invalid Authentication Credentials",
 *      "errorCode": "UC-LU-3",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-4
 *    HTTP/1.1 500 INTERNAL SERVER ERROR
 *    {
 *      "error": true,
 *      "message": "Something went wrong, please try again later...",
 *      "errorCode": "UC-LU-4",
 *      "errorType": "UknownError"
 *    }
 * @apiErrorExample {json} Error Response-1
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "Email is already registered in the application. Please sign in from normal login",
 *      "errorCode": "UC-LU-1",
 *      "errorType": "OAuthError"
 *    }
 */
router.post('/social-login', validateRequest('UC-SLU', 'firstName', 'lastName', 'email'), userController.socialLoginUser);


/**
 * @apiVersion 1.0.0
 *
 * @api {get} /api/user/@self Get User
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiHeader {String} authorization Authorization Token prepended with (Bearer )
 *
 *
 * * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "User Data Fetched Successfully!!!",
 *      "data": {
 *          "userId": "5b9ff8f4558ca01054196469",
 *          "firstName": "Vikas",
 *          "lastName": "Pulluri",
 *          "email": "vikasiiitn@gmail.com",
 *          "createdOn": "2018-09-10T18:28:32.000Z",
 *          "country": "India",
 *          "phone": [
 *              9494336401
 *           ]
 *      }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Authentication Failed",
 *      "errorCode": "CA-1",
 *      "errorType": "OAuthError"
 *    }
 */
router.get('/@self', decodeToken, checkUser, userController.getUser);

/**
 * @apiVersion 1.0.0
 *
 * @api {post} /api/user/stats Statistics
 * @apiName userStatistics
 * @apiGroup User
 *
 * @apiParam {String} userId User ID
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "User Stats Fetched Successfully!!!",
 *      "data": {
 *          "userId": "kleUZpo5",
 *          "firstName": "Vikas",
 *          "lastName": "Pulluri",
 *          "projectDetails": [{
 *              "title": "Default",
 *              "projectId": "jlERlj9U"
 *           }],
 *      }
 * @apiErrorExample {json} Error Response-1
 *    HTTP/1.1 400 BAD REQUEST
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-LU-1",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response-2
 *    HTTP/1.1 404 NOT FOUND
 *    {
 *      "error": true,
 *      "message": "There is no user with id XjilerU74",
 *      "errorCode": "UC-GUS-1",
 *      "errorType": "DataNotFoundError"
 *    }
 * @apiErrorExample {json} Error Response-3
 *    HTTP/1.1 500 INTERNAL SERVER ERROR
 *    {
 *      "error": true,
 *      "message": "Something went wrong, please try again later...",
 *      "errorCode": "UC-LU-4",
 *      "errorType": "UknownError"
 *    }
 */
router.post('/stats', decodeToken, checkUser, validateRequest('UC-GUS', 'userId'), userController.getUserStats);

// only for admin purpose
router.get('/all-users', decodeToken, checkUser, userController.getAllUsers);


/**
 * @apiVersion 1.0.0
 *
 * @apiParam {String} query Type of query user has
 * @apiParam {String} userName Username
 * @apiParam {String} description Feedback Content
 * 
 * @api {post} /api/user/feedback Post Feedback
 * @apiName PostUserFeedback
 * @apiGroup User
 *
 * @apiHeader {String} authorization Authorization Token prepended with (Bearer )
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "Thanks for your time!!! We will get back to you as soon as possible",
 *      "data": []
 *    }    
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Authentication Failed",
 *      "errorCode": "CA-1",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-SUF-1",
 *      "errorType": "DataValidationError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": true,
 *      "message": "An unknown error occured",
 *      "errorCode": "UC-SUF-2",
 *      "errorType": "UnknownError"
 *    }
 */
router.post('/feedback', decodeToken, checkUser, validateRequest('UC-SUF', 'userName', 'description', 'query'), userController.sendUserFeedback);

/**
 * @apiVersion 1.0.0
 *
 * @apiParam {String} firstName User Firstname
 * @apiParam {String} lastName User Lastname
 * 
 * @api {post} /api/user/update User Personal Info Update
 * @apiName UpdateUserPersonalInfo
 * @apiGroup User
 *
 * @apiHeader {String} authorization Authorization Token prepended with (Bearer )
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "Successfully Updated!!!",
 *      "data": {
 *          "firstName": "Vikas",
 *          "lastName": "Pulluri" 
 *      }
 *    }    
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 401 UNAUTHORIZED
 *    {
 *      "error": true,
 *      "message": "Authentication Failed",
 *      "errorCode": "CA-1",
 *      "errorType": "OAuthError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-UUPI-1",
 *      "errorType": "DataValidationError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": true,
 *      "message": "Unable to update your details!!! Please try again later...",
 *      "errorCode": "UC-UUPI-2",
 *      "errorType": "UnknownError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": true,
 *      "message": "An unknown error occured",
 *      "errorCode": "UC-UUPI-3",
 *      "errorType": "UnknownError"
 *    }
 */
router.post('/update', decodeToken, checkUser, userController.updateUserPersonalInfo);


/**
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Registered E-mail
 * 
 * @api {post} /api/user/request-password User Request Password
 * @apiName UserRequestPassword
 * @apiGroup User
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "We have sent a revocery code to your registered mail. Please check your mail and follow the steps mentioned!!!",
 *      "data": {}
 *    }
 * 
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": true,
 *      "message": "Invalid Request",
 *      "errorCode": "UC-RUP-1",
 *      "errorType": "DataValidationError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": true,
 *      "message": "No user found with the provided email Id, please check again the email provided!!!",
 *      "errorCode": "UC-RUP-2",
 *      "errorType": "DataNotFoundError"
 *    }
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": true,
 *      "message": "An unknown error occured",
 *      "errorCode": "UC-RUP-3",
 *      "errorType": "UnknownError"
 *    }
 */
router.post('/request-password', validateRequest('UC-RUP', 'email'), userController.requestUserPassword);

/**
 * @apiVersion 1.0.0
 *
 * @apiParam {String} verificationCode Verification code sent to Email
 * @apiParam {String} newPassword New password
 * 
 * @api {post} /api/user/reset-password User Reset Password
 * @apiName UserResetPassword
 * @apiGroup User
 *
 *
 * @apiSuccessExample {json} Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "error": false,
 *      "message": "Password updated successfully!!! Please login with your new password...",
 *      "data": {}
 *    }
 *
 *  @apiErrorExample {json} Error Response
 *    HTTP/1.1 400 Bad request
 *    {
 *      "error": true,
 *      "message": "Please provide correct verification code!!!",
 *      "errorCode": "UC-RP-3",
 *      "errorType": "OAuthError"
 *    } 
 * @apiErrorExample {json} Error Response
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": true,
 *      "message": "Something went wrong, please try again later!!!",
 *      "errorCode": "UC-RP-3",
 *      "errorType": "UnknownError"
 *    }
 */
router.post('/reset-password', validateRequest('UC-RSP', 'verificationCode', 'newPassword'), userController.resetPassword);

module.exports = router;
