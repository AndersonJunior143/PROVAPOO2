import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LeilaoServices{
    constructor(){}

    async listarLeiloes(produto?: String){
        try{
            if (produto){
                const leilao = await prisma.leilao.findUnique({
                    where:{
                        produto
                    }
                });return leilao
            }
            else{
                const leiloes = await prisma.leiloes.findMany();
                return leiloes
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async criarLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const novoLeilao = await prisma.leilao.create({
                data: leilao
            });
            return novoLeilao
        }catch(error){
            console.log(error)
            return null
        }
    }

    async atualizarLeilao(produto: String, leilao: Prisma.LeilaoUpdateInput){
        try{
            const leilaoAtualizado = await prisma.leilao.update({
                where:{
                    produto
                },
                data:leilao
            });return leilaoAtualizado
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deletarLeilao(produto: String){
        try{
            const leilaodeletado = await prisma.leilao.delete({
                where:{
                    produto
                }
            });return leilaodeletado
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new LeilaoServices();