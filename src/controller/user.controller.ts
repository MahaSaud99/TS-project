import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';



export const getAllUsers = async (req:Request,res:Response,next:NextFunction)=>{
  try{
  const users= await prisma.user.findMany();
  console.log("first")
  return res.status(200).json(users);
  }catch(error){
    return res.status(401).json({
      message: '',
    });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try{
    const newUser = req.body as User;
    console.log(newUser)
    await prisma.user.create({
      data:newUser
    })
     return res.status(201).json({
      message: 'New user created !',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    res.status(400).json({
      message: prismaError.message,
    });
  }
  };

export const getUserById = async (req:Request,res:Response,next:NextFunction)=>{

};

export const getUserByEmail = async (req:Request,res:Response,next:NextFunction)=>{

};

export const getUsersByAge = async (req:Request,res:Response,next:NextFunction)=>{

};

export const getUsersByRole = async (req:Request,res:Response,next:NextFunction)=>{

};

export const loginHandler = async (req:Request,res:Response,next:NextFunction)=>{

};

export const changePasswordHandler = async (req:Request,res:Response,next:NextFunction)=>{

};

export const checkJoinigYear = async (req:Request,res:Response,next:NextFunction)=>{

};

export const getUsersByYear = async (req:Request,res:Response,next:NextFunction)=>{

};






