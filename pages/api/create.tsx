import { prisma } from "../../lib/prisma";
import { NextApiRequest,NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {title,content}= req.body

    try{
        await prisma.post.create({
            data:{
                title,
                content
            }
        })
        res.status(200).json({message:'post created'})
    } catch(error){
        console.log("Failed to create post");

    }
}