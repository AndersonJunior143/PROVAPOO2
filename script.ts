import { PrismaClient } from '@prisma/client'
import UserServices from './Services/UserServices'

const prisma = new PrismaClient()

async function main() {
    // await UserServices.createUser(
    //    {email: 'Otavio@gmail.com',
    //    name: 'Otavio'}
    //)
    // console.log(await UserServices.listUser())
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })