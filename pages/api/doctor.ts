import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function  handler(req, res) {
    
   if(req.method == 'GET'){
         const doctors = await prisma.doctor.findMany();
         res.status(200).json(doctors);
           
   }
   
  }