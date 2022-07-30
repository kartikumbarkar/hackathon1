import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function  handler(req, res) {
    
   if(req.method == 'GET'){
         const medicines = await prisma.medicine.findMany();
         res.status(200).json(medicines);
           
   }
   
  }