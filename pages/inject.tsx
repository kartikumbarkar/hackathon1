import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const prisma = new PrismaClient()
const injectmany = async() =>{
    const createmany = await prisma.patient.createMany({
        data: [
            {
                name: "rohan",
            }
        ]
    })


}