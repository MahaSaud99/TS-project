import express from 'express'
import { addUser, changePasswordHandler, checkJoinigYear, getAllUsers, getUserByEmail, getUserById, getUsersByAge, getUsersByRole, getUsersByYear, loginHandler } from '../controller/user.controller';
import validate from '../middleware/validate';
import { addUserSchema, changePasswordSchema, checkJoinigYearSchema, getUserByEmailSchema, getUserByIdSchema, getUsersByAgeSchema, getUsersByJoinigYearSchema, getUsersByRoleSchema, loginSchema } from '../zod_schema/user.schema';

const userRouter=express.Router();

// Get All Users
userRouter.get('/' , getAllUsers );

// Add User
userRouter.post('/register' , validate(addUserSchema) , addUser);

// Get User by ID
userRouter.get('/id/:userid' , validate(getUserByIdSchema) , getUserById);

// Get User by email
userRouter.get('/email/:email' , validate(getUserByEmailSchema) , getUserByEmail);

// Get Users > age
userRouter.get('/age/:age' ,validate(getUsersByAgeSchema) , getUsersByAge );

// Counts users having this role
userRouter.get('/role/:role' , validate(getUsersByRoleSchema) , getUsersByRole);

// Login
userRouter.post('/login' , validate(loginSchema) , loginHandler );

// Update password
userRouter.put('/change-password/:userid' , validate(changePasswordSchema) , changePasswordHandler);

// Check User Joining Year
userRouter.get('/:userid/:year' , validate(checkJoinigYearSchema) , checkJoinigYear)

// Get Users by Joining Year
userRouter.get('/year/:year' , validate(getUsersByJoinigYearSchema) , getUsersByYear);



export default userRouter;

