import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function  handler(req, res) {
    
   if(req.method == 'GET'){
         const patients = await prisma.patient.findMany();
         res.status(200).json(patients);
         const hospital = await prisma.hospital.findMany();
         res.status(200).json(patients);
           
   }else if(req.method == 'POST'){

      const patient = await prisma.patient.create({
            data: {
                  name: req.body.name
            }
      })
      const hospital = await prisma.hospital.create({
            data: {
                  name: req.body.hospital,
            }
      })
      res.status(200).json(patient);
   }
   
  }