import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceServices{
    constructor(){}

    async listarLances(valor?: Decimal){
        try{
            if (valor){
                const lance = await prisma.lance.findUnique({
                    where:{
                        valor
                    }
                });return lance
            }
            else{
                const lances = await prisma.lances.findMany();
                return lances
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async criarLance(lance: Prisma.LanceCreateInput){
        try{
            const novoLance = await prisma.lance.create({
                data: lance
            });
            return novoLance
        }catch(error){
            console.log(error)
            return null
        }
    }

    async atualizarLance(valor: Decimal, lance: Prisma.LanceUpdateInput){
        try{
            const lanceAtualizado = await prisma.lance.update({
                where:{
                    valor
                },
                data:lance
            });return lanceAtualizado
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deletarLance(valor: Decimal){
        try{
            const lancedeletado = await prisma.lance.delete({
                where:{
                    valor
                }
            });return lancedeletado
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new LanceServices();