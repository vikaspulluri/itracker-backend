define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "E__Vikas_workspace_issue_tracker_backend_docs_main_js",
    "groupTitle": "E__Vikas_workspace_issue_tracker_backend_docs_main_js",
    "name": ""
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/project/create",
    "title": "Create New Project",
    "name": "CreateProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyCode",
            "description": "<p>Two characters key code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerName",
            "description": "<p>Project Owner Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Project Owner ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Project Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "members",
            "description": "<p>Project Members</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "members.userId",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "members.firstName",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "members.lastName",
            "description": "<p>User Last Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 201 OK\n{\n  \"error\": false,\n  \"message\": \"Project created successfully!!!\",\n  \"data\": {\n      \"projectId\": \"5b9ff8f4558ca01054196469\",\n      \"title\": \"Courvoisier Development\",\n      \"keyCode\": \"CD\",\n      \"type\": \"Website\",\n      \"ownerName\": \"Vikas Pulluri\",\n      \"ownerId\": \"XYklP6j\",\n      \"members\": [\n          {\n              \"userId\": \"XYklP6j\",\n              \"firstName\": \"Vikas\",\n              \"lastName\": \"Pulluri\"\n          },\n          {\n              \"userId\": \"NlPTu8X\",\n              \"firstName\": \"Noothana\",\n              \"lastName\": \"Pasupureddy\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"PC-CP-1\",\n  \"errorType\": \"DataValidationError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-3",
          "content": "HTTP/1.1 500 INTERNAL SERVER ERROR\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later...\",\n  \"errorCode\": \"PC-CP-2\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/project-routes.js",
    "groupTitle": "Project"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/user/create",
    "title": "Create New User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "isadmin",
            "description": "<p>Create an account with admin previleges</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 201 OK\n{\n  \"error\": false,\n  \"message\": \"User created successfully!!!\",\n  \"data\": {\n      \"userId\": \"5b9ff8f4558ca01054196469\",\n      \"firstName\": \"Vikas\",\n      \"lastName\": \"Pulluri\",\n      \"email\": \"vikasiiitn@gmail.com\",\n      \"hasAdminPrivilieges\": false,\n      \"loginCount\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-CU-1\",\n  \"errorType\": \"DataValidationError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-2",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"An account already exists with the provided email Id\",\n  \"errorCode\": \"UV-1\",\n  \"errorType\": \"DuplicateDataError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-3",
          "content": "HTTP/1.1 500 INTERNAL SERVER ERROR\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later...\",\n  \"errorCode\": \"UC-CU-2\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/api/user/@self",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Token prepended with (Bearer )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"User Data Fetched Successfully!!!\",\n  \"data\": {\n      \"userId\": \"5b9ff8f4558ca01054196469\",\n      \"firstName\": \"Vikas\",\n      \"lastName\": \"Pulluri\",\n      \"email\": \"vikasiiitn@gmail.com\",\n      \"createdOn\": \"2018-09-10T18:28:32.000Z\",\n      \"country\": \"India\",\n      \"phone\": [\n          9494336401\n       ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Authentication Failed\",\n  \"errorCode\": \"CA-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/api/user/notifications",
    "title": "Get User Notifications",
    "name": "GetUserNotifications",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Token prepended with (Bearer )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"User Data Fetched Successfully!!!\",\n  \"data\": [\n      {\"arrived\":\"2018-11-24T08:26:47.457Z\",\"_id\":\"5bf90b475150c51564ea9167\",\"message\":\"You have received a friend request from Noothana P\"},\n      {\"arrived\":\"2018-11-24T08:27:41.682Z\",\"_id\":\"5bf90b7d5150c51564ea9168\",\"message\":\"You have accepted friend request of Noothana P\"},\n      {\"arrived\":\"2018-11-24T09:39:01.950Z\",\"_id\":\"5bf91c35e32e760fdcaf485e\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Authentication Failed\",\n  \"errorCode\": \"CA-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"An unknown error occured\",\n  \"errorCode\": \"UC-GUN-1\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"User Logged In Successfully...\",\n  \"data\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzaWlpdG5AZ21haWwuY29tIiwiaWQiOiI1Yjk2YWRjNDc0NGQ0ZTFhMzhjZjJhOGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MzcyMTMwNjQsImV4cCI6MTUzNzIxNjY2NH0.2U_A27fPZPgkqN1DaS9fg_C6qr5AUeU7rRsO6yQk1uQ\",\n      \"username\": \"Vikas Pulluri\",\n      \"email\": \"vikasiiitn@gmail.com\",\n      \"expiryDuration\": 7200,\n      \"userId\": \"5b96adc4744d4e1a38cf2a8a\",\n      \"loginCount\": 1\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-LU-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-2",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Invalid username provided\",\n  \"errorCode\": \"UC-LU-2\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-3",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Invalid Authentication Credentials\",\n  \"errorCode\": \"UC-LU-3\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-4",
          "content": "HTTP/1.1 500 INTERNAL SERVER ERROR\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later...\",\n  \"errorCode\": \"UC-LU-4\",\n  \"errorType\": \"UknownError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-5",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"This Email ID is registered with social authentication. Please sign in through google authentication\",\n  \"errorCode\": \"UC-LU-5\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Experience with app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback/Suggestions text</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/api/user/feedback",
    "title": "Post Feedback",
    "name": "PostUserFeedback",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Token prepended with (Bearer )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"Thanks for your time!!!\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Authentication Failed\",\n  \"errorCode\": \"CA-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-SUF-1\",\n  \"errorType\": \"DataValidationError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"An unknown error occured\",\n  \"errorCode\": \"UC-SUF-2\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User Lastname</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/api/user/update",
    "title": "User Personal Info Update",
    "name": "UpdateUserPersonalInfo",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Token prepended with (Bearer )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"Successfully Updated!!!\",\n  \"data\": {\n      \"firstName\": \"Vikas\",\n      \"lastName\": \"Pulluri\" \n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Authentication Failed\",\n  \"errorCode\": \"CA-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-UUPI-1\",\n  \"errorType\": \"DataValidationError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"Unable to update your details!!! Please try again later...\",\n  \"errorCode\": \"UC-UUPI-2\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"An unknown error occured\",\n  \"errorCode\": \"UC-UUPI-3\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Registered E-mail</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/api/user/request-password",
    "title": "User Request Password",
    "name": "UserRequestPassword",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"We have sent a revocery code to your registered mail. Please check your mail and follow the steps mentioned!!!\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-RUP-1\",\n  \"errorType\": \"DataValidationError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": true,\n  \"message\": \"No user found with the provided email Id, please check again the email provided!!!\",\n  \"errorCode\": \"UC-RUP-2\",\n  \"errorType\": \"DataNotFoundError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"An unknown error occured\",\n  \"errorCode\": \"UC-RUP-3\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verificationCode",
            "description": "<p>Verification code sent to Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/api/user/reset-password",
    "title": "User Reset Password",
    "name": "UserResetPassword",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"Password updated successfully!!! Please login with your new password...\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": true,\n  \"message\": \"Please provide correct verification code!!!\",\n  \"errorCode\": \"UC-RP-3\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later!!!\",\n  \"errorCode\": \"UC-RP-3\",\n  \"errorType\": \"UnknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/user/social-login",
    "title": "Social Auth User",
    "name": "socialAuthUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"User Logged In Successfully...\",\n  \"data\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzaWlpdG5AZ21haWwuY29tIiwiaWQiOiI1Yjk2YWRjNDc0NGQ0ZTFhMzhjZjJhOGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MzcyMTMwNjQsImV4cCI6MTUzNzIxNjY2NH0.2U_A27fPZPgkqN1DaS9fg_C6qr5AUeU7rRsO6yQk1uQ\",\n      \"username\": \"Vikas Pulluri\",\n      \"email\": \"vikasiiitn@gmail.com\",\n      \"expiryDuration\": 7200,\n      \"userId\": \"5b96adc4744d4e1a38cf2a8a\",\n      \"loginCount\": 1\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-LU-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-2",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Invalid username provided\",\n  \"errorCode\": \"UC-LU-2\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-3",
          "content": "HTTP/1.1 401 UNAUTHORIZED\n{\n  \"error\": true,\n  \"message\": \"Invalid Authentication Credentials\",\n  \"errorCode\": \"UC-LU-3\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-4",
          "content": "HTTP/1.1 500 INTERNAL SERVER ERROR\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later...\",\n  \"errorCode\": \"UC-LU-4\",\n  \"errorType\": \"UknownError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Email is already registered in the application. Please sign in from normal login\",\n  \"errorCode\": \"UC-LU-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/api/user/stats",
    "title": "Statistics",
    "name": "userStatistics",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"message\": \"User Stats Fetched Successfully!!!\",\n  \"data\": {\n      \"userId\": \"kleUZpo5\",\n      \"firstName\": \"Vikas\",\n      \"lastName\": \"Pulluri\",\n      \"projectDetails\": [{\n          \"title\": \"Default\",\n          \"projectId\": \"jlERlj9U\"\n       }],\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response-1",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"error\": true,\n  \"message\": \"Invalid Request\",\n  \"errorCode\": \"UC-LU-1\",\n  \"errorType\": \"OAuthError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-2",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n  \"error\": true,\n  \"message\": \"There is no user with id XjilerU74\",\n  \"errorCode\": \"UC-GUS-1\",\n  \"errorType\": \"DataNotFoundError\"\n}",
          "type": "json"
        },
        {
          "title": "Error Response-3",
          "content": "HTTP/1.1 500 INTERNAL SERVER ERROR\n{\n  \"error\": true,\n  \"message\": \"Something went wrong, please try again later...\",\n  \"errorCode\": \"UC-LU-4\",\n  \"errorType\": \"UknownError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/user-routes.js",
    "groupTitle": "User"
  }
] });
