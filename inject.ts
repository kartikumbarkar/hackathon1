import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB




  const inject = async() => {
    // const patient = await prisma.patient.create({
    //   data: {
    //     name: "hell",
    //   },
    // })
    // const hospital = await prisma.hospital.create({
    //   data: {
    //     name: "hospital1",
    //     hpid: 1,
    //     Hp_add: "nagpur",
    //     patientid: 1
    //   },
    // })
   await prisma.patient.create({
      data: {
        name :"kartik",
        hospital:{
          create:[{name :"OCH",hp_add:"nagpur"},
        {name :"OCH",hp_add:"nagpur"}]
        },
      },
    })
  await prisma.doctor.create({
    data: {
      dt_name:"advait",
      specialization:"MRI",
      disease:"Something",
      medicines:{
        create:[{recommended:"R2",alternative:"G2"},
      ]
      },
    },
  })
}
   
  inject();