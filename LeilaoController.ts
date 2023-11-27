import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../Services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async criarLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" && dados.datalimite !== ""){
            const novoLeilao = await LeilaoServices.criarLeilao(dados)
            res.status(200).json({
                status: 'ok',
                novoLeilao: novoLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarLeiloes(req: Request, res: Response){
        const leiloes = LeilaoServices.listarLeiloes();

        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
    }
    

    async atualizarLeilao(req: Request, res: Response){
        const leilao = LeilaoServices.atualizarLeilao = req.body;
        const dados: Prisma.LeilaoUpdateInput = req.body;


        if(dados.produto !== "" && dados.datalimite !== ""){
            const leilaoAtualizado = await LeilaoServices.atualizarLeilao(leilao.produto, dados)
            res.status(200).json({
                status: 'ok',
                leilaoAtualizado: leilaoAtualizado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deletarLeilao(req: Request, res: Response){
        const leilao = LeilaoServices.deletarLeilao = req.body;

        if(leilao.produto !== ""){
            const leilaoDeletado = await LeilaoServices.deletarLeilao(leilao.produto)
            res.status(200).json({
                status: 'ok',
                leilaoDeletado: leilaoDeletado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new LeilaoController();